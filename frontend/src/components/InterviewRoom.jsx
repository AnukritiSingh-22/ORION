import React, { useEffect, useRef, useState } from "react";
import { apiRequest } from "../services/api";
import { useNavigate } from "react-router-dom";


export default function InterviewRoom() {
const videoRef = useRef();
const mediaRecorderRef = useRef(null);
const chunksRef = useRef([]);
const [question, setQuestion] = useState(null);
const [timeLeft, setTimeLeft] = useState(60);
const navigate = useNavigate();


useEffect(() => {
apiRequest("/interview/start", "POST").then((res) => setQuestion(res.question));


navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
videoRef.current.srcObject = stream;
mediaRecorderRef.current = new MediaRecorder(stream);
mediaRecorderRef.current.ondataavailable = (e) => chunksRef.current.push(e.data);
mediaRecorderRef.current.start();
});
const timer = setInterval(() => {
setTimeLeft((t) => {
if (t <= 1) {
clearInterval(timer);
stopRecording();
}
return t - 1;
});
}, 1000);


return () => clearInterval(timer);
}, []);


const stopRecording = async () => {
mediaRecorderRef.current.stop();
const blob = new Blob(chunksRef.current, { type: "video/webm" });


const formData = new FormData();
formData.append("video", blob);


await fetch("http://localhost:8000/interview/submit", {
method: "POST",
body: formData,
});


navigate("/feedback");
};
return (
<div>
<h3>Question:</h3>
<p>{question}</p>
<video ref={videoRef} autoPlay muted width="400" />
<h4>Time Left: {timeLeft}s</h4>
</div>
);
}