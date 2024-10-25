import api from "./apiAxios";

export async function login({ email, password }) {
  try {
    // Use the 'api' instance here, not 'axios'
    const { data } = await api.post("/api/v1/users/login", {
      email,
      password,
    });

    // Store the JWT in localStorage (or other secure storage)
    localStorage.setItem("token", data.token);

    return data; // Return the response data on successful login
  } catch (error) {
    // Handle and throw an error if the request fails
    const errorMessage = error.response?.data?.message || "Login failed";
    throw new Error(errorMessage);
  }
}

export async function signup({
  firstName,
  lastName,
  email,
  password,
  passwordConfirm,
}) {
  try {
    // Use the 'api' instance here, not 'axios'
    const { data } = await api.post("/api/v1/users/signup", {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    });

    // Store the JWT in localStorage (or other secure storage)
    localStorage.setItem("token", data.token);

    return data; // Return the response data on successful login
  } catch (error) {
    // Handle and throw an error if the request fails
    const errorMessage = error.response?.data?.message || "Error signing up";
    throw new Error(errorMessage);
  }
}

export async function logout() {
  try {
    // Send a logout request to the server
    const { data } = await api.get("api/v1/users/logout");

    // Remove the JWT token from local storage
    localStorage.removeItem("token");

    // Optionally, you could also clear cookies if your app uses them for JWT storage
    return data; // Return the response data on successful logout
  } catch (error) {
    // Handle and throw an error if the request fails
    const errorMessage = error.response?.data?.message || "Error logging out";
    throw new Error(errorMessage);
  }
}
