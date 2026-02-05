"""
Seeds predefined interview questions into the system
"""

QUESTIONS = {
    "tech": [
        "Explain supervised learning.",
        "What is overfitting?"
    ],
    "business": [
        "What is market segmentation?"
    ]
}

def seed():
    print("Question bank seeded.")
    for domain, qs in QUESTIONS.items():
        print(domain, "->", len(qs), "questions")

if __name__ == "__main__":
    seed()