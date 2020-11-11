import {axiosInstance} from "./api-instance";

export const post = (url = '', data = '', config = {}) => {
  return axiosInstance.post(url, data, config)
}

export const get = (url, config = '') => {
  return axiosInstance.get(url,config)
}

 export const put = (url = '', data = '', config = {}) => {
  return axiosInstance.put(url, data, config)
}

export const patch = (url = '', data = '', config = {}) => {
  return axiosInstance.patch(url, data, config)
}

export const del = (url = '', data = '', config = {}) => {
  return axiosInstance.delete(url, { headers: config.headers, data })
}




