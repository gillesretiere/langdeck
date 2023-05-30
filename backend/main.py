from fastapi.middleware.cors import CORSMiddleware
from decouple import config
import uvicorn
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from routers.translationLanguages import router as home_router


HOST = config('HOST', cast=str)
DOMAIN = config('DOMAIN', cast=str)
WWW_DOMAIN = config('WWW_DOMAIN', cast=str)

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
]

DB_URL = config('DB_URL', cast=str)
DB_NAME = config('DB_NAME', cast=str)

app = FastAPI()
app.add_middleware(
CORSMiddleware,
allow_origins=origins,
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

app.include_router(home_router, prefix="/translationLanguages", tags=["translationLanguages"])

if __name__ == "__main__":
    uvicorn.run("__main__:app",host=HOST,port=8000, reload=True)