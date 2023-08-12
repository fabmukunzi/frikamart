/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import * as Yup from 'yup';
import CheckoutCartComponent from '../components/checkout/CheckoutCartComponent';
import { checkout } from '../features/products/checkout';
import { showErrorMessage } from '../utils/toast';
import PaymentOptions from '../components/checkout/PaymentOptions';
import ShippingDetails from '../components/checkout/ShippingDetails';

const CheckoutPage = () => {
    const [setCurrentAmount, convertedAmount, currency] = useOutletContext();
    const [step, setStep] = useState('shopping_cart') // shopping_cart, shipping, payment
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [checkoutData, setCheckoutData] = useState({
        shipping: {
            fullName: '',
            email: "",
            phone: "",
            country: "",
            state: "",
            city: "",
            address: ""
        },
        payment: {
            fullName: '',
            email: "",
            phone: "",
            country: "",
            state: "",
            city: "",
            address: ""
        },
        otherInformation: "",
        paymentMethod: "",
        comment: "",
        companyInvoiceRequired: false,
    })

    const validationSchema = Yup.object({
        shipping: {
            fullName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            phone: Yup.string().required("Required"),
            country: Yup.string().required("Required"),
            state: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            address: Yup.string().required("Required"),
        },
        payment: {
            fullName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            phone: Yup.string().required("Required"),
            country: Yup.string().required("Required"),
            state: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            address: Yup.string().required("Required"),
        },
        paymentMethod: Yup.string().required("Required"),
        comment: Yup.string(),
        otherInformation: Yup.string(),
        companyInvoiceRequired: Yup.boolean(),
    })

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            validationSchema.validateSync(checkoutData, { abortEarly: false })
            dispatch(await checkout(checkoutData).unwrap())
            console.log(checkoutData)
            navigate('/')
        } catch (error) {
            console.log(error, 'errr')
            showErrorMessage('Something went wrong try again')
        }
    }

    useEffect(() => {
        document.title = 'Checkout | Frikamart'
    }, [])
    return (
        <Slide triggerOnce className='w-full flex flex-col items-center px-2 smd:px-12 lg:px-32 py-8'>
            <div className='flex items-center w-10/12 border-b-slate-300 border-b-2 mx-auto justify-between'>
                {
                    [{ name: 'shopping_cart', label: "Shopping Cart" }, { name: 'shipping', label: "Shipping Details" }, { name: 'payment', label: "Payment Options" }].map((_step, index) => (
                        <div className={`${_step.name === step && 'border-b-2 border-app-slate text-app-slate'}  duration-0 text-lg w-1/4 cursor-pointer flex items-center justify-center`} onClick={() => setStep(_step.name)} key={index}>{index + 1}. &nbsp;{_step.label}</div>
                    ))
                }
            </div>
            {
                <div className='w-11/12 flex flex-col'>
                    {step === 'shopping_cart' && <CheckoutCartComponent />}
                    {step === 'shipping' && <ShippingDetails setCheckoutData={setCheckoutData} checkoutData={checkoutData} />}
                    {step === 'payment' && <PaymentOptions setCheckoutData={setCheckoutData} checkoutData={checkoutData} />}
                </div>
            }
            <div className='w-11/12 flex items-center'>
                <button className={`bg-slate-600 text-white px-6 py-2 mx-4 ${step !== 'shopping_cart' ? "flex" : "hidden"}`} onClick={() => {
                    const prevStep = step === 'shipping' ? 'shopping_cart' : step === 'payment' ? 'shipping' : 'shopping_cart'
                    setStep(prevStep)
                }}>Previous</button>
                <button className={`bg-slate-600 text-white px-6 py-2 mx-4 ${step !== 'payment' ? "flex" : "hidden"}`} onClick={() => {
                    const nextStep = step === 'shopping_cart' ? 'shipping' : step === 'shipping' ? 'payment' : 'payment'
                    setStep(nextStep)
                }}>Next</button>
                <button className={`bg-slate-600 text-white px-6 py-2 mx-4 ${step === 'payment' ? "flex" : "hidden"}`} onClick={handleSubmit} type={'button'}>
                    Pay Now
                </button>
                <Link to="/" className='bg-slate-600 text-white px-6 py-2 mx-4'>
                    Cancel
                </Link>
            </div>
        </Slide >
    )
}

export default CheckoutPage