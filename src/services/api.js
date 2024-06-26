import axios from "axios";

const api = axios.create({
  baseURL: "http://18.118.28.200:5000/api",
  timeout: 1000,
});

export default api;
