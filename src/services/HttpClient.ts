import axios from "axios";

const HttpClient = axios.create({
  baseURL: "/api",
  // baseURL: "https://api-onboarding.fortress-pay.com",
  headers: {
    accept: "*/*",
  },
});

export default HttpClient;
