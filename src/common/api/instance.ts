import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
});

export const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
