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

app = FastAPI()
app.add_middleware(
CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)

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
    uvicorn.run(app=app, host="51.91.8.112", port=4455)