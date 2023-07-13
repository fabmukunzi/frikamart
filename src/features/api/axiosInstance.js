import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PRODUCTS_API,
  timeout: 5000,
});

const requestHandler = async (request) => {
  let session = localStorage.getItem('session');
  let token = localStorage.getItem('token');
  if (!session) {
    const { data } = await axios.post(
      `${process.env.REACT_APP_PRODUCTS_API}user/guest/create-session`
    );
    session = data.session;
    localStorage.setItem('session', session);
  }
  request.headers.session = session;
  request.headers.token = token;
  return request;
};

const responseHandler = (response) => response;

const errorHandler = async (error) => {
  if (error?.response?.status === 401) {
    const { data } = await axios.post(
      `${process.env.REACT_APP_PRODUCTS_API}user/guest/create-session`
    );
    localStorage.setItem('session', data.session);
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
