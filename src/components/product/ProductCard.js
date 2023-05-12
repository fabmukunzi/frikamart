/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import rates from '../../assets/images/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-removebg-preview 1.svg';
import wish from '../../assets/images/material-symbols_heart-plus-outline.svg';
import compare from '../../assets/images/fluent_branch-compare-20-filled.svg';
import { useNavigate } from 'react-router-dom';
import Modal from '../Model';
import { useTranslation } from 'react-i18next';
import { addProduct } from '../../features/products/compareProducts';
import { useDispatch } from 'react-redux';
import convertCurrency from '../../utils/convertCurrency';
import { showSuccessMessage } from '../../utils/toast';

const ProductCard = ({...props }) => {
  const [showModel, setShowModel] = useState(false);
  const pr=props.product?.price
  const [price, setPrice] = useState(pr);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const product=props.product;

  const convert=()=>{
    try {
      const p=convertCurrency(props.currency,price)
      return p
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    const p=convert();
    setDisplayPrice(p)
  },[props.currency,convertCurrency])
  const [displayPrice,setDisplayPrice]=useState(price)
  return (
    <div
      className={`flex transition duration-500	 font-poppins hover:shadow-2xl shadow-slate-600  bg-white font-normal justify-around rounded-md border border-slate-300 py-6 xs:w-[22rem] w-auto my-4 mx-auto md:mx-3 ${props.className}`}
    >
      {showModel && (
        <Modal
          showModel={showModel}
          title="Confirm to add item to cart"
          setShowModel={setShowModel}
          product={props.product}
        />
      )}
      <div className="w-1/2">
        <img
          src={product?.image}
          alt="phone"
          className="cursor-pointer w-32 h-28 object-contain mx-4"
          onClick={() => {
            navigate(`/products/${12345}`);
          }}
        />
        <div className="flex justify-center mt-8">
          <img
            src={product?.image}
            alt="phone"
            className="w-14 h-20 border border-slate-300 mx-3"
          />
          <img
            src={product?.image}
            alt="phone"
            className="w-14 h-20 border border-slate-300 mx-3"
          />
        </div>
      </div>
      <div className="w-1/2">
        <p>{product?.subCategory}</p>
        <h1
          className="font-bold text-lg cursor-pointer  h-20 overflow-hidden"
          onClick={() => {
            navigate(`/products/${product?.uid}`);
          }}
        >
          {product?.title}
        </h1>
        <p>{product?.category}</p>
        <img src={rates} alt="phone" />
        <p className="flex font-bold text-red-600">
        {displayPrice?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <del className="text-gray-500 ml-3"></del>
        </p>
        <div className="flex items-center">
          <img src={wish} alt="phone" className="w-8 mr-2" />
          <p className="w-full">{t('AddToWishlist')}</p>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            dispatch(addProduct(product));
            showSuccessMessage('Product has been added to compare')
          }}
        >
          <img src={compare} alt="phone" className="invert rounded-full hover:invert-0 transition duration-500 hover:bg-slate-500 w-10 mr-2" />
          <p className="w-full">{t('CompareProduct')}</p>
        </div>
        <button
          className="bg-[#08F46C] w-fit px-8 py-2 text-base rounded-md shadow-md mt-4 shadow-slate-500"
          onClick={() => {
            setShowModel(true);
          }}
        >
          {t('AddToCart')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
