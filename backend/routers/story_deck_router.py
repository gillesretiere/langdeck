from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import StoryDeckDB

router = APIRouter()

#--- list all langdecks )
@router.get("/", response_description="List all scenes ")
async def list_all_langdecks(request:Request, language_uid: Optional[str]=None)-> List[StoryDeckDB]:
    query={}
    if language_uid:
        query["language"] = language_uid
    full_query = request.app.mongodb["saynetes"].find(query).sort("language",1)
    result = [StoryDeckDB(**raw_rec) async for raw_rec in full_query]
    return result

#--- list one langdeck by language uid
@router.get("/{uid}", response_description="List a theme by language uid")
async def list_themes_by_language_id (request: Request, uid: str):
    if (documents := await request.app.mongodb["themes_deck"].find_one({"language":uid[-3:]})) is not None:
        print (documents)
        return StoryDeckDB(**documents)
    raise HTTPException (status_code=404, detail=f"theme_uid with uid {uid} not found.") 