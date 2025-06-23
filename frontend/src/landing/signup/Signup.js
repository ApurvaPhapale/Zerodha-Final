import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import servers from "../../environment"; // ✅ For Signup.js (2 levels up)


import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { name, email, password } = formData;

      if (!email || !password) {
        alert("Please fill all fields");
        return;
      }

      // ✅ Send signup data to live backend
      const res = await axios.post(`${servers.prod}/signup`, {
        email,
        password,
        // You can also send name if your backend accepts it
      });

      if (res.data.success) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert(res.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Check console.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Signup;
