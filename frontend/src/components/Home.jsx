import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h3>ORAL REASONING & INTERVIEW OPTIMIZATION NETWORK</h3>
        <div className="header-actions">
          <button onClick={() => navigate("/auth")}>Login</button>
          <button onClick={() => navigate("/auth")}>Sign Up</button>
        </div>
      </header>

      <main className="home-main">
        {/* <div className="arc-text">
  {"WELCOME TO ORION".split("").map((char, i) => (
    <span
      key={i}
      style={{
        transform: `rotate(${i * 4 - 26}deg)`,
      }}
    >
      {char}
    </span>
  ))}
</div> */}
      <h1>Welcome to Orion.</h1>
      <br>
      </br>
      <br></br>

        <div className="hero-box">
  <img src="/ai-hero.png" alt="AI Interview Visualization" />
</div>


        <p>A place to improve your confidence with help of AI.</p>

        <button className="cta-btn" onClick={() => navigate("/auth")}>
          Get Started →
        </button>
      </main>
    </div>
  );
}
