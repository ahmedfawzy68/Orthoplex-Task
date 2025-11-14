const API_BASE_URL = "https://reqres.in/api";

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Login failed");
    }

    return data;
  } catch (error) {
    throw new Error(error.message || "Network error. Please try again.");
  }
};

export const fetchUsers = async (page = 1) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/users?page=${page}&per_page=6`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch users");
    }

    return data;
  } catch (error) {
    throw new Error(error.message || "Network error. Please try again.");
  }
};
