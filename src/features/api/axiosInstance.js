import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PRODUCTS_API,
  timeout: 5000, 
});

const requestHandler = (request) => {
  const session = localStorage.getItem('session');
  if (session) {
    request.headers.session = session;
  }
  return request;
}

const responseHandler = (response) => response;

const errorHandler = (error) => {
  if (error?.response?.status === 401) {
    localStorage.clear();
    // Uncomment the line below if you want to redirect to the login page
    // window.location.href = '/auth/login';
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
