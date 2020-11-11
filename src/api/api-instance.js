// Third Party
import axios from 'axios';

// Utility
import {
  ResponseCode,
  APIUrl
} from "App/utility/Constant";
import { store } from 'App/redux/store';

// Create instance and set the base url
let axiosInstance = axios.create({
  baseURL: APIUrl.local,
  timeout: 30000
});

store.subscribe(listener);

// Add Default auth token in api header
function listener() {
  if (store.getState() !== undefined && store.getState() !== null && store.getState().authToken) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${store.getState().authToken}`
  }
}

// return request config or request error
axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  error => Promise.reject(error)
);

// user axios interceptors for change response and error as we want
axiosInstance.interceptors.response.use((response) => {
  let dataResponse = {
    status: response.status ? response.status : ResponseCode.OK,
    message: response.data && response.data.message ? response.data.message : undefined,
    data: response.data && response.data.data ? response.data.data : null,
  };
  console.log('Request Response Object ::: ', response);
  console.log("response :: ", dataResponse);
  return Promise.resolve(dataResponse);
}, (error) => {

  let errorResponse = {
    status: error.status ? error.status : ResponseCode.INTERNAL_SERVER_ERROR,
    message: error.response && error.response.data && error.response.data.message ? error.response.data.message : (error.message ? error.message : undefined),
    data: error.response && error.response.data && error.response.data.data ? error.response.data.data : undefined,
  };

  if (error.code !== undefined && error.code !== null && error.code === 'ECONNABORTED') {
    errorResponse['status'] = ResponseCode.REQUEST_TIMEOUT;
    errorResponse['message'] = "Your request has been timed out please try again."
  }

  console.log('Request Error Object :::', error);
  console.log("error :: ", errorResponse);
  return Promise.reject(errorResponse);
});


export {
  axiosInstance
};
