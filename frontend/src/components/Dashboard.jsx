import React, { useEffect, useState } from "react";
import { apiRequest } from "../services/api";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
const [profile, setProfile] = useState(null);
const navigate = useNavigate();


useEffect(() => {
const token = localStorage.getItem("token");
apiRequest("/users/me", "GET", null, token).then(setProfile);
}, []);


return (
<div>
<h2>Welcome to ORION</h2>
{profile && <p>Domain: {profile.domain}</p>}
<button onClick={() => navigate("/interview")}>Start Interview</button>
</div>
);
}