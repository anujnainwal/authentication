import { useEffect } from "react";
import { privateAxios } from "../api/privateAxios";

const useAxiosPrivate = () => {
  let token = JSON.parse(localStorage.getItem("accessToken"));

  useEffect(() => {
    const requestIntercept = privateAxios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = privateAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          //   const newAccessToken = await refresh();
          let response = await privateAxios.get("refreshToken");
          let { accessToken } = response?.data;
          localStorage.setItem("accessToken", JSON.stringify(accessToken));
          prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return privateAxios(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      privateAxios.interceptors.request.eject(requestIntercept);
      privateAxios.interceptors.response.eject(responseIntercept);
    };
  }, [token]);

  return privateAxios;
};

export default useAxiosPrivate;
