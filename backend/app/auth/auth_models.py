from pydantic import BaseModel

class UserCreate(BaseModel):
    email: str
    password: str
    domain: str

class UserLogin(BaseModel):
    email: str
    password: str