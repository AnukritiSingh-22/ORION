"""
Creates dummy users for testing
"""

def create_users():
    users = [
        {"email": "test1@example.com", "domain": "tech"},
        {"email": "test2@example.com", "domain": "business"}
    ]
    print("Dummy users created:", users)

if __name__ == "__main__":
    create_users()