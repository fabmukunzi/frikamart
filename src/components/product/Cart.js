/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../features/cart/getCart';
import close from '../../assets/images/icons8-close.svg';
import { removeCartItem } from '../../features/cart/removeItem';
import { showErrorMessage, showSuccessMessage } from '../../utils/toast';
import Loader from '../Loader';
import { updateCart } from '../../features/cart/updateCart';
import { clearCart } from '../../features/cart/clearCart';
import convertCurrency from '../../utils/convertCurrency';
import { Slide } from 'react-awesome-reveal';

const Cart = () => {
  const [setCurrentAmount, convertedAmount, currency] = useOutletContext();
  const { data, totalprice, isLoading } = useSelector(
    (state) => state.cart.cart
  );
  const [itemId, setItem] = useState(null);
  const [count, setCount] = useState(null);
  const loading = useSelector((state) => state.removeCartItem.isLoading);
  const load = useSelector((state) => state.clearCart.isLoading);
  const loadingg = useSelector((state) => state.updateCart.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart()).unwrap();
  }, [dispatch]);
  let items;
  items = data;
  return (
    <Slide triggerOnce>
      {isLoading || load || loadingg || loading ? (
        <Loader />
      ) : (
        <div className="">
          {items?.length > 0 ? (
            <div className="bg-[#D9D9D9] flex justify-around w-5/6 xs:w-screen py-3 mt-8 mx-auto xs:px-4">
              <p className="md:w-2/6">Product name</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col  py-32">
              <h1 className="text-center font-bold text-4xl">No Cart</h1>
              <button
                onClick={() => navigate('/')}
                className="bg-[#08F46C] w-fit py-3 text-lg px-8 rounded-sm shadow-md mx-4 mt-4 shadow-black"
              >
                Go back shopping
              </button>
            </div>
          )}
          {items?.map((item) => (
            <div className="flex bg-white border-b xs:text-xs border-[#D9D9D9] xs:justify-around  items-center md:gap-20 w-5/6 xs:w-screen py-3 md:mx-auto">
              <div className="flex justify-between items-center w-[35rem]">
                <div>
                  <img
                    src={item.image}
                    alt="phone"
                    className="w-28 h-24 object-contain"
                  />
                </div>
                <div className="md:w-4/5 ml-4">
                  <p>{item.title}</p>
                  <p>
                    PRODUCT FROM <span>{item.store}</span>
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-red-500">
                  {convertCurrency(currency, item?.price)
                    ?.toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<br />
                  <del className="text-slate-400 ">{item.discount_value}</del>
                </p>
              </div>
              <div className="flex items-center py-1 gap-2 text-lg px-2 justify-between">
                <input
                  type="number"
                  className="w-14 xs:w-8 border text-center"
                  defaultValue={item?.count}
                  min="1"
                  onChange={(event) => {
                    setCount(event.target.value);
                    setItem(item.uid);
                  }}
                />
                <button
                  type="submit"
                  onClick={async () => {
                    await dispatch(updateCart({ id: itemId, count: count }));
                    await dispatch(getCart()).unwrap();
                    showSuccessMessage('Cart updated successfully');
                  }}
                >
                  Apply
                </button>
              </div>
              <div className="xs:mr-3 flex gap-3">
                <p className="font-bold">
                  {convertCurrency(
                    currency,
                    item?.price.split(' ')[0] +
                    ' ' +
                    item?.price.split(' ')[1] * item.count
                  )
                    ?.toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
                <div>
                  <img
                    src={close}
                    alt="remove"
                    className="w-5 cursor-pointer invert mr-4"
                    onClick={async () => {
                      try {
                        await dispatch(
                          removeCartItem({ id: item.uid })
                        ).unwrap();
                        await dispatch(getCart()).unwrap();
                        showSuccessMessage('Product removed from cart');
                      } catch (error) {
                        showErrorMessage(error?.data?.error || 'Failed to remove item');
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          {items?.length > 0 && (
            <div className="flex xs:flex-wrap-reverse justify-between md:mx-[7.5rem] md:px-10 bg-white">
              <div className="flex md:flex-col xs:mx-2 gap-4 font-bold justify-items-start xs:justify-center my-4">
                <label htmlFor="coupon" className="">
                  Coupon code
                </label>
                <input
                  type="text"
                  name="coupon"
                  placeholder="Enter coupon code"
                  className="p-2 font-normal bg-slate-200"
                />
                <button className="border py-2 w-1/2">Apply</button>
              </div>
              <div className="md:my-4">
                <div className="text-lg font-bold bg-[#D9D9D9] w-full xs:w-screen px-4">
                  {/* <div className="flex justify-between border-b border-slate-500 py-3">
                    <p>Subtotal</p>
                    <p>{convertCurrency(currency, cart.TotalPrice).toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                  </div>
                  <div className="flex justify-between border-b border-slate-500 py-3">
                    <p>Tax</p>
                    <p>{convertCurrency(currency, 'RWF 0').toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                  </div> */}
                  <div className="flex justify-between border-b py-3">
                    <p>Total</p>
                    <p>
                      {convertCurrency(currency, totalprice)
                        ?.toString()
                        ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </p>
                  </div>
                </div>
                <div className="w-full flex xs:flex-wrap justify-between">
                  <button
                    className="bg-[#08F46C] w-fit xs:w-full py-3 text-lg px-8 rounded-sm shadow-md mx-4 mt-4 shadow-black"
                    onClick={async () => {
                      await dispatch(clearCart());
                      await dispatch(getCart()).unwrap();
                      showSuccessMessage('Cart cleared');
                    }}
                  >
                    Clear cart
                  </button>
                  <Link to={"/checkout"}>
                    <button className="bg-[#08F46C] w-fit xs:w-full py-3 text-lg px-8 rounded-sm shadow-md mx-4 mt-4 shadow-black">
                      Proceed to checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )
      }
    </Slide>
  );
};

export default Cart;
