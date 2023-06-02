import axios from "axios";
export const BASEURL = "http://localhost:7000/api/v1";
// export const BASE_URL = "http://localhost:5000/";

let token = JSON.parse(localStorage.getItem("accessToken"));

export const privateAxios = axios.create({
  baseURL: BASEURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

//request
privateAxios.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

//response
privateAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    let originalRequest = err.config;
    if (err?.status === 403 || (err?.status === 401 && !originalRequest.sent)) {
      originalRequest.sent = true;
      let response = privateAxios.get("/refreshToken");
      let { accessToken } = response.data;
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return privateAxios(originalRequest);
    }
    return Promise.reject(err);
  }
);
