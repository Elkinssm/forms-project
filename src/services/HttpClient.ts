import axios from "axios";

const HttpClient = axios.create({
  baseURL: "https://localhost:7234/api",
  headers: {
    accept: "*/*",
  },
});

export default HttpClient;
