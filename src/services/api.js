import axios from "axios";

const BASE_URL = "https://readjourney.b.goit.study/api";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signup`, userData);
    return response.data;
  } catch (error) {
    console.error(
      "Error during registration:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signin`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error.response?.data || error.message);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signout`);
    return response.data;
  } catch (error) {
    console.error(
      "Error during logout:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchRecommendedBooks = async (page, limit) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }

  try {
    const response = await axios.get(`${BASE_URL}/books/recommend`, {
      params: { page, limit },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching recommended books:",
      error.response?.data || error.message
    );
    throw error;
  }
};
