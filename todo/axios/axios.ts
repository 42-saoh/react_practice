import axios, { AxiosRequestConfig } from 'axios' // 추가
import { CustomAxiosInterface } from './axiosInterface'
import { CommonResponse } from './customResponse'

const client: CustomAxiosInterface = axios.create({
    baseURL: 'http://localhost:8080',
})

interface TodoPostDTO {
  title: string | undefined;
  content: string | undefined;
}

export const Get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await client.get<CommonResponse<T>>(url, config)
  return response.data;
}

export const Post = async <T>(
  url: string,
  data?: TodoPostDTO,
  config?: AxiosRequestConfig
): Promise<number> => {
  console.log(data);
  const response = await client.post<CommonResponse<T>>(url, data, config)
  return response.status;
}

//Put 방식
export const Put = async <T>(
  url: string,
  data?: TodoPostDTO,
  config?: AxiosRequestConfig
): Promise<number> => {
  const response = await client.put<CommonResponse<T>>(url, data, config)
  return response.status
}

//Delete 방식
export const Delete = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await client.delete<CommonResponse<T>>(url, config)
  return response.data
}
