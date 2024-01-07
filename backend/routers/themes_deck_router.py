from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import ThemesDeckDB

router = APIRouter()

#--- list all themes)
@router.get("/", response_description="List all theme decks ")
async def list_available_theme_decks(request:Request, language_uid: Optional[str]=None)-> List[ThemesDeckDB]:
    query={}
    if language_uid:
        query["language"] = language_uid
    full_query = request.app.mongodb["themes_deck"].find(query).sort("language",1)
    result = [ThemesDeckDB(**raw_rec) async for raw_rec in full_query]
    return result

#--- list one theme by uid
@router.get("/{uid}", response_description="List a theme by language uid")
async def list_themes_by_language_id (request: Request, uid: str):
    if (language := await request.app.mongodb["themes_deck"].find_one({"language":uid})) is not None:
        return ThemesDeckDB(**language)
    raise HTTPException (status_code=404, detail=f"theme_uid with uid {uid} not found.") 