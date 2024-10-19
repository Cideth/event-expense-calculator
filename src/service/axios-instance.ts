import axios, {
  AxiosInstance,
  AxiosInterceptorManager,
  InternalAxiosRequestConfig,
} from "axios";

const serverApi: AxiosInstance = axios.create({
  baseURL: "",
});

const clientApi: AxiosInstance = axios.create({
  baseURL: "",
});
