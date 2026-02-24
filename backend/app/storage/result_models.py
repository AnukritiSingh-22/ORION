from pydantic import BaseModel

class InterviewResult(BaseModel):
    overall_score: float
    feedback: dict