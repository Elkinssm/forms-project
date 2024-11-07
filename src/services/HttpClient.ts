import axios from "axios";

const HttpClient = axios.create({
  baseURL: "https://api-onboarding.fortress-pay.com/api",
  headers: {
    accept: "*/*",
  },
});

export default HttpClient;
