import axios, { AxiosRequestConfig } from 'axios';
import { GeneralObject } from '@/types';

const client = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
  },
});

type Config<P = GeneralObject> = Omit<AxiosRequestConfig, 'params'> & {
  params?: P;
};
export const get = <T, P = GeneralObject>(url: string, config?: Config<P>) => {
  return client.get<T>(url, config).then((response) => response.data);
};

export const post = (url: string, body?: GeneralObject) => {
  return client.post(url, body).then((response) => response.data);
};
