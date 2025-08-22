// export default LoginSignup;
import React, { useState, useEffect } from "react";
import LoginForm from "../Components/LoginSignup/LoginForm";
import { findUser, saveUser } from "../utils/userService";
import { useNavigate } from "react-router-dom";
import '../Components/LoginSignup/Css/LoginSignup.css';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.removeItem("currentUser"); // 🧹 Clear user on page load
  }, []);

  const handleLogin = (email, password) => {
    const user = findUser(email, password);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/shop"); // or your desired route
    } else {
      localStorage.removeItem("currentUser"); // 🧹 clear any stale user data
      alert("Invalid credentials");
    }
  };

  const handleSignup = (email, password) => {
    const newUser = { email, password };
    saveUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    navigate("/shop");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isSignup ? "Sign Up" : "Login"}</h1>
        <LoginForm
          isSignup={isSignup}
          onLogin={handleLogin}
          onSignup={handleSignup}
        />
        <div className="loginsignup-login">
          {isSignup ? "Already have an account ⮕" : "New user ⮕"}{" "}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
