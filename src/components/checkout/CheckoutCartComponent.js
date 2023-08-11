import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';
import convertCurrency from '../../utils/convertCurrency';

const CheckoutCartComponent = ({ checkoutData, setCheckoutData }) => {
    const [setCurrentAmount, convertedAmount, currency] = useOutletContext();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [cartData, setCartData] = useState({
        subtotal: "",
        tax: "",
        shipping: "",
        total: ""
    })
    const { data, totalprice } = useSelector(
        (state) => state.cart.cart
    );
    useEffect(() => {
        let subtotal = data.length * parseInt(totalprice.split(" ")[1])
        let tax = 18 / 100 * subtotal
        let shipping = 10
        let total = subtotal + tax + shipping
        shipping = 'RWF 10'
        subtotal = totalprice.split(" ")[0] + " " + subtotal
        tax = totalprice.split(" ")[0] + " " + tax
        total = totalprice.split(" ")[0] + " " + total

        setCartData({
            subtotal, tax, shipping, total
        })
    }, [totalprice])
    return (
        <div className='w-full flex md:flex-row flex-col justify-between'>
            <div className='w-7/12 flex flex-col h-[50vh] overflow-y-scroll'>
                <span className='w-full border-b font-light text-2xl text-start border-slate-600'>
                    Shopping Cart
                </span>
                {
                    data.map((item, index) => (
                        <div className='flex w-full my-6' key={index}>
                            <img src={item.image} alt={item.title} className='w-2/12 bg-slate-200 p-3 rounded-lg' />
                            <div className='ml-4 flex flex-col w-10/12'>
                                <span className='text-lg font-semibold'>{item.title}</span>
                                <div className='flex items-center justify-between my-2 w-full'>
                                    <span className='italic text-slate-700 font-light ' >{item.description.slice(0, 60)}...</span>
                                    <span>{item.count}</span>
                                </div>
                                <span>{item.price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-4/12 flex flex-col'>
                <span className='w-full border-b font-light text-2xl text-start border-slate-600'>
                    Summary
                </span>
                <input type="text" placeholder='ENTER COUPON CODE' className='border-0 outline-0 my-4 none placeholder:text-slate-600 text-black p-2 w-full' />
                <div className='w-full flex flex-col'>
                    <div className="my-2 w-full flex justify-between">
                        <span>Total Elements:</span>
                        <span>{data.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCartComponent