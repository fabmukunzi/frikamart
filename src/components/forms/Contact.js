import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import shoes from '../../assets/images/nike_shoes_website_landing_page-removebg-preview 1.svg';
import { contactSchema } from '../../validations/contact';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  return (
    <div className="mx-48 xs:mx-4 my-4 gap-20 sm:grid grid-cols-3">
      <div className="col-span-2">
        <p className="font-bold my-4">Leave a message</p>
        <form
          onSubmit={(event) => {
            handleSubmit()(event);
          }}
          className="inline-block"
        >
          <label htmlFor="names">Your Fullname</label>
          <input
            type="text"
            name="names"
            {...register('names')}
            className="w-full border outline-none border-gray-400 py-2 mb-2 shadow shadow-gray-400 focus:outline-none px-3 rounded-md font-normal"
          />
          {errors.names && (
            <p className="text-red-500 mb-4">{errors.names.message}</p>
          )}
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            {...register('email')}
            className="w-full border outline-none border-gray-400 py-2 mb-2 shadow shadow-gray-400 focus:outline-none px-3 rounded-md font-normal"
          />
          {errors.email && (
            <p className="text-red-500 mb-4">{errors.email.message}</p>
          )}
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            {...register('message')}
            className="w-full h-32 border outline-none border-gray-400 mb-2 shadow shadow-gray-400 focus:outline-none px-3 rounded-md font-normal"
          />
          {errors.message && (
            <p className="text-red-500 mb-4">{errors.message.message}</p>
          )}
          <button
            type="submit"
            className="w-32 border border-gray-400 my-2 shadow shadow-gray-400 bg-[#08F46C] py-2 mb-4 px-3 rounded-md"
          >
            Submit
          </button>
        </form>
        <div className="bg-slate-400 py-32 px-20 rounded-md"></div>
      </div>
      <div>
        <p className="font-bold">RECENT POST</p>
        <div className="border-2 rounded-md p-3">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div className="border-b-2 my-2">
                <img src={shoes} alt="" className="h-40 w-40 border-2" />
                <p>
                  Frikamart has expanded its areas and has reached in somalia
                  empaowering small business in somalia
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
