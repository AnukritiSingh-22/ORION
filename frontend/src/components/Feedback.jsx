import React, { useEffect, useState } from "react";
import { apiRequest } from "../services/api";
import ProgressGraphs from "./ProgressGraphs";


export default function Feedback() {
const [report, setReport] = useState(null);


useEffect(() => {
apiRequest("/analysis/latest", "GET").then(setReport);
}, []);


if (!report) return <p>Loading feedback...</p>;


return (
<div>
<h2>Interview Feedback</h2>
<h3>Scores</h3>
<ul>
<li>Reasoning: {report.reasoning_score}</li>
<li>Speech: {report.speech_score}</li>
<li>Non-Verbal: {report.nonverbal_score}</li>
</ul>


<h3>Strengths</h3>
<p>{report.strengths}</p>


<h3>Improvements</h3>
<ul>
{report.suggestions.map((s, i) => (
<li key={i}>{s}</li>
))}
</ul>


<ProgressGraphs />
</div>
);
}