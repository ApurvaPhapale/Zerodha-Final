import React, { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

// Create hook for easier usage
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap around App
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null when not logged in

  const login = (userData) => {
    setUser(userData); // Set user details
  };

  const logout = () => {
    setUser(null); // Clear user on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
