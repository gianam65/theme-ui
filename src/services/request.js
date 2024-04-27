import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://192.168.83.161:8000",
  httpsAgent: {
    rejectUnauthorized: false,
  },
});

const httpGet = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};

const httpPost = async (url, data = {}) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
};

const httpPut = async (url, data = {}) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    console.error("PUT Error:", error);
    throw error;
  }
};

const httpDelete = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    console.error("DELETE Error:", error);
    throw error;
  }
};

export { httpGet, httpPost, httpPut, httpDelete };
