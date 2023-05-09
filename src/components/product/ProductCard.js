import React, { useState } from 'react';
import phone from '../../assets/images/IMG_0031-removebg-preview 1.svg';
import phone0 from '../../assets/images/images-removebg-preview 1.svg';
import phone1 from '../../assets/images/PT_iPhone-14-Pro-removebg-preview 1.svg';
import rates from '../../assets/images/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-removebg-preview 1.svg';
import wish from '../../assets/images/material-symbols_heart-plus-outline.svg';
import compare from '../../assets/images/fluent_branch-compare-20-filled.svg';
import { useNavigate } from 'react-router-dom';
import Modal from '../Model';

const ProductCard = ({ ...props }) => {
    const [showModel, setShowModel] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`flex font-poppins hover:shadow-lg shadow-black hover:bg-slate-100 bg-white font-normal justify-around rounded-md border border-slate-300 py-6 xs:w-[22rem] w-[26rem] my-4 mx-auto ${props.className}`}
    >
        {showModel && (
        <Modal
          showModel={showModel}
        //   message="Are you sure you want to delete this product?"
          title="Add item to cart"
        //   onClick={handleConfirm}
          setShowModel={setShowModel}
        //   isLoading={loading}
        />
      )}
      <div className="w-1/2">
        <img
          src={phone}
          alt="phone"
          className="cursor-pointer"
          onClick={() => {
            navigate(`/products/${12345}`);
          }}
        />
        <div className="flex justify-center mt-8">
          <img
            src={phone0}
            alt="phone"
            className="w-14 h-24 border border-slate-300 mx-3"
          />
          <img
            src={phone1}
            alt="phone"
            className="w-14 h-24 border border-slate-300 mx-3"
          />
        </div>
      </div>
      <div className="w-1/2">
        <p>iphone</p>
        <h1
          className="font-bold text-lg cursor-pointer"
          onClick={() => {
            navigate(`/products/${12345}`);
          }}
        >
          iPhone | Power Mac Center
        </h1>
        <p>phones</p>
        <img src={rates} alt="phone" />
        <p className="flex font-bold text-red-600">
          $600<del className="text-gray-300 ml-3">$700</del>
        </p>
        <div className="flex items-center">
          <img src={wish} alt="phone" className="w-8 mr-2" />
          <p className="w-full">add to wishlist</p>
        </div>
        <div className="flex items-center">
          <img src={compare} alt="phone" className="invert w-10 mr-2" />
          <p className="w-full">compare product</p>
        </div>
        <button
          className="bg-[#08F46C] px-8 py-2 text-lg rounded-md shadow-md mt-4 shadow-slate-500"
          onClick={() => {
            setShowModel(true)
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
