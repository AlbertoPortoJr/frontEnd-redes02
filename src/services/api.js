import axios from "axios";

const api = axios.create({
  baseURL: "http://18.117.100.32:5000/api",
  timeout: 1000,
});

export default api;
