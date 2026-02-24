from fastapi import APIRouter
from app.auth.auth_models import UserCreate, UserLogin
from app.auth.auth_utils import fake_hash_password

router = APIRouter()

@router.post("/signup")
def signup(user: UserCreate):
    return {
        "email": user.email,
        "domain": user.domain,
        "password": fake_hash_password(user.password)
    }

@router.post("/login")
def login(user: UserLogin):
    return {"message": "Login successful"}