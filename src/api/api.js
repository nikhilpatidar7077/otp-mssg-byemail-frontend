import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:3200/api/auth", // backend base url
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;