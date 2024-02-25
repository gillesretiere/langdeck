# main.py
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# async routing with mongodb
from motor.motor_asyncio import AsyncIOMotorClient
from routers.root import router as root_router
from routers.tschat import router as tschat_router
# for accessing .env variables
from decouple import config

HOST = config('HOST', cast=str)
DOMAIN = config('DOMAIN', cast=str)
WWW_DOMAIN = config('WWW_DOMAIN', cast=str)
DB_URL = config('DB_URL', cast=str)
DB_NAME = config('DB_NAME', cast=str)

# used by frontend calls
origins = [
    "http://localhost:3000",
    "http://localhost:4455",
    "http://"+HOST+":4455",
    "http://"+HOST+":3000",
    "http://"+HOST+":3002",
    "http://"+DOMAIN+":4455",
    "http://"+DOMAIN+":3000",
    "http://"+DOMAIN+":3002",
    "http://"+WWW_DOMAIN+":4455",
    "http://"+WWW_DOMAIN+":3000",
    "http://"+WWW_DOMAIN+":3002",
    "ws://"+WWW_DOMAIN+":4455",
    "ws://"+DOMAIN+":4455",
    "ws://"+HOST+":4455",
    "ws://"+HOST+":3002",
]

app = FastAPI()
app.add_middleware(
CORSMiddleware,
allow_origins=origins,
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)

class ConnectionsManager:
    def __init__ (self):
        self.active_connections: list[WebSocket] = []
        self.client_ids: list[str] = []

    async def connect(self, websocket: WebSocket, client_id: str):
        # print ("cnx pending for " + client_id)
        for soc in self.active_connections:
            print (soc)
        for cid in self.client_ids:
            print (cid)
            
        if websocket not in self.active_connections:
            self.active_connections.append(websocket)
            print (f"Just added cnx {websocket}")
            await websocket.accept()

        if client_id not in self.client_ids:
            print (f"Just added cid {client_id}")
            self.client_ids.append(client_id)

        await self.broadcast (f"Client #{client_id} a rejoint la conversation!", client_ids=self.client_ids)


    async def disconnect(self, websocket: WebSocket, client_id: str):
        self.active_connections.remove(websocket)
        self.client_ids.remove(client_id)
        await self.broadcast (f"Client #{client_id} a quitté la conversation!", client_ids=self.client_ids)

    async def send_personal_message (self, message: str, client_ids: list[str], websocket: WebSocket):
        await websocket.send_json({"message": message, "client_ids": client_ids})

    async def broadcast (self, message: str, client_ids: list[str]):
        for connection in self.active_connections:
            # await connection.send_text (message)
            try:
                await connection.send_json ({"message": message, "client_ids": client_ids})
            except RuntimeError:
                break

    async def broadcast_option (self, message: str, option: str, client_ids: list[str]):
        for connection in self.active_connections:
            # await connection.send_text (message)
            try:
                await connection.send_json ({"message": message, "option": option, "client_ids": client_ids})
            except RuntimeError:
                break

    async def send_message_received (self, message: str, client_ids: list[str], websocket: WebSocket):
        await websocket.send_json({"message_received": message, "client_ids": client_ids}) 

    async def send_question_tr (self, message: str, client_ids: list[str], websocket: WebSocket):
        await websocket.send_json({"message": message, "client_ids": client_ids})            

    async def broadcast_tr (self, message: str, question_tr: str, options: list[str], audio: str, client_ids: list[str]):
        for connection in self.active_connections:
            # await connection.send_text (message)
            print(client_ids)
            try:
                await connection.send_json ({"message": message,"question_tr": question_tr, "options": options, "audio": audio, "client_ids": client_ids})
            except RuntimeError:
                break


manager = ConnectionsManager()

@app.websocket("/ws/b/{client_id}")
async def websocket_endpoint (websocket: WebSocket, client_id: str):
    # connect
    await manager.connect(websocket, client_id)
    try:
        while True:
            data = await websocket.receive_text()
            # send personnal message
            await manager.send_personal_message (message=f"Vous avez répondu :  {data}", client_ids=manager.client_ids, websocket=websocket)
            # broadcast
            await manager.broadcast_option (message = f"{client_id} il dit que : {data},  ", option=data, client_ids=manager.client_ids)

    except WebSocketDisconnect as e :
        # disconnect
        print (str(e))
        await manager.disconnect (websocket=websocket, client_id=client_id)
        #await manager.broadcast(f"Client #{client_id} left the chat")


@app.websocket("/ws/a/{client_id}")
async def websocket_endpoint (websocket: WebSocket, client_id: str):
    # connect
    await manager.connect(websocket, client_id)
    try:
        while True:
            data = await websocket.receive_json()
            msg = data["message"]
            language = data["language"]
            question = data["question"]
            question_tr = data["question_tr"]
            options = data["options"]
            audio = data["audio"]
            
            # send personnal message
            await manager.send_personal_message (message=f"Message envoyé : {msg} ; question : {question} ; traduction : {question_tr}"  , client_ids=manager.client_ids, websocket=websocket)
            #await manager.send_question_tr (message=question_tr, client_ids=manager.client_ids, websocket=websocket)
            #await manager.send_message_received (message=question_tr, client_ids=manager.client_ids, websocket=websocket)
            # broadcast
            # await manager.broadcast (message = f"Client ID {client_id} says : {msg} in {language},  ", client_ids=manager.client_ids)
            await manager.broadcast_tr (message = f"Question posée : {question_tr}", question_tr=question_tr, options=options, audio=audio, client_ids=manager.client_ids)

    except WebSocketDisconnect as e :
        # disconnect
        print (str(e))
        #await manager.broadcast(f"Client #{client_id} left the chat")
        await manager.disconnect (websocket=websocket, client_id=client_id)

@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient(DB_URL)
    app.mongodb = app.mongodb_client[DB_NAME]

@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()

app.include_router(root_router, prefix="/root", tags=["root"])
app.include_router(tschat_router, prefix="/tschat", tags=["tschat"])

if __name__ == "__main__":
    uvicorn.run(app=app, host=HOST, port=4455)