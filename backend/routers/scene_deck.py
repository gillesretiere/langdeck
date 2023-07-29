from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import SceneDB

router = APIRouter()

#--- list all stories)
@router.get("/", response_description="List all scenes ")
async def list_available_scenes(request:Request, story_uid: Optional[str]=None)-> List[SceneDB]:
    query={}
    if story_uid:
        query["story_uid"] = story_uid
    full_query = request.app.mongodb["decks"].find(query).sort("story_uid",1)
    result = [SceneDB(**raw_rec) async for raw_rec in full_query]
    return result

#--- list one story by uid
@router.get("/{uid}", response_description="List a scene by language uid")
async def list_scenes_by_language_id (request: Request, uid: str):
    if (language := await request.app.mongodb["decks"].find_one({"language":uid})) is not None:
        return SceneDB(**language)
    raise HTTPException (status_code=404, detail=f"story_uid with uid {uid} not found.") 