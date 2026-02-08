import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { apiRequest } from "../services/api";


export default function ProgressGraphs() {
const [history, setHistory] = useState([]);


useEffect(() => {
apiRequest("/analysis/history", "GET").then(setHistory);
}, []);


const data = {
labels: history.map((_, i) => `Attempt ${i + 1}`),
datasets: [
{
label: "Overall Score",
data: history.map((h) => h.overall_score),
},
],
};


return (
<div>
<h3>Progress Over Time</h3>
<Line data={data} />
</div>
);
}