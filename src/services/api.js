import axios from "axios";

const api = axios.create({
  baseURL: "http://3.147.67.63:5000/api",
  timeout: 1000,
});

export default api;
