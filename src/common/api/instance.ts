import axios from "axios";
import { localStorageGet } from 'common/utils/misc';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
});

export const interceptor = () => {
  instance.interceptors.request.use((config: Record<string, any>) => {
		const accessToken = localStorageGet('accessToken');

		if (accessToken) {
			config.headers['Authorization'] = `Bearer ${accessToken}`;
		}

		return config;
  },
	(error) => Promise.reject(error));
};

export const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
