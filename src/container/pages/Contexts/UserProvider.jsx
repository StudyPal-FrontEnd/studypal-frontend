import React, { useState } from "react";

import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = (userData) => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const verifyOtp = (otp) => {
    setIsAuthenticated(true);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        register,
        login,
        logout,
        verifyOtp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
