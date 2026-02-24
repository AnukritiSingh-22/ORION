from fastapi import FastAPI
from app.auth.auth_routes import router as auth_router
from app.users.user_routes import router as user_router
from app.interview.interview_routes import router as interview_router

app = FastAPI(title="ORION Backend")

app.include_router(auth_router, prefix="/auth")
app.include_router(user_router, prefix="/users")
app.include_router(interview_router, prefix="/interview")

@app.get("/")
def root():
    return {"message": "ORION backend running"}