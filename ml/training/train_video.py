"""
Trains / calibrates head movement & gaze stability thresholds
"""

import json
from pathlib import Path

DATA_PATH = Path("ml/datasets/processed/video_features.json")

def train_video_model():
    if not DATA_PATH.exists():
        print("No video dataset found. Using default thresholds.")
        return

    with open(DATA_PATH) as f:
        data = json.load(f)

    avg_movement = sum(d["head_movement_score"] for d in data) / len(data)
    print(f"Calibrated head movement threshold: {avg_movement:.2f}")

if __name__ == "__main__":
    train_video_model()