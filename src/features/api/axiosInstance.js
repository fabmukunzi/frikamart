import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_PRODUCTS_API}`,
  timeout: 50000,
  headers: {},
});
const requestHandler = (request) => {
//   const token = localStorage.getItem('token') || '';
//   request.headers.Authorization = `Bearer ${token}`;
  return request;
};

const responseHandler = (response) => response;

const errorHandler = (error) => {
//   if (error.response.status === 401) {
//     localStorage.clear();
//     return (window.location.href = '/auth');
//   }
  return Promise.reject(error);
};
axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error),
);

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error),
);

export default axiosInstance;