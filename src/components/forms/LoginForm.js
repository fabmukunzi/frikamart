import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import google from '../../assets/images/logos_google-icon.svg';
import { loginSchema } from '../../validations/login';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/Login';
import { showErrorMessage, showSuccessMessage } from '../../utils/toast';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (userData) => {
    try {
      const response = await dispatch(login(userData)).unwrap();
      navigate('/')
    } catch (error) {
      showErrorMessage(error?.data?.error_msg || 'error');
    }
  };
  return (
    <div className="bg-white xs:w-full w-2/5 mx-auto mt-[10%] rounded-lg p-10">
      <h1 className="text-2xl font-bold mb-6">Log in</h1>
      <div>
        <form
          className="flex flex-col font-bold"
          onSubmit={(event) => {
            handleSubmit(onSubmit)(event);
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            {...register('username')}
            placeholder="Enter your email address"
            className="border border-gray-400 py-2 mb-2 shadow shadow-gray-400 focus:outline-none px-3 rounded-md font-normal"
          />
          {errors.username && (
            <p className="text-red-500 mb-4">{errors.username.message}</p>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            {...register('password')}
            className="border border-gray-400 py-2 mb-2 shadow shadow-gray-400 focus:outline-none px-3 rounded-md font-normal"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 mb-4">{errors.password.message}</p>
          )}
          <button
            type="submit"
            className="border border-gray-400 my-2 shadow shadow-gray-400 bg-[#08F46C] py-2 mb-4 px-3 rounded-md"
          >
            Login
          </button>
        </form>
        <div>
          <div className="flex justify-between items-center">
            <div className="bg-black h-[1px] w-full"></div>
            <h1 className="mx-4 font-semibold text-slate-500 text-xl">OR</h1>
            <div className="bg-black h-[1px] w-full"></div>
          </div>
          <button className="flex items-center my-2 py-1 w-full rounded-md shadow shadow-gray-400 justify-center border border-gray-400">
            <img src={google} alt="" className="w-8 mx-4" />
            Continue with Google
          </button>
          <div className="flex font-bold items-center">
            <h1 className="font-bold">New to Frikamart ?</h1>
            <a href="/auth/register" className="text-blue-900 mx-4">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
