from fastapi import APIRouter
from app.interview.question_bank import QUESTION_BANK

router = APIRouter()

@router.get("/questions/{domain}")
def get_questions(domain: str):
    return QUESTION_BANK.get(domain, [])