// /src/Components/LoginSignup/LoginForm.jsx
import React, { useState } from "react";


const LoginForm = ({ isSignup, onLogin, onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      alert("Email and password cannot be empty");
      return;
    }
    if (isSignup) {
      onSignup(email, password);
    } else {
      onLogin(email, password);
    }
  };

  return (
    <div className="login-form loginsignup-fields">
      <input
        type="email"
        placeholder="User Name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />


      <button
        onClick={handleSubmit}
        disabled={!email.trim() || !password.trim()}
      >
      {isSignup ? "Sign Up" : "Login"}
      </button>

    </div>
  );
};



export default LoginForm;