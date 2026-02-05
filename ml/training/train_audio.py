"""
Fine-tunes / calibrates audio-related metrics on interview data
"""

import json
from pathlib import Path

DATA_PATH = Path("ml/datasets/processed/audio_features.json")

def train_audio_model():
    if not DATA_PATH.exists():
        print("No audio dataset found. Using rule-based calibration.")
        return

    with open(DATA_PATH) as f:
        data = json.load(f)

    avg_filler = sum(d["filler_percentage"] for d in data) / len(data)
    print(f"Calibrated average filler percentage: {avg_filler:.2f}")

if __name__ == "__main__":
    train_audio_model()