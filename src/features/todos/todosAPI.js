import axios from "axios";
const API_URL = import.meta.env.VITE_APP_API_URL;

/**
 * Centralized Axios instance for better control
 */
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

/**
 * Fetch limited list of todos
 * @returns {Promise<Array>}
 */
export const getTodosAPI = async () => {
  try {
    const response = await apiClient.get("/todos", {
      params: { _limit: 10 },
    });
    return response.data;
  } catch (error) {
    console.error("❌ Failed to fetch todos:", error);
    throw error;
  }
};

/**
 * Add new todo
 * @param {Object} todo
 * @returns {Promise<Object>}
 */
export const addTodoAPI = async (todo) => {
  try {
    const response = await apiClient.post("/todos", todo);
    return response.data;
  } catch (error) {
    console.error("❌ Failed to add todo:", error);
    throw error;
  }
};

/**
 * Update existing todo
 * @param {Object} todo
 * @returns {Promise<Object>}
 */
export const updateTodoAPI = async (todo) => {
  try {
    const response = await apiClient.put(`/todos/${todo.id}`, todo);
    return response.data;
  } catch (error) {
    console.error("❌ Failed to update todo:", error);
    throw error;
  }
};

/**
 * Delete todo by ID
 * @param {number|string} id
 * @returns {Promise<number|string>}
 */
export const deleteTodoAPI = async (id) => {
  try {
    await apiClient.delete(`/todos/${id}`);
    return id;
  } catch (error) {
    console.error("❌ Failed to delete todo:", error);
    throw error;
  }
};
