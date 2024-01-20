
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from decouple import config
import uvicorn

from motor.motor_asyncio import AsyncIOMotorClient
from routers.language_deck import router as language_deck_router
from routers.scene_deck import router as scene_deck_router
from routers.saynete import router as saynete_router
from routers.lang_deck_router import router as lang_deck_router
from routers.story_deck_router import router as story_deck_router
from routers.themes_deck_router import router as themes_deck_router


HOST = config('HOST', cast=str)
DOMAIN = config('DOMAIN', cast=str)
WWW_DOMAIN = config('WWW_DOMAIN', cast=str)
DB_URL = config('DB_URL', cast=str)
DB_NAME = config('DB_NAME', cast=str)

# used by frontend calls
origins = [
"http://localhost",
"http://localhost:8080",
"http://localhost:3000",
"http://localhost:8000",
"http://"+HOST,
"http://"+HOST+":8080",
"http://"+HOST+":8000",
"http://"+HOST+":3000",
"http://"+DOMAIN,
"http://"+DOMAIN+":8080",
"http://"+DOMAIN+":8000",
"http://"+DOMAIN+":3000",
"http://"+WWW_DOMAIN,
"http://"+WWW_DOMAIN+":8080",
"http://"+WWW_DOMAIN+":8000",
"http://"+WWW_DOMAIN+":3000",
"ws://"+WWW_DOMAIN+":8000",
"ws://"+DOMAIN+":8000",
"ws://"+HOST+":8000",
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
        print ("cnx pending for " + client_id)
        await websocket.accept()
        self.active_connections.append(websocket)
        self.client_ids.append(client_id)
        await self.broadcast (f"Client #{client_id} has joined the chat", client_ids=self.client_ids)
        

    async def disconnect(self, websocket: WebSocket, client_id: str):
        self.active_connections.remove(websocket)
        self.client_ids.remove(client_id)
        await self.broadcast (f"Client #{client_id} has left the chat", client_ids=self.client_ids)

    async def send_personal_message (self, message: str, client_ids: list[str], websocket: WebSocket):
        await websocket.send_json({"message": message, "client_ids": client_ids})

    async def broadcast (self, message: str, client_ids: list[str]):
        for connection in self.active_connections:
            # await connection.send_json ({"message": message, "client_ids": client_ids})
            await connection.send_text (message)
        
manager = ConnectionsManager()


@app.websocket("/ws")
async def websocket_endpoint (websocket: WebSocket):
    # connect
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")

@app.websocket("/ws/{client_id}")
async def websocket_endpoint (websocket: WebSocket, client_id: str):
    # connect
    await manager.connect(websocket, client_id)
    try:
        data = f"DATA Hallo {client_id}"
        while True:
            #data = await websocket.receive_text()
            # send personnal message
            # print ("cnx okay for " + client_id)
            #await manager.send_personal_message (message=f"You wrote {data}", client_ids=manager.client_ids, websocket=websocket)
            await manager.broadcast (message = f"Client ID {client_id} says : {data},  ", client_ids=manager.client_ids)

            # broadcast
    except WebSocketDisconnect as e :
        # disconnect
        print (str(e))
        await manager.disconnect (websocket=websocket, client_id=client_id)
        print ("disconnected")

@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient(DB_URL)
    app.mongodb = app.mongodb_client[DB_NAME]

@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()

app.include_router(language_deck_router, prefix="/language-deck", tags=["language deck"])
app.include_router(scene_deck_router, prefix="/scene-deck", tags=["scene deck"])
app.include_router(saynete_router, prefix="/saynete", tags=["saynete"])
app.include_router(lang_deck_router, prefix="/langdeck", tags=["langdeck"])
app.include_router(story_deck_router, prefix="/storydeck", tags=["storydeck"])
app.include_router(themes_deck_router, prefix="/themesdeck", tags=["themes deck"])
        
if __name__ == "__main__":
    uvicorn.run("__main__:app",host=HOST,port=8000, reload=True)