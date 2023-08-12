import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';
import convertCurrency from '../../utils/convertCurrency';
import { countries } from '../../utils/data';


const ShippingDetails = ({ checkoutData, setCheckoutData }) => {

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
        <span className='w-full border-b font-light mb-8 text-2xl text-start border-slate-600'>
          Shipping Details
        </span>
        <div className='w-full flex flex-col'>

          <TextField
            onChange={(e) => setCheckoutData({ ...checkoutData, shipping: { ...checkoutData.shipping, fullName: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Full Name" className='w-full mb-4' size='small' focused variant="outlined" value={checkoutData.shipping.fullName} required />
          <div className='w-full flex items-center my-6 justify-between'>
            <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shipping: { ...checkoutData.shipping, email: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Email" className='w-[62%] mr-4' type='email' size='small' focused variant="outlined" value={checkoutData.shipping.email} required />
            <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shipping: { ...checkoutData.shipping, phone: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Phone" className='w-[36%] mr-2' size='small' focused variant="outlined" value={checkoutData.shipping.phone} required />
          </div>
          <Autocomplete
            disablePortal
            sx={{ '& fieldset': { borderRadius: 4 } }}
            onChange={(event, newValue) => {
              setCheckoutData({ ...checkoutData, shipping: { ...checkoutData.shipping, country: newValue } });
            }}
            options={countries}
            renderInput={(params) => <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shipping: { ...checkoutData.shipping, fullName: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} focused className='w-full' {...params} label="Country" />}
            className='w-full outline-none'
            size='small'
          />
          <div className='w-full flex items-center my-6 justify-between'>
            <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shipping: { ...checkoutData.shipping, state: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="State" className='w-[62%] mr-4' size='small' focused variant="outlined" value={checkoutData.shipping.state} required />
            <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shipping: { ...checkoutData.shipping, city: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="City" className='w-[36%] mr-2' size='small' focused variant="outlined" value={checkoutData.shipping.city} required />
          </div>
          <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shipping: { ...checkoutData.shipping, address: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Address" className='my-6' size='small' focused variant="outlined" value={checkoutData.shipping.address} required />
          <div className='my-6 w-full'>
            <TextField rows={'4'} onChange={(e) => setCheckoutData({ ...checkoutData, otherInformation: e.target.value })} InputProps={{ sx: { borderRadius: 4, minHeight: "40px" } }} label="Other Information" className='my-6 w-full' size='small' focused variant="outlined" value={checkoutData.otherInformation} />
          </div>
        </div>
      </div>
      <div className='w-4/12 flex flex-col'>
        <span className='w-full border-b font-light text-2xl text-start border-slate-600'>
          Summary
        </span>
        <input type="text" placeholder='HAVE A VOUCHER ?' className='border-0 outline-0 my-4 none placeholder:text-slate-600 text-black p-2 w-full' />
        <div className='w-full flex flex-col h-[40vh] overflow-y-scroll'>
          {data.map((item, index) => (
            <div className='flex justify-between my-2 w-full' key={index}>
              <img src={item.image} className='w-20 h-20 rounded object-cover' />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails