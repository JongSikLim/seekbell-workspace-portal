/**
 * API 모듈
 */
import axios from 'axios';
import { AxiosHelper, APIRequestHeaderContentTypes } from './type';
import { paramSerialize as paramsSerializer } from './utils';

const commonAxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  // baseURL: process.env.BACKEND_URL,
  withCredentials: true,
  headers: {
    'Content-Type': APIRequestHeaderContentTypes.form,
  },
});

/**
 *
 */
commonAxiosInstance.interceptors.request.use((config) => {
  const { url } = config;

  config.headers = {
    ...config.headers,
  };

  return config;
});

commonAxiosInstance.interceptors.response.use((response) => {
  return new Promise((resolve, reject) => {
    const { status, data } = response;

    if (status === 200) {
      resolve(data);
    } else {
      reject(data);
    }
  });
});

/**
 * Common API Helper
 * ----------------------
 * get, post, put, patch, delete 메소드 제공 객체
 */
const commonAxios: AxiosHelper = {
  get: (url, params = {}, option = {}) => {
    return commonAxiosInstance.get(url, {
      ...option,
      params,
      paramsSerializer,
    });
  },
  post: (url, body = {}, option = {}) => {
    return commonAxiosInstance.post(url, body, option);
  },
  put: (url, body = {}, option = {}) => {
    return commonAxiosInstance.put(url, body, option);
  },
  patch: (url, body = {}, option = {}) => {
    return commonAxiosInstance.patch(url, body, option);
  },
  delete: (url, params = {}, option = {}) => {
    return commonAxiosInstance.delete(url, {
      ...option,
      params,
      paramsSerializer,
    });
  },
};

export default commonAxios;
