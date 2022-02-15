import { instance } from 'common/api/instance';
import { localStorageGet } from 'common/utils/misc';

export const interceptor = () => {
  instance.interceptors.request.use(
    (config: Record<string, any>) => {
      const accessToken = localStorageGet('accessToken');

      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }

      return config;
    },
    error => Promise.reject(error),
  );
};
