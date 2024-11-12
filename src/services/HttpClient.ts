import axios from "axios";

const HttpClient = axios.create({
   baseURL: "/api",
  // baseURL: "https://api-onboarding.fortress-pay.com/api",
  headers: {
    accept: "*/*",
  },
});

export default HttpClient;
