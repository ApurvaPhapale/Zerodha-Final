import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import servers from "../environment"; // ✅ For Login.js (1 level up)


import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${servers.prod}/login`, {
        email,
        password,
      });

      if (res.data.success) {
        // Optional: store token if backend returns it
        // localStorage.setItem("token", res.data.token);
        alert("Login successful");
        navigate("/dashboard");
      } else {
        alert(res.data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error logging in. Check console.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
