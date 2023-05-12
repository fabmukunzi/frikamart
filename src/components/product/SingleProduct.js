/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Model from '../Model';
import phone from '../../assets/images/IMG_0031-removebg-preview 1.svg';
import rates from '../../assets/images/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-removebg-preview 1.svg';
import wish from '../../assets/images/material-symbols_heart-plus-outline.svg';
import compare from '../../assets/images/fluent_branch-compare-20-filled.svg';
import YoutubeEmbed from '../YoutubeEmbed';
import instagram from '../../assets/images/Rectangle 14453.svg';
import facebook from '../../assets/images/Rectangle 14451.svg';
import pinterest from '../../assets/images/Rectangle 14452.svg';
import whatsapp from '../../assets/images/Rectangle 14450.svg';
import twitter from '../../assets/images/Rectangle 14454.svg';
import store from '../../assets/images/store-2017.svg';
import guides from '../../assets/images/material-symbols_edit-document-outline-rounded.svg';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../features/products/getSingleProduct';
import { useOutletContext, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import convertCurrency from '../../utils/convertCurrency';
import Loader from '../Loader';

const SingleProduct = () => {
  const { product, isLoading } = useSelector((state) => state.singleProduct);
  const [setCurrentAmount, convertedAmount, currency] = useOutletContext();
  const [showModel, setShowModel] = useState(false);
  const relatedProducts = ['1', '2', '3', '4', '5', '6'];
  const [price, setPrice] = useState(product?.price);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { id } = useParams();

  const convert = () => {
    try {
      const p = convertCurrency(currency, price);
      return p;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const p = convert();
    setPrice(p);
  }, [currency]);
  useEffect(() => {
    if (product.price) {
      setPrice(product?.price);
    }
  }, [isLoading]);

  useEffect(() => {
    dispatch(getSingleProduct({ productId: id }));
  }, []);
  return (
    isLoading?<Loader />:(
      <div>
      <div className="grid grid-cols-2 xs:grid-cols-1 justify-around xs:mx-auto mx-20 xs:w-full">
        {showModel && (
          <Model
            showModel={showModel}
            title="Confirm to add item to cart"
            setShowModel={setShowModel}
            product={product}
          />
        )}
        <div className="flex items-center xs:mx-6 xs:my-3">
          <div className="grid grid-cols-2  gap-4">
            {/* {phones.map((image) => ( */}
            <img
              key={product?.id}
              src={product?.image}
              alt="phone"
              className="w-14 h-24 border border-slate-400 mx-3"
            />
            {/* ))} */}
          </div>
          <div>
            <img
              key={product.id}
              src={product.image}
              alt="phone"
              className="w-80"
            />
          </div>
        </div>
        <div className="xs:mx-4">
          <div className="font-bold">
            <h1 className="text-xl mt-8">{product?.title}</h1>
            <div className="flex items-center">
              <h1 className="my-2">
                BRAND: <span className="text-red-700">IPHONE</span>
              </h1>
              <img key={phone} src={rates} alt="phone" className="w-28 mx-4" />
            </div>
            <div>
              <p className="flex items-center">
                <img src={store} alt="whatsapp" className="w-10 mx-2" />{' '}
                <span className="text-blue-900">SAM STORE</span>
              </p>
              <p className="text-2xl my-2 text-red-600">
                {price || product?.price}{' '}
                <del className="mx-6 text-slate-500 hidden">$700</del>
              </p>
              <div className="py-[1px] bg-gray-300 w-1/2 my-4"></div>
              <div>
                <div className="flex my-4 text-lg font-bold">
                  <p>Color</p>
                  <div className="bg-red-500 w-7 h-7 mx-2 rounded-full cursor-pointer">
                    {' '}
                  </div>
                  <div className="bg-black w-7 h-7 mx-2 rounded-full cursor-pointer">
                    {' '}
                  </div>
                  <div className="bg-green-700 w-7 h-7 mx-2 rounded-full cursor-pointer">
                    {' '}
                  </div>
                </div>
                <div className="flex my-4 text-lg font-bold">
                  <p>Size</p>
                  <div className="bg-[#678385] w-9 text-center py-1 mx-2  cursor-pointer">
                    32{' '}
                  </div>
                  <div className="bg-slate-200 w-9 text-center py-1 mx-2  cursor-pointer">
                    40{' '}
                  </div>
                  <div className="bg-slate-200 w-9 text-center py-1 mx-2  cursor-pointer">
                    21{' '}
                  </div>
                </div>
                <div className="flex my-4 text-lg font-bold">
                  <p>Shape</p>
                  <div className="bg-slate-300 w-1/6 text-center font-normal text-lg py-1 mx-3 rounded-lg cursor-pointer">
                    Oval{' '}
                  </div>
                  <div className="bg-slate-300 w-1/6 text-center font-normal text-lg py-1 mx-3 rounded-lg cursor-pointer">
                    {' '}
                    Square
                  </div>
                  <div className="bg-slate-300 w-1/6 text-center font-normal text-lg py-1 mx-3 rounded-lg cursor-pointer">
                    Curved{' '}
                  </div>
                </div>
                <div className="flex my-4 text-lg font-bold">
                  <p>Type</p>
                  <div className="bg-slate-300 w-1/6 text-center font-normal text-lg py-1 mx-3 rounded-lg cursor-pointer">
                    Mini{' '}
                  </div>
                  <div className="bg-slate-300 w-1/6 text-center font-normal text-lg py-1 mx-3 rounded-lg cursor-pointer">
                    Large{' '}
                  </div>
                </div>
                <div className="font-semibold my-4">
                  <h1 className="text-green-800">IN STOCK</h1>
                  <p>Quantity: 5</p>
                </div>
                <div className="flex items-center">
                  <div className="block">
                    <div className="flex items-center">
                      <img src={wish} alt="phone" className="w-8 mr-4" />
                      <p className="w-full">{t('AddToWishlist')}</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={compare}
                        alt="phone"
                        className="invert w-10 mr-4 my-2"
                      />
                      <p className="w-full">{t('CompareProduct')}</p>
                    </div>
                  </div>
                  <button
                    className="bg-[#08F46C] px-8 py-2 text-md w-fit xs:p-4 rounded-md ml-4 shadow-md mt-4 shadow-slate-500"
                    onClick={() => {
                      setShowModel(true);
                    }}
                  >
                    {t('AddToCart')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <YoutubeEmbed embedId="WhWc3b3KhnY" />
        </div>
        <div className="text-xl mx-2">
          <p className="my-3">SKU-: SW-110-A0</p>
          <p className="my-3">
            Categories:{' '}
            <span className="text-blue-800">
              electronics | iphones | consumer electronics
            </span>
          </p>
          <p className="my-3">
            Tags: <span>electronic, mobile, iphone</span>
          </p>
          <div className="my-4">
            <p className="my-4">share on your social media</p>
            <div className="flex justify-around w-fit">
              <img src={whatsapp} alt="whatsapp" className="w-10 mx-2" />
              <img src={facebook} alt="facebook" className="w-10 mx-2" />
              <img src={pinterest} alt="pinterest" className="w-10 mx-2" />
              <img src={instagram} alt="instagram" className="w-10 mx-2" />
              <img src={twitter} alt="twitter" className="w-10 mx-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-8">
        <p className="text-xl font-bold">DESCRIPTION</p>
        <div className="py-[1px] bg-black w-full my-2"></div>
        <p>{product.description}</p>
      </div>
      <div className="flex items-center my-4 mx-8 font-bold">
        <img src={guides} alt="guides" className="w-10" />
        <p>Guides of use</p>
      </div>
      <div className="my-10">
        <h1 className="xs:text-center font-bold sm:ml-14 mt-4">
          RELATED PRODUCTS
        </h1>
        <div className="grid grid-cols-3 xs:grid-cols-1 mx-10 xs:mx-2">
          {relatedProducts.map(() => (
            <ProductCard />
          ))}
        </div>
      </div>
    </div>
    )
  );
};

export default SingleProduct;
