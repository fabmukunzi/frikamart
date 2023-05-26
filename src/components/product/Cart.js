/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../features/cart/getCart';
import close from '../../assets/images/icons8-close.svg'
import { removeCartItem } from '../../features/cart/removeItem';
import { showErrorMessage, showSuccessMessage } from '../../utils/toast';
import Loader from '../Loader';

const Cart = () => {
  const [searchProducts, setCurrentAmount, convertedAmount, currency] =
    useOutletContext();
  const { cart,isLoading } = useSelector((state) => state.cart);
  const data = useSelector((state) => state.removeCartItem.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart()).unwrap();
  }, [dispatch]);
  let items
  // if(data.cart?.length>0)
  // items=data.cart
  items = cart?.Cart;
  // const relatedProducts = ['1', '2', '3', '4', '5', '6'];
  return (
    <div>
    {(isLoading||data?.isLoading?<Loader />:(
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
            <button className="bg-[#08F46C] w-fit py-3 text-lg px-8 rounded-sm shadow-md mx-4 mt-4 shadow-black">
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
              {item?.price} <del className="text-slate-400 hidden">$700</del>
            </p>
          </div>
          <div className="flex items-center py-1 gap-2 text-lg px-2 justify-between">
            <input
              type="number"
              className="w-14 xs:w-8 border text-center"
              defaultValue={item.count}
              min="1"
            />
            <button type="submit">Apply</button>
          </div>
          <div className="xs:mr-3 flex gap-3">
            <p>
              {item?.price.split(' ')[0] +
                ' ' +
                item?.price.split(' ')[1] * item.count}
            </p>
            <div>
          <img src={close} alt='remove' className='w-5 cursor-pointer invert mr-4' onClick={()=>{
            try {
              dispatch(removeCartItem({id:item.puid})).unwrap()
            showSuccessMessage('Product removed from cart')
            } catch (error) {
              showErrorMessage('failed to remove')
            }
          }} />
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
                className="py-2 font-normal bg-slate-200"
              />
              <button className="border py-2 w-1/2">Apply</button>
            </div>
            <div className="md:my-4">
              <div className="text-lg font-bold bg-[#D9D9D9] w-full xs:w-screen px-4">
                <div className="flex justify-between border-b border-slate-500 py-3">
                  <p>Subtotal</p>
                  <p>{cart.TotalPrice}</p>
                </div>
                <div className="flex justify-between border-b border-slate-500 py-3">
                  <p>Tax</p>
                  <p>RWF 0</p>
                </div>
                <div className="flex justify-between border-b py-3">
                  <p>Total</p>
                  <p>{cart.TotalPrice}</p>
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
    ))}
      <div>
        <h1 className="xs:text-center font-bold sm:ml-14 mt-4">
          RELATED PRODUCTS
        </h1>
        {/* <div className="grid grid-cols-3 xs:grid-cols-1 mx-10 xs:mx-2">
          {relatedProducts?.map(() => (
            <ProductCard
              setCurrentAmount={setCurrentAmount}
              convertedAmount={convertedAmount}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
