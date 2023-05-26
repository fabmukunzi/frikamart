/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShopCard = ({data}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white mx-auto rounded-lg font-bold my-2">
      <img src={data?.image} alt="image1" className="w-full" />
      <div className="px-4 py-3">
        <div className="flex justify-between my-4">
          <h1>{data?.store_name}</h1>
          <h1>{data?.rank}</h1>
        </div>
        <p className="my-2">
          {data?.description}
        </p>
        <div className="flex justify-between py-2">
          <p>Domain:</p>
          <a href="#" className="text-blue-900">
            {data?.store_url}
          </a>
        </div>
        <button
          onClick={() => navigate(`/store/${12345}`)}
          className="bg-[#08F46C] hover:shadow-xl shadow-black rounded-md py-2 mt-3 border border-black w-full"
        >
          VISIT STORE
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
