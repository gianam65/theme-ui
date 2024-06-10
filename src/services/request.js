import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
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
    return error;
  }
};

const httpPost = async (url, data = {}) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST Error:", error);
    return error;
  }
};

const httpPut = async (url, data = {}) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    console.error("PUT Error:", error);
    return error;
  }
};

const httpDelete = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    console.error("DELETE Error:", error);
    return error;
  }
};

export { httpGet, httpPost, httpPut, httpDelete };
