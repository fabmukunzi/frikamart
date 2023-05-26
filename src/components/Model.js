/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/addToCart';
import { showErrorMessage, showSuccessMessage } from '../utils/toast';
const Model = ({ ...props }) => {
  const [totalPrice, setTotalPrice] = useState(props.product.price);
  const dispatch = useDispatch();
  let [pQuantity, setPQuantity] = useState(1);
  const cart = props?.cart;
  cart.count = pQuantity;
  const handleQuantityChange = (event) => {
    const value = event.target.value
    let price = '';
    console.log(value,'===========')
    const currency = totalPrice?.split(' ')[0];
    if (event.target.value == 1){
      setPQuantity(1)
    return setTotalPrice(props.product.price);}
    if (event.target.value === '') {
      setPQuantity(1);
      return setTotalPrice('');
    }
    setPQuantity(event.target.value);
    price = totalPrice && totalPrice?.split(' ')[1];
    price = price * value;
    setTotalPrice(`${currency} ${price}`);
  };
  return (
    <>
      {props.showModel ? (
        <>
          <div className="fixed flex justify-center items-center inset-0 z-50">
            <div className="relative xs:w-screen xs:h-fit xs:mx-2 w-[50%] h-[50%] rounded-md bg-white my-6">
              <div className="text-center p-5 border-b-2">
                <h1 className="font-bold text-2xl">{props.title}</h1>
              </div>
              <div className="flex relative px-6 py-3 flex-col gap-5 font-bold">
                <h1>Product name: {props.product.title}</h1>
                <h1>Price: {props.product.price}</h1>
                <input
                  type="number"
                  placeholder="Number of items"
                  // min={1}
                  className="border-2  py-2 px-1 my-4 rounded-sm  border-slate-400"
                  onInput={(event) => {
                    if(event.target.value==='')
                    return event.target.defaultValue=1
                    handleQuantityChange(event);
                  }}
                  required
                />
                <h1>Total price : {totalPrice}</h1>
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
                  onClick={() => {
                    try {
                      dispatch(addToCart({ cart })).unwrap();
                      showSuccessMessage('Added to card');
                      props.setShowModel(false)
                    } catch (error) {
                      console.log(error);
                      showErrorMessage('Failed to add to cart');
                    }
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-[#2C3E50]" />
        </>
      ) : null}
    </>
  );
};

export default Model;
