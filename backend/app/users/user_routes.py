from fastapi import APIRouter
from app.users.user_models import UserProfile

router = APIRouter()

@router.get("/me")
def get_profile():
    return UserProfile(email="test@example.com", domain="tech")