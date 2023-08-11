import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';
import convertCurrency from '../../utils/convertCurrency';
import { paymentMethods } from '../../utils/data';


const PaymentOptions = ({ checkoutData, setCheckoutData }) => {

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
      <div className='w-7/12 flex flex-col'>
        <span className='w-full border-b font-light text-2xl text-start border-slate-600'>
          Payment methods
        </span>
        <div className='flex flex-col mt-6 rounded-lg border-black/70 border'>
          {
            paymentMethods.map((method, index) => {

              return (
                <label className='py-3 px-3 border-b w-full flex flex-col' key={index}>
                  <div className='flex'>
                    <input onChange={(e) => setCheckoutData({ ...checkoutData, paymentMethod: e.target.value })} type={"radio"} className='w-5' name="payment-method" value={method.value} />
                    <span className='ml-2'>{method.name}</span>
                  </div>
                  {checkoutData.paymentMethod === method.value &&
                    <span className='ml-8 mt-2'>
                      {method.description}
                    </span>}
                </label>
              )
            })
          }
        </div>
      </div>
      <div className='w-4/12 flex flex-col'>
        <span className='w-full border-b font-light text-2xl text-start border-slate-600'>
          Summary
        </span>
        <input type="text" placeholder='ENTER COUPON CODE' className='border-0 outline-0 my-4 none placeholder:text-slate-600 text-black p-2 w-full' />
        <div className='w-full flex flex-col'>
          <div className="my-2 w-full flex justify-between">
            <span>Subtotal:</span>
            <span>{convertCurrency(currency, cartData.subtotal)}</span>
          </div>
          <div className="my-2 w-full flex justify-between">
            <span>Tax:</span>
            <span>{convertCurrency(currency, cartData.tax)}</span>
          </div>
          <div className="my-2 w-full flex justify-between">
            <span>Shipping Fee:</span>
            <span>{convertCurrency(currency, cartData.shipping)}</span>
          </div>
          <div className="my-2 w-full flex justify-between">
            <span>Total:</span>
            <span className='font-bold text-2xl'>{convertCurrency(currency, cartData.total)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentOptions