import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";         // ✅ Make sure Login.js exists in /pages
import Signup from "./pages/Signup";       // ✅ Create this file if not done yet
import Dashboard from "./pages/Dashboard"; // ✅ We'll create this next

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
