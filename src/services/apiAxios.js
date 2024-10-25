import axios from "axios";

// Set the base URL to the backend server
const api = axios.create({
  baseURL: "http://localhost:8000", // Your backend server URL
  withCredentials: true, // Include cookies if using JWT in cookies
});

// Add a request interceptor to attach the Bearer token to every request
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage (or other storage)
    const token = localStorage.getItem("token");

    if (token) {
      // Attach the token to the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle error
    return Promise.reject(error);
  }
);

export default api;
