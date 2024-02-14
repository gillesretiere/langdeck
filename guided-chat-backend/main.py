from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from decouple import config
import uvicorn


HOST = config('HOST', cast=str)

origins = [
    "http://"+HOST+":4455",
]

app = FastAPI()

app.add_middleware(
CORSMiddleware,
allow_origins=["*"],
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
        await websocket.accept()
        self.active_connections.append(websocket)
        self.client_ids.append(client_id)
        await self.broadcast (f"Client #{client_id} est entré dans la chatroom", client_ids=self.client_ids)    

    async def send_personal_message (self, message: str, client_ids: list[str], websocket: WebSocket):
        await websocket.send_json({"message": message, "client_ids": client_ids})

    async def broadcast (self, message: str, client_ids: list[str]):
        for connection in self.active_connections:
            # await connection.send_text (message)
            try:
                await connection.send_json ({"message": message, "client_ids": client_ids})   
            except RuntimeError:
                connection.close()
                break   

    async def broadcast_tr (self, message: str, question_tr: str, options: list[str], audio: str, client_ids: list[str]):
        for connection in self.active_connections:
            # await connection.send_text (message)
            try:
                await connection.send_json ({"message": message,"question_tr": question_tr, "options": options, "audio": audio, "client_ids": client_ids})
            except RuntimeError:
                connection.close()
                break   

manager = ConnectionsManager()


@app.websocket("/ws/{client_id}")
async def websocket_endpoint (websocket: WebSocket, client_id: str):
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
            # send personal message
            await websocket.send_text(f"Message text was: {data}")
            print (msg)
            await manager.send_personal_message (
                message=f"Message envoyé : {msg} ; question : {question} ; traduction : {question_tr}", 
                client_ids=manager.client_ids, websocket=websocket)
            # broadcast
            await manager.broadcast_tr (
                message = f"Question posée : {question_tr}", 
                question_tr=question_tr, 
                options=options, 
                audio=audio, 
                client_ids=manager.client_ids)

            
    except WebSocketDisconnect as e:
        # disconnect
        print (str(e))
        pass


if __name__ == "__main__":
    uvicorn.run (app=app, host=HOST, port=4455, reload=True)
