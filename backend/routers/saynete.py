from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import SayneteDB

router = APIRouter()

#--- list all stories)
@router.get("/", response_description="List all scenes ")
async def list_available_saynetes(request:Request, language_uid: Optional[str]=None)-> List[SayneteDB]:
    query={}
    if language_uid:
        query["language"] = language_uid
    full_query = request.app.mongodb["saynetes"].find(query).sort("language",1)
    result = [SayneteDB(**raw_rec) async for raw_rec in full_query]
    return result

#--- list one story by uid
@router.get("/{uid}", response_description="List a scene by language uid")
async def list_scenes_by_language_id (request: Request, uid: str):
    if (language := await request.app.mongodb["saynetes"].find_one({"language":uid})) is not None:
        return SayneteDB(**language)
    raise HTTPException (status_code=404, detail=f"story_uid with uid {uid} not found.") 