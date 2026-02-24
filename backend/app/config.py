import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./orion.db")
SECRET_KEY = os.getenv("SECRET_KEY", "orion-secret")