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

if __name__ == "__main__":
    uvicorn.run (app=app, host=HOST, port=4455)
