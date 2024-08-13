// src/context/AuthProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import request from "../utils/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      const fetchUserInfo = async () => {
        try {
          const { data: response } = await request.get('/userInfo', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          setUserInfo(response)
        } catch (error) {
          console.log(error)
        }
      }
      fetchUserInfo()
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
