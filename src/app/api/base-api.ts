import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { APIRequestOptions, APIResponse } from '../models/common-model';

/**
 * Create a axios instance
 */
const axiosInstance = axios.create({
  // setting base url
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  // setting timeout
  timeout: 3000,
  // setting headers
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    mode: 'no-cors',
  },
  withCredentials: false,
});

/**
 * Add a request interceptor
 */
axiosInstance.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    // TODO: This should be added to token
    // const token = "";
    // config.headers.Authorization = "Bearer " + token;
    return config;
  },
  async (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

/**
 * Add a response interceptor
 */
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reject(error);
  },
);

/**
 * createAPI
 * @param options APIRequestOptions
 * @returns Promise<APIResponse<any>>
 */
const createAPI = async <T = unknown, K = unknown>(
  options: APIRequestOptions,
): Promise<APIResponse<T, K>> => {
  // Request options
  // TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { url, data = {}, headers, method = 'POST', baseURL } = options;
  const header = headers as object;

  // TODO remove later
  const methodTest = 'GET';

  // Request configuration
  const config: AxiosRequestConfig = {
    baseURL,
    url,
    method: methodTest, // TODO
    data,
    headers: header,
  };

  return axiosInstance(config)
    .then((response) => {
      const { status: statusCode, data } = response;
      const {
        status,
        result,
        message = 'Unknown error!!!',
        ...rest
      } = data || {};
      const res: APIResponse<T, K> = {
        isSuccess: true,
        status,
        message,
        result: result || rest,
        statusCode,
        ...rest,
      };
      return res;
    })
    .catch((error: AxiosError) => {
      const remain = error.response?.data as K;
      const res: APIResponse<T, K> = {
        isSuccess: false,
        status: 1,
        message: error.message || 'Unknown error!!!',
        statusCode: error?.status,
        code: error?.code || 'Unknown code!!!',
        ...remain,
        error: 'Error',
        result: undefined,
      };
      return res;
    })
    .finally();
};

export default createAPI;
