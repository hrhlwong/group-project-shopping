// import React, { useState } from 'react';
// import LoginForm from '../Components/LoginSignup/LoginForm';
// import SignupForm from '../Components/LoginSignup/SignupForm';

// const LoginSignup = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
//         {isLogin ? <LoginForm /> : <SignupForm />}
//         <p className="loginsignup-switch">
//           {isLogin
//             ? "Don't have an account? "
//             : 'Already have an account? '}
//           <span onClick={() => setIsLogin(!isLogin)}>
//             {isLogin ? 'Sign Up' : 'Login'}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };
// export default LoginSignup;

// /src/Pages/LoginSignup.jsx
// import React, { useState } from "react";
// import LoginForm from "../Components/LoginSignup/LoginForm";

// const LoginSignup = () => {
//   const [isSignup, setIsSignup] = useState(false);

//   return (
//     <div>
//       <h2>{isSignup ? "Sign Up" : "Login"}</h2>
//       <LoginForm isSignup={isSignup} />
//       <button onClick={() => setIsSignup(!isSignup)}>
//         {isSignup ? "Already have an account? Login" : "New user? Sign Up"}
//       </button>
//     </div>
//   );
// };

// export default LoginSignup;

// /src/Pages/LoginSignup.jsx
// import React, { useState } from "react";
// import LoginForm from "../Components/LoginSignup/LoginForm";
// import '../Components/LoginSignup/Css/LoginSignup.css'; // Make sure this path matches your file location

// const LoginSignup = () => {
//   const [isSignup, setIsSignup] = useState(false);

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{isSignup ? "Sign Up" : "Login"}</h1>
//         <LoginForm isSignup={isSignup} />
//         <div className="loginsignup-login">
//           {isSignup ? "Already have an account?" : "New user?"}{" "}
//           <span onClick={() => setIsSignup(!isSignup)}>
//             {isSignup ? "Login" : "Sign Up"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;
import React, { useState } from "react";
import LoginForm from "../Components/LoginSignup/LoginForm";
import { findUser, saveUser } from "../utils/userService";
import { useNavigate } from "react-router-dom";
import '../Components/LoginSignup/Css/LoginSignup.css';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const user = findUser(email, password);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/dashboard"); // or your desired route
    } else {
      localStorage.removeItem("currentUser"); // 🧹 clear any stale user data
      alert("Invalid credentials");
    }
  };

  const handleSignup = (email, password) => {
    const newUser = { email, password };
    saveUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    navigate("/dashboard");
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
          {isSignup ? "Already have an account?" : "New user?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
