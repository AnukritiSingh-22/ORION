import React, { useState } from "react";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login / Sign In" : "Sign Up"}</h2>

        <input placeholder="Username" />
        <input type="password" placeholder="Password" />

        {!isLogin && <input placeholder="Confirm Password" />}

        <button>{isLogin ? "Login" : "Create Account"}</button>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}