from bson import ObjectId
from pydantic import Field, BaseModel
from typing import Optional, List, Dict, Any

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class MongoBaseModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")

    class Config:
        json_encoders = {ObjectId: str}

### here we add App classes

class LanguageDeckBase(MongoBaseModel):
    language_uid: str = Field(..., min_length=3, max_length=3)
    language_iso2: str = Field(..., min_length=2, max_length=2)
    language_iso2_google: Optional[str] = Field(..., min_length=2, max_length=5)
    language_wals_code: str = Field(...,  min_length=3)
    language_name_en: str = Field(..., min_length=3)
    language_name_fr: str = Field(...,  min_length=3)
    language_name_native: str = Field(..., min_length=3)
    country_ref: str = Field(..., min_length=2, max_length=2)
    flag_icon: str = Field(...,  min_length=3)

class LanguageDeckDB(LanguageDeckBase):
    pass
