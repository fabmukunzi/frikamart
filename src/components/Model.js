/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/addToCart';
import { showErrorMessage, showSuccessMessage } from '../utils/toast';
import { getCart } from '../features/cart/getCart';
import { useOutletContext } from 'react-router-dom';
import convertCurrency from '../utils/convertCurrency';
import { motion } from 'framer-motion';

const Model = ({ ...props }) => {
  const [totalPrice, setTotalPrice] = useState(props.product.price);
  const [setCurrentAmount, convertedAmount, currency] = useOutletContext();
  const dispatch = useDispatch();
  const [pQuantity, setPQuantity] = useState(1);
  const { isLoading } = useSelector((state) => state.cart || state.addToCart);
  const cart = props?.cart;
  console.log(cart, 'carttttt');
  cart.count = pQuantity;
  const handleQuantityChange = async (event) => {
    const value = event.target.value;
    let price = '';
    const currency = totalPrice?.split(' ')[0];
    if (event.target.value == 1) {
      setPQuantity(1);
      return setTotalPrice(props.product.price);
    }
    if (event.target.value === '') {
      setPQuantity(1);
      return setTotalPrice(props.product.price);
    }
    setPQuantity(event.target.value);
    const p = props?.product?.price?.split(' ')[1];
    price = p * value;
    setTotalPrice(`${currency} ${price}`);
  };
  return (
    <>
      {props.showModel ? (
        <>
          <div className="absolute min-h-screen top-0 left-0 flex justify-center items-center inset-0 z-50">
            <motion.div className="relative xs:w-screen xs:h-fit xs:mx-2 w-[50%] h-[50%] rounded-md bg-white my-6">
              <div className="text-center p-5 border-b-2">
                <h1 className="font-bold text-2xl">{props.title}</h1>
              </div>
              <div className="flex relative px-6 py-3 flex-col gap-5 font-bold">
                <h1>Product name: {props.product.title}</h1>
                <h1>
                  Price:{' '}
                  {convertCurrency(currency, props?.product?.price)
                    ?.toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </h1>
                <input
                  type="number"
                  placeholder="Number of items"
                  min={1}
                  className="border-2  py-2 px-1 my-4 rounded-sm  border-slate-400"
                  onChange={(event) => {
                    handleQuantityChange(event);
                  }}
                  required
                />
                <h1>
                  Total price :{' '}
                  {convertCurrency(currency, totalPrice)
                    ?.toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </h1>
              </div>
              <div className="flex items-center justify-end gap-x-5 p-3 py-4">
                <button
                  className="!text-black bg-transparent py-2 border border-black hover:bg-gray-100  rounded-none px-6"
                  type="button"
                  l
                  onClick={() => props.setShowModel(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#0fc65b] border-[#0fca5d] py-2 border-2 font-bold text-white px-6 text-sm hover:bg-[#08F46C] hover:border-[#08F46C]"
                  type="button"
                  onClick={async () => {
                    try {
                      props.setShowModel(false);
                      dispatch(addToCart({ cart })).unwrap();
                      showSuccessMessage('Added to cart');
                      await dispatch(getCart()).unwrap();
                    } catch (error) {
                      console.log(error, 'error');
                      showErrorMessage('Failed to add to cart');
                    }
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Confirm'}
                </button>
              </div>
            </motion.div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-app-slate" />
        </>
      ) : null}
    </>
  );
};

export default Model;
