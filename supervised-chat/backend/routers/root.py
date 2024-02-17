from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import LanguageDeckDB

router = APIRouter()

#--- list all translators
@router.get("/", response_description="List all languages available for translation")
async def list_all(request:Request, language_uid: Optional[str]=None)-> List[LanguageDeckDB]:
    query={}
    if language_uid:
        query["language_uid"] = language_uid
    full_query = request.app.mongodb["translators"].find(query).sort("language_uid",1)
    result = [LanguageDeckDB(**raw_language) async for raw_language in full_query]
    return result

#--- list one translator by uid
@router.get("/{uid}", response_description="List a translator by uid")
async def list_by_id (request: Request, uid: str):
    if (language_uid := await request.app.mongodb["translators"].find_one({"language_uid":uid})) is not None:
        return LanguageDeckDB(**language_uid)
    raise HTTPException (status_code=404, detail=f"Translator with uid {uid} not found.") 