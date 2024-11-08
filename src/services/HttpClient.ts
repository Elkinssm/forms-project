import axios from "axios";

const HttpClient = axios.create({
  baseURL: "/api",
  headers: {
    accept: "*/*",
  },
});

export default HttpClient;
