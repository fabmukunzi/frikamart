/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import image from '../../assets/images/Rectangle 14501.png';
import { useNavigate } from 'react-router-dom';

const ShopCard = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white mx-auto rounded-lg font-bold my-2">
      <img src={image} alt="image1" className="w-full" />
      <div className="px-4 py-3">
        <div className="flex justify-between my-4">
          <h1>SAM STORE</h1>
          <h1>GOLDEN SUPPLIER</h1>
        </div>
        <p className="my-2">
          My store give abundant fashion clothes of all kind get your confidence
          increased with sam store we take care of every looks
        </p>
        <div className="flex justify-between py-2">
          <p>Domain:</p>
          <a href="#" className="text-blue-900">
            samstore.fk.com
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
