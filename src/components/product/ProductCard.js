/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import rate0 from '../../assets/images/star-svgrepo-com (1).svg';
import rate1 from '../../assets/images/star-svgrepo-com (2).svg';
import { addProduct } from '../../features/products/compareProducts';
import convertCurrency from '../../utils/convertCurrency';
import { showSuccessMessage } from '../../utils/toast';
import Modal from '../Model';

const ProductCard = ({ ...props }) => {
  const [showModel, setShowModel] = useState(false);
  const pr = props.product.price;
  const [price, setPrice] = useState(pr);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const product = props.product;
  let rate = product?.rating;
  const cart = {};
  cart.uid = product.uid;
  cart.attributes = [];

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
      <motion.div
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 }
        }}
        className={`flex flex-col px-2 hover:scale-[1.04] transition duration-200	 font-poppins   bg-white font-normal justify-around rounded-md border border-slate-300 hover:border-slate-500 py-1 xs:w-[11rem] xs:my-2 my-8 mx-auto md:mx-3 ${props.className}`}
      >
        <div className="w-full" key={product.uid}>
          <img
            src={product?.image}
            alt="phone"
            className="cursor-pointer w-full h-[200px] rounded-lg px-1 object-contain"
            onClick={() => {
              navigate(`/products/${product?.uid}`);
            }}
          />
          {/* <div className="flex justify-center mt-8">
            {product?.more_imgs?.map((image) => (
              <img
                src={image}
                alt="phone"
                className="w-14 object-contain h-14 mx-3"
              />
            ))}
          </div> */}
        </div>
        <div className="w-full flex  flex-col mx-1">
          <p>{product?.subCategory}</p>
          <h1
            className="font-bold text-base cursor-pointer  truncate py-1 xs:py-0"
            onClick={() => {
              navigate(`/products/${product?.uid}`);
            }}
          >
            {product?.title}
          </h1>
          <p>{product?.category}</p>
          <div className="flex my-2 xs:my-1">
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
          {/* <div className="flex items-center">
            <img src={wish} alt="phone" className="w-8 mr-2" />
            <p className="w-full text-sm">{t('AddToWishlist')}</p>
          </div> */}
          <div
            className="flex items-center cursor-pointer my-3"
            onClick={() => {
              dispatch(addProduct(product)).unwrap();
              showSuccessMessage('Product has been added to compare');
            }}
          >
            <span className='w-10 h-10 mr-3 p-2 flex items-center justify-center text-white bg-app-slate rounded-full cursor-pointer'>
              <BiGitCompare size={25} />
            </span>
            <p className="w-full text-sm capitalize">{t('CompareProduct')}</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-[#08F46C] duration-100 w-fit px-8 py-2 text-base rounded mt-4 mb-1 shadow-slate-500 flex items-center"
            onClick={() => {
              setShowModel(true);
            }}
          >
            <AiOutlineShoppingCart size={25} className='mr-2' />
            {t('AddToCart')}
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
