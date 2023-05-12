import React from 'react';
import phone from '../../assets/images/IMG_0031-removebg-preview 1.svg';
import { useNavigate, useOutletContext } from 'react-router-dom';
import ProductCard from './ProductCard';

const Cart = () => {
  const [setCurrentAmount, convertedAmount] = useOutletContext();
  const navigate = useNavigate();
  const items = [
    { name: 'Partel', price: 600, quantity: 2, image: phone, store: 'iPhone' },
    { name: 'Watch', price: 700, quantity: 2, image: phone, store: 'Samsung' },
  ];
  const relatedProducts = ['1', '2', '3', '4', '5', '6'];
  return (
    <div>
      <div className="">
        {items.length > 0 ? (
          <div className="bg-[#D9D9D9] flex justify-between w-5/6 xs:w-screen py-3 mt-8 mx-auto xs:px-4 px-12">
            <p className="md:w-2/6">Product name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col  py-32">
            <h1 className="text-center font-bold text-4xl">No Cart</h1>
            <button className="bg-[#08F46C] w-fit py-3 text-lg px-8 rounded-sm shadow-md mx-4 mt-4 shadow-black">
              Go back shopping
            </button>
          </div>
        )}
        {items.map((item) => (
          <div className="flex bg-white border-b xs:text-xs border-[#D9D9D9] items-center justify-between w-5/6 xs:w-screen py-3 md:mx-auto md:px-6">
            <div className="flex items-center xs:w-14">
              <img src={item.image} alt="phone" className="w-28 h-32" />
              <div>
                <p>{item.name}</p>
                <p>
                  PRODUCT FROM <span>{item.store}</span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-red-500 ml-32 xs:ml-20">
                ${item.price} <del className="text-slate-400">$700</del>
              </p>
            </div>
            <div className="flex py-1 gap-2 text-lg px-2 justify-between">
              <input
                type="number"
                className="w-14 xs:w-8 border text-center"
                defaultValue={item.quantity}
                min="1"
              />
              <button type="submit">Apply</button>
            </div>
            <div className="xs:mr-3">
              <p>${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        {items.length > 0 && (
          <div className="flex xs:flex-wrap-reverse justify-between md:mx-[7.5rem] md:px-10 bg-white">
            <div className="flex md:flex-col xs:mx-2 gap-4 font-bold justify-items-start xs:justify-center my-4">
              <label htmlFor="coupon" className="">
                Coupon code
              </label>
              <input
                type="text"
                name="coupon"
                placeholder="Enter coupon code"
                className="py-2 font-normal bg-slate-200"
              />
              <button className="border py-2 w-1/2">Apply</button>
            </div>
            <div className="md:my-4">
              <div className="text-lg font-bold bg-[#D9D9D9] w-full xs:w-screen px-4">
                <div className="flex justify-between border-b border-slate-500 py-3">
                  <p>Subtotal</p>
                  <p>$1200</p>
                </div>
                <div className="flex justify-between border-b border-slate-500 py-3">
                  <p>Tax</p>
                  <p>$200</p>
                </div>
                <div className="flex justify-between border-b py-3">
                  <p>Total</p>
                  <p>$1400</p>
                </div>
              </div>
              <div className="w-full flex xs:flex-wrap justify-between">
                <button
                  className="bg-[#08F46C] w-fit xs:w-full py-3 text-lg px-8 rounded-sm shadow-md mx-4 mt-4 shadow-black"
                  onClick={() => navigate('/products')}
                >
                  Go back shopping
                </button>
                <button className="bg-[#08F46C] w-fit xs:w-full py-3 text-lg px-8 rounded-sm shadow-md mx-4 mt-4 shadow-black">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <h1 className="xs:text-center font-bold sm:ml-14 mt-4">
          RELATED PRODUCTS
        </h1>
        <div className="grid grid-cols-3 xs:grid-cols-1 mx-10 xs:mx-2">
          {relatedProducts.map(() => (
            <ProductCard
              setCurrentAmount={setCurrentAmount}
              convertedAmount={convertedAmount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
