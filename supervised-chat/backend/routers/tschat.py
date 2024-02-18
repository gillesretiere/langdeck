# Themed (or Topic-related) Supervised CHAT
from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import TSChatDB

router = APIRouter()

#--- list all themes)
@router.get("/", response_description="List all chat decks ")
async def list_available_chat_decks(request:Request, language_uid: Optional[str]=None)-> List[TSChatDB]:
    query={}
    if language_uid:
        query["language"] = language_uid
    full_query = request.app.mongodb["langdeckAB"].find(query).sort("language",1)
    result = [TSChatDB(**raw_rec) async for raw_rec in full_query]
    return result

#--- list one chat by uid
@router.get("/{uid}", response_description="List a chat by language uid")
async def list_chats_by_language_id (request: Request, uid: str):
    if (language := await request.app.mongodb["langdeckAB"].find_one({"language":uid})) is not None:
        return TSChatDB(**language)
    raise HTTPException (status_code=404, detail=f"conversation_uid with uid {uid} not found.") 