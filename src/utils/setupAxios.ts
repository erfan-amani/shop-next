import axios from "axios";

const nextAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEXT_SERVER_BASE_URL,
  withCredentials: true,
});
const appAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL,
  withCredentials: true,
});

const setupAxios = (axios = appAxios) => {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (error?.response?.status === 401) {
        // await appAxios.get("user/logout");
      }

      return Promise.reject(error);
    }
  );
};

export { nextAxios, appAxios, setupAxios };
