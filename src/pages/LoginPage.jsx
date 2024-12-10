import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setResponseMessage("Login successful! Redirecting...");
        onLogin(response.data); // Pass the response to App.js

        // Extract user role from the response
        const userRole = response.data.data.userRole;

        // Route based on the userRole
        if (userRole === "ADMIN") {
          navigate("/admin/dashboard");
        } 
        else if (userRole === "USER") {
          navigate("/user/home");
        } 
        else {
          setResponseMessage("Unknown user role. Please contact support.");
        }
      } else {
        setResponseMessage("Login failed. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred during login.");
      console.error("Login error:", error);
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Login;
