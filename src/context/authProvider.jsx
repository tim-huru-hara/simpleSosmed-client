// src/context/AuthProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import request from "../utils/axios";
import { io } from 'socket.io-client'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const socketInstance = io('http://localhost:3000');
      setSocket(socketInstance)
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

      return () => socketInstance.disconnect();
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

  // Emit an event to the server
  const emitEvent = (event, data) => {
    if (socket) socket.emit(event, data);
  };

  // Listen for events from the server
  const onEvent = (event, callback) => {
    if (socket) socket.on(event, callback);
  };

  // Clean up event listeners
  const offEvent = (event) => {
    if (socket) socket.off(event);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userInfo, login, logout, socket, emitEvent, onEvent, offEvent }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
