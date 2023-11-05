import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:5173/api/v1',
});

const get = <T>(URL: string): Promise<AxiosResponse<T>> => axiosClient.get(URL);

const post = <T>(URL: string, payload: T): Promise<AxiosResponse<T>> =>
  axiosClient.post(URL, { data: payload });

const patch = <T>(URL: string, payload: T): Promise<AxiosResponse<T>> =>
  axiosClient.patch(URL, { data: payload });

const remove = <T>(URL: string, payload: T): Promise<AxiosResponse<T>> =>
  axiosClient.delete(URL, { data: payload });

export { get, post, patch, remove };
