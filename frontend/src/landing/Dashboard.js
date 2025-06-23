import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: remove token/localStorage data here
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard!</h1>
      <p>You are logged in successfully.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
