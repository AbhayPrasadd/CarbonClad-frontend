import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); // Default role selection
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        { email, password, role },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        setResponseMessage("Login successful! Redirecting...");
        onLogin(response.data);

        const userRole = response.data.data.userRole;
        if (userRole === "ADMIN") navigate("/admin/dashboard");
        else if (userRole === "USER") navigate("/user/home");
        else if (userRole === "MANAGER") navigate("/manager/dashboard");
        else setResponseMessage("Unknown user role. Please contact support.");
      } else {
        setResponseMessage("Login failed. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred during login.");
      console.error("Login error:", error);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
       

        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Buttons in the same row */}
        <div className="button-group">
          <button type="submit">Login</button>
          <button type="button" onClick={handleRegister} className="register-btn">
            Register
          </button>
        </div>

        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
