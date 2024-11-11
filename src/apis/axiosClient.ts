import axios, { AxiosInstance } from "axios";
import queryString from "querystring";

const defaultToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJocm0tZWNvLWVwbHVzIiwiaWF0IjoxNzA0MDQyMDAwLCJleHAiOjE3NjcyMDAzOTl9.ujYO6ENLEV8vmcsEA99kv_rwDuWgxXCZ6HkV-g5_PH8";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${defaultToken}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    console.log("--=DATA RESPONSE=--", response.data);
    return response.data;
  },
  (error) => {
    console.log("--=DATA ERROR=-", error.toJSON());
    return Promise.reject(error);
  }
);
