import { Autocomplete, TextField, } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { countries, paymentMethods } from './../utils/data'
import { useSelector } from 'react-redux';

const CheckoutPage = () => {

    const [checkoutData, setCheckoutData] = useState({
        shippingInformation: {
            fullName: '',
            email: "",
            phone: "",
            country: "",
            state: "",
            city: "",
            address: ""
        },
        billingInformation: {
            fullName: '',
            email: "",
            phone: "",
            country: "",
            state: "",
            city: "",
            address: ""
        },
        paymentMethod: "",
        orderNotes: "",
        companyInvoiceRequired: false,
    })
    const [billingSimilarToShipping, setBillingSimilarToShipping] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    const { data } = useSelector(
        (state) => state.cart.cart
    );

    useEffect(() => {
        document.title = 'Checkout'
    }, [])
    console.log(data)
    return (
        <div className='w-full flex min-h-screen justify-center px-32 pb-8'>
            <div className='border-r border-black flex flex-col w-3/6 pb-8'>
                <span className='font-bold text-3xl'>Checkout.</span>
                <hr className='my-6' />
                <form className='flex flex-col w-full px-4'>
                    <div className='flex flex-col'>
                        <span className='text-2xl font-bold mb-6'>Shipping Information</span>
                        <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shippingInformation: { ...checkoutData.shippingInformation, fullName: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Full Name" className='w-full mb-4' size='small' focused variant="outlined" value={checkoutData.shippingInformation.fullName} required />
                        <div className='w-full flex items-center my-6 justify-between'>
                            <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shippingInformation: { ...checkoutData.shippingInformation, email: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Email" className='w-[62%] mr-4' type='email' size='small' focused variant="outlined" value={checkoutData.shippingInformation.email} required />
                            <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shippingInformation: { ...checkoutData.shippingInformation, phone: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Phone" className='w-[36%] mr-2' size='small' focused variant="outlined" value={checkoutData.shippingInformation.phone} required />
                        </div>
                        <Autocomplete
                            disablePortal
                            sx={{ '& fieldset': { borderRadius: 33 }}}
                            // sx={{ borderRadius: 4, }}
                            options={countries}
                            renderInput={(params) => <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shippingInformation: { ...checkoutData.shippingInformation, fullName: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} focused className='w-full' {...params} label="Country" />}
                            className='w-full outline-none'
                            size='small'
                        />
                        <div className='w-full flex items-center my-6 justify-between'>
                            <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shippingInformation: { ...checkoutData.shippingInformation, state: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="State" className='w-[62%] mr-4' size='small' focused variant="outlined" value={checkoutData.shippingInformation.state} required />
                            <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shippingInformation: { ...checkoutData.shippingInformation, city: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="City" className='w-[36%] mr-2' size='small' focused variant="outlined" value={checkoutData.shippingInformation.city} required />
                        </div>
                        <TextField onChange={(e) => setCheckoutData({ ...checkoutData, shippingInformation: { ...checkoutData.shippingInformation, address: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Address" className='my-6' size='small' focused variant="outlined" value={checkoutData.shippingInformation.add} required />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-2xl font-bold mt-10'>Billing Information</span>
                        <label htmlFor='billing-info-checkbox' className="my-3">
                            <input defaultChecked onChange={(e) => setBillingSimilarToShipping(!billingSimilarToShipping)} value={billingSimilarToShipping} type={"checkbox"} id={"billing-info-checkbox"} />
                            <span className='ml-2' >Same as shipping information</span>
                        </label>
                        {!billingSimilarToShipping &&
                            <div className='flex flex-col'>
                                <TextField onChange={(e) => setCheckoutData({ ...checkoutData, billingInformation: { ...checkoutData.billingInformation, fullName: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Full Name" className='w-full mb-4' size='small' focused variant="outlined" value={checkoutData.billingInformation.fullName} required />
                                <div className='w-full flex items-center my-6 justify-between'>
                                    <TextField onChange={(e) => setCheckoutData({ ...checkoutData, billingInformation: { ...checkoutData.billingInformation, email: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Email" className='w-[62%] mr-4' type='email' size='small' focused variant="outlined" value={checkoutData.billingInformation.email} required />
                                    <TextField onChange={(e) => setCheckoutData({ ...checkoutData, billingInformation: { ...checkoutData.billingInformation, phone: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Phone" className='w-[36%] mr-2' size='small' focused variant="outlined" value={checkoutData.billingInformation.phone} required />
                                </div>
                                <Autocomplete
                                    disablePortal
                                    sx={{ borderRadius: 4, }}
                                    options={countries}
                                    renderInput={(params) => <TextField onChange={(e) => setCheckoutData({ ...checkoutData, billingInformation: { ...checkoutData.billingInformation, fullName: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} focused className='w-full' {...params} label="Country" />}
                                    className='w-full outline-none'
                                    size='small'
                                />
                                <div className='w-full flex items-center my-6 justify-between'>
                                    <TextField onChange={(e) => setCheckoutData({ ...checkoutData, billingInformation: { ...checkoutData.billingInformation, state: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="State" className='w-[62%] mr-4' size='small' focused variant="outlined" value={checkoutData.billingInformation.state} required />
                                    <TextField onChange={(e) => setCheckoutData({ ...checkoutData, billingInformation: { ...checkoutData.billingInformation, city: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="City" className='w-[36%] mr-2' size='small' focused variant="outlined" value={checkoutData.billingInformation.city} required />
                                </div>
                                <TextField onChange={(e) => setCheckoutData({ ...checkoutData, billingInformation: { ...checkoutData.billingInformation, address: e.target.value } })} InputProps={{ sx: { borderRadius: 4, } }} label="Address" className='my-6' size='small' focused variant="outlined" value={checkoutData.shippingInformation.add} required />
                            </div>
                        }
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-2xl font-bold mt-10'>Payment method</span>
                        <div className='flex flex-col mt-6 rounded-lg border-black/70 border'>
                            {
                                paymentMethods.map((method, index) => {

                                    return (
                                        <label className='py-3 px-3 border-b w-full flex flex-col' key={index}>
                                            <div className='flex'>
                                                <input onChange={(e) => setCheckoutData({ ...checkoutData, paymentMethod: e.target.value })} type={"radio"} className='w-5' name="payment-method" value={method.value} />
                                                <span className='ml-2'>{method.name}</span>
                                            </div>
                                            {checkoutData.paymentMethod == method.value &&
                                                <span className='ml-8 mt-2'>
                                                    {method.description}
                                                </span>}
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-semibold text-lg my-2'>Order Notes</span>
                        <textarea value={checkoutData.orderNotes} onChange={(e) => checkoutData.orderNotes} className='w-full p-3 rounded-md border outline-none' placeholder="Notes about your order, e.g. special notes for delivery" rows={3}></textarea>
                    </div>
                </form>
            </div>
            <div className='w-2/6 pt-4 px-6 flex flex-col'>
                {
                    data.map((data, index) => {
                        const subtotal = data.count * parseInt(data.price.split(" ")[1])
                        const tax = 18 / 100 * subtotal
                        const shipping = 10

                        return (
                            <div className="rounded-lg my-8 w-full flex flex-col" key={index}>
                                <div className='bg-slate-400 mb-4 p-4'>
                                    <p>Go Pro</p>
                                </div>
                                <div className='flex px-4 w-full justify-between'>
                                    <div className='flex'>
                                        <div className='relative'>
                                            <span className='rounded-full bg-slate-300 text-black w-6 h-6 text-center top-0 -right-2 absolute'>{data.count}</span>
                                            <img src={data.image} className="w-20 h-20 rounded-lg object-cover" alt={data.title} />
                                        </div>
                                        <div className='flex flex-col ml-4'>
                                            <span className='font-semibold'>{data.title}</span>
                                            <span>(Size: S, Color: Black)</span>
                                        </div>
                                    </div>
                                    <span>{data.price}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-lg'>Shipping method</span>
                                    <label className='py-3 px-3 border-b w-full flex flex-col'>
                                        <div className='flex'>
                                            <input type={"radio"} className='w-5' name="payment-method" />
                                            <span className='ml-2 flex'>Free delivery - &nbsp;<span className='font-bold'>Free shipping</span> </span>
                                        </div>
                                    </label>
                                </div>
                                <hr className='my-6' />
                                <div className='w-full flex flex-col'>
                                    <div className="my-2 w-full flex justify-between">
                                        <span>Subtotal:</span>
                                        <span>{subtotal} {data.price.split(" ")[0]}</span>
                                    </div>
                                    <div className="my-2 w-full flex justify-between">
                                        <span>Tax:</span>
                                        <span>{tax} {data.price.split(" ")[0]}</span>
                                    </div>
                                    <div className="my-2 w-full flex justify-between">
                                        <span>Shipping Fee:</span>
                                        <span>{shipping} {data.price.split(" ")[0]}</span>
                                    </div>
                                    <div className="my-2 w-full flex justify-between">
                                        <span>Total:</span>
                                        <span className='font-bold text-2xl'>{shipping + tax + subtotal} {data.price.split(" ")[0]}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CheckoutPage