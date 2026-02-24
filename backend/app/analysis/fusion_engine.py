def fuse_results(audio, video, nlp):
    return {
        "overall_score": (
            audio["speech_rate"] * 0.2 +
            video["eye_contact_score"] * 50 +
            nlp["coherence_score"] * 50
        )
    }