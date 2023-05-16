import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import google from '../../assets/images/logos_google-icon.svg';
import { registerSchema } from '../../validations/login';
import { useLocation } from 'react-router-dom';

const RegisterForm = () => {
  const href = useLocation();
  const [account, setAccount] = useState(href?.pathname?.split('/')[3]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data, event) => {
    event.preventDefault();
  };
  return (
    <div className="bg-white relative xs:w-full w-2/5 mx-auto mt-[3%] rounded-lg p-7 py-4">
      {account ? (
        <>
          <h1 className="text-2xl font-bold mb-3">Register</h1>
          <h1 className="text-center font-bold mb-2">{account} Account</h1>
          <div>
            <form
              className="flex flex-col font-bold"
              onSubmit={(event) => {
                handleSubmit(onSubmit)(event);
              }}
            >
              <label htmlFor="firstname">Firstname</label>
              <input
                type="firstname"
                name="firstname"
                {...register('firstname')}
                placeholder="Enter your firstname address"
                className="border border-gray-400 py-2 mb-2 shadow shadow-gray-400 focus:outline-none px-3 rounded-md font-normal"
              />
              {errors.firstname && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.firstname.message}
                </p>
              )}
              <label htmlFor="lastname">Lastname</label>
              <input
                type="lastname"
                name="lastname"
                {...register('lastname')}
                placeholder="Enter your lastname address"
                className="border border-gray-400 py-2 mb-2 shadow shadow-gray-400 focus:outline-none px-3 rounded-md font-normal"
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.lastname.message}
                </p>
              )}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                {...register('email')}
                placeholder="Enter your email address"
                className="border border-gray-400 py-2 mb-2 shadow shadow-gray-400 focus:outline-none px-3 rounded-md font-normal"
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.email.message}
                </p>
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
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.password.message}
                </p>
              )}
              <label htmlFor="firstname">Phone number</label>
              <input
                type="text"
                name="firstname"
                {...register('phone')}
                placeholder="Enter your phone number"
                className="border border-gray-400 py-2 mb-2 shadow shadow-gray-400 focus:outline-none px-3 rounded-md font-normal"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.phone.message}
                </p>
              )}
              {account === 'Seller' ? (
                <>
                  <label htmlFor="firstname">Shop name</label>
                  <h1 className='text-right text-green-600 absolute bottom-44 right-12'>Available</h1>
                  <input
                    type="text"
                    name="firstname"
                    {...register('shop')}
                    placeholder="Enter your shop name"
                    className="border border-gray-400 py-2 mb-2 shadow shadow-gray-400 focus:outline-none px-3 rounded-md font-normal"
                  />
                  {errors.shop && (
                    <p className="text-red-500 text-sm font-semibold mb-2">
                      {errors.shop.message}
                    </p>
                  )}
                </>
              ) : (
                ''
              )}
              <button
                type="submit"
                className="border border-gray-400 my-2 shadow shadow-gray-400 bg-[#08F46C] hover:bg-[#11b85a] py-2 mb-2 px-3 rounded-md"
              >
                Register
              </button>
            </form>
            <div>
              <div className="flex justify-between items-center">
                <div className="bg-black h-[1px] w-full"></div>
                <h1 className="mx-4 font-semibold text-slate-500 text-xl">
                  OR
                </h1>
                <div className="bg-black h-[1px] w-full"></div>
              </div>
              <button className="flex font-bold items-center my-2 py-1 w-full rounded-md hover:shadow-xl shadow shadow-gray-400 justify-center border border-gray-400">
                <img src={google} alt="" className="w-8 mx-4" />
                Register with Google
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col font-bold">
          <button
            className="rounded-md border-slate-500 border py-2 my-6"
            onClick={() => setAccount('Customer')}
          >
            Register as a User
          </button>
          <button
            className="rounded-md border-slate-500 border py-2 my-6"
            onClick={() => setAccount('Seller')}
          >
            Register as a seller
          </button>
          <button
            className="rounded-md border-slate-500 border py-2 my-6"
            onClick={() => setAccount('Affilliate')}
          >
            Register as an affilliate
          </button>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
