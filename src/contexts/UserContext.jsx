import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode"; // Correct import
import api from "../services/apiAxios";

// Create a context for the user
const UserContext = createContext(null);

// Create a provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Start with loading
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Function to get the user details from local storage
    const fetchUser = async (userId) => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const { data } = await api.get(`/api/v1/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(data?.data?.user); // Set the user in state
          setIsAuthenticated(true); // User is authenticated if data is fetched successfully
        }
      } catch (error) {
        console.error("Failed to fetch user", error);
        setIsAuthenticated(false); // Failed fetch means unauthenticated
      } finally {
        setIsLoading(false); // Finished loading
      }
    };

    // Function to decode the JWT token and get the user ID
    const loadUserFromToken = () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const decoded = jwtDecode(token); // Decode the token to get the user ID
          const userId = decoded.id; // Extract the user ID from the token
          fetchUser(userId); // Fetch user details using the user ID
        } catch (error) {
          console.error("Failed to decode token", error);
          setIsAuthenticated(false); // Failed decode means unauthenticated
          setIsLoading(false);
        }
      } else {
        // No token means unauthenticated
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    };

    loadUserFromToken();
  }, []); // Empty dependency array to avoid unnecessary reruns

  const logoutUser = () => {
    localStorage.removeItem("token"); // Clear token from local storage
    setUser(null); // Clear user state
    setIsAuthenticated(false); // Update isAuthenticated
  };

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, isLoading, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use the User context
export function useUser() {
  return useContext(UserContext);
}
