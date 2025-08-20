// import React, { useContext, useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { AuthContext } from "../../Context/AuthContext";
// import { useNavigate } from "react-router-dom"; // to redirect
// import "./Css/LoginSignup.css";

// const LoginForm = () => {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate(); // to redirect to homepage
//   const [error, setError] = useState("");

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email("Invalid email address").required("Required"),
//       password: Yup.string().min(6, "Must be 6 characters or more").required("Required"),
//     }),
//     onSubmit: (values) => {
//       const storedUser = JSON.parse(localStorage.getItem("user"));
//       if (storedUser && storedUser.email === values.email && storedUser.password === values.password) {
//         login(storedUser); // Set user in context
//         alert("Login successful!");
//         navigate("/"); // Redirect to homepage after successful login
//       } else {
//         setError("Invalid email or password!");
//       }
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div className="loginsignup-fields">
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//         />
//         {formik.touched.email && formik.errors.email && (
//           <div className="error">{formik.errors.email}</div>
//         )}

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//         />
//         {formik.touched.password && formik.errors.password && (
//           <div className="error">{formik.errors.password}</div>
//         )}
//       </div>
//       {error && <div className="error">{error}</div>}
//       <button type="submit">Login</button>
//     </form>
//   );
// };
// export default LoginForm;


// /src/Components/LoginSignup/LoginForm.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { saveUser, findUser } from "../../utils/userService";

// const LoginForm = ({ isSignup }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isSignup) {
//       saveUser({ email, password });
//       alert("Account created! You can now log in.");
//     } else {
//       const user = findUser(email, password);
//       if (user) {
//         localStorage.setItem("currentUser", JSON.stringify(user));
//         navigate("/checkout");
//       } else {
//         alert("Invalid credentials");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
//     </form>
//   );
// };

// export default LoginForm;

// /src/Components/LoginSignup/LoginForm.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { saveUser, findUser } from "../../utils/userService";

// const LoginForm = ({ isSignup }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isSignup) {
//       saveUser({ email, password });
//       alert("Account created! You can now log in.");
//     } else {
//       const user = findUser(email, password);
//       if (user) {
//         localStorage.setItem("currentUser", JSON.stringify(user));
//         navigate("/checkout");
//       } else {
//         alert("Invalid credentials");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="loginsignup-fields">
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
//     </form>
//   );
// };
// export default LoginForm;


// /src/Components/LoginSignup/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser, findUser } from "../../utils/userService";

const LoginForm = ({ isSignup, onLogin, onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
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
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {isSignup ? "Sign Up" : "Login"}
      </button>
    </div>
  );
};



export default LoginForm;