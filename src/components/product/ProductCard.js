/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import rate1 from '../../assets/images/star-svgrepo-com (2).svg';
import rate0 from '../../assets/images/star-svgrepo-com (1).svg';
import wish from '../../assets/images/material-symbols_heart-plus-outline.svg';
import compare from '../../assets/images/fluent_branch-compare-20-filled.svg';
import { useNavigate } from 'react-router-dom';
import Modal from '../Model';
import { useTranslation } from 'react-i18next';
import { addProduct } from '../../features/products/compareProducts';
import { useDispatch } from 'react-redux';
import convertCurrency from '../../utils/convertCurrency';
import { showSuccessMessage } from '../../utils/toast';

const ProductCard = ({ ...props }) => {
  const [showModel, setShowModel] = useState(false);
  const pr = props.product.price;
  const [price, setPrice] = useState(pr);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const product = props.product;
  let rate = product?.rating;
  let [pQuantity,setPQuantity]=useState(1)
  const cart={};
  cart.uid=product.uid;
  cart.attributes=[];

  const convert = () => {
    try {
      const p = convertCurrency(props.currency, price);
      return p;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const p = convert();
    setDisplayPrice(p);
  }, [props.currency, convertCurrency]);
  const [displayPrice, setDisplayPrice] = useState(price);
  return (
    <>
      {showModel && (
        <Modal
          showModel={showModel}
          title="Confirm to add item to cart"
          setShowModel={setShowModel}
          cart={cart}
          product={props.product}
        />
      )}
      <div
        className={`flex hover:scale-[1.09] transition duration-500	 font-poppins   bg-white font-normal justify-around rounded-md border border-slate-300 hover:border-slate-500 py-6 xs:w-[22rem] w-auto my-8 mx-auto md:mx-3 ${props.className}`}
      >
        <div className="w-1/2" key={product.uid}>
          <img
            src={product?.image}
            alt="phone"
            className="cursor-pointer w-32 h-28 object-contain mx-4"
            onClick={() => {
              navigate(`/products/${product?.uid}`);
            }}
          />
          <div className="flex justify-center mt-8">
            {product?.more_imgs?.map((image) => (
              <img
                src={image}
                alt="phone"
                className="w-14 object-contain h-20 border border-slate-300 mx-3"
              />
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <p>{product?.subCategory}</p>
          <h1
            className="font-bold text-base cursor-pointer  h-[4.5rem] overflow-hidden"
            onClick={() => {
              navigate(`/products/${product?.uid}`);
            }}
          >
            {product?.title}
          </h1>
          <p>{product?.category}</p>
          <div className="flex my-2">
            {[...Array(5)].map((_, i) => {
              if (rate > 0) {
                rate--;
                return (
                  <img key={i} src={rate1} alt="phone" className="w-4 mx-0.5" />
                );
              }
              return (
                <img key={i} src={rate0} alt="phone" className="w-4 mx-0.5" />
              );
            })}
          </div>
          <p className="flex font-bold text-red-600">
            {displayPrice?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            <del className="text-gray-500 ml-3"></del>
          </p>
          <div className="flex items-center">
            <img src={wish} alt="phone" className="w-8 mr-2" />
            <p className="w-full text-sm">{t('AddToWishlist')}</p>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              dispatch(addProduct(product));
              showSuccessMessage('Product has been added to compare');
            }}
          >
            <img
              src={compare}
              alt="phone"
              className="invert rounded-full hover:invert-0 transition duration-500 hover:bg-slate-500 w-10 mr-2"
            />
            <p className="w-full text-sm">{t('CompareProduct')}</p>
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
    </>
  );
};

export default ProductCard;
