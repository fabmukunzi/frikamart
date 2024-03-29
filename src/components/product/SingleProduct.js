/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Model from '../Model';
import rate1 from '../../assets/images/star-svgrepo-com (2).svg';
import rate0 from '../../assets/images/star-svgrepo-com (1).svg';
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
import QuoteRequestForm from '../quoteModel';
import TextRenderer from '../textrender';
import Rating from '../Rating';
import { rating } from '../../features/products/rating';
import { showSuccessMessage } from '../../utils/toast';
import { Slide } from 'react-awesome-reveal';

const SingleProduct = () => {
  const { product, isLoading } = useSelector((state) => state.singleProduct);
  const [setCurrentAmount, convertedAmount, currency] = useOutletContext();
  const uid = product?.data?.uid;
  const [showModel, setShowModel] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [price, setPrice] = useState(product?.data?.price);
  const [currentImage, setCurrentImage] = useState(null);
  const { id } = useParams();
  const [cart, setCart] = useState({ uid: id, attributes: [] });
  const [bg, setBg] = useState(false);
  const [currentData, setCurrentData] = useState('desc');
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let rate = product?.data?.rating;
  const [ratingValue, setRatingValue] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (element, value) => {
    setRatingValue(parseInt(value, 10));
  };
  const extractTextFromHtml = (html) => {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = html;
    return temporaryElement.textContent;
  };  
  const textRender=extractTextFromHtml(product?.data?.description)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [dispatch]);
  const handleRequestQuote = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleSubmit = async () => {
    const review = { rating: ratingValue, description: feedback };
    const data = { uid: uid, ...review };
    try {
      const res =await dispatch(rating({ data })).unwrap();
      console.log(res,'jhggggfffdddd')
      setRatingValue(0);
      showSuccessMessage(res.msg)
    } catch (error) {
      console.log(error);
    }
  };
  const handleAttributeChange = (attribute, value) => {
    const isSelected = cart.attributes.some((attr) => attr.name === attribute);

    if (isSelected) {
      setCart((prevCart) => ({
        ...prevCart,
        attributes: prevCart.attributes.filter(
          (attr) => attr.name !== attribute
        ),
      }));
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        attributes: [...prevCart.attributes, { name: attribute, value }],
      }));
    }
  };
console.log(product?.data?.options?.Color?.values,'hello')
  useEffect(() => {
    dispatch(getSingleProduct({ productId: id }));
  }, [id]);
  return isLoading ? (
    <Loader />
  ) : (
    <Slide triggerOnce>
      <div className="grid grid-cols-2 xs:grid-cols-1 mx-10 justify-around xs:mx-auto mr-20 xs:w-full">
        {showModel && (
          <Model
            showModel={showModel}
            title="Confirm to add item to cart"
            setShowModel={setShowModel}
            product={product?.data}
            cart={cart}
          />
        )}
        <div className="flex flex-col-reverse xs:mt-4 items-center gap-2">
          <div className="grid grid-cols-2  gap-4">
            {product?.data?.more_imgs?.map((image) => (
              <img
                key={product?.data?.id}
                src={image}
                alt="phone"
                className="w-[11.5rem] h-fit xs:w-[9.5rem] xs:h-[7.19rem] object-contain border border-slate-400 md:mx-2"
              />
            ))}
          </div>
          <div>
            <img
              key={product?.data?.uid}
              src={currentImage ? currentImage : product?.data?.image}
              alt="phone"
              className="w-[25rem] xs:h-60 object-contain"
            />
          </div>
        </div>
        <div className="xs:mx-4">
          <div className="font-bold">
            <h1 className="text-xl mt-8">{product?.data?.title}</h1>
            <div className="flex items-center">
              <h1 className="my-2">
                BRAND: <span className="text-red-700">IPHONE</span>
              </h1>
              <div className="flex ml-4 my-2">
                {[...Array(5)].map((_, i) => {
                  if (rate > 0) {
                    rate--;
                    return (
                      <img
                        key={i}
                        src={rate1}
                        alt="phone"
                        className="w-6 mx-0.5"
                      />
                    );
                  }
                  return (
                    <img
                      key={i}
                      src={rate0}
                      alt="phone"
                      className="w-6 mx-0.5"
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <p className="flex items-center">
                <img src={store} alt="whatsapp" className="w-10 mx-2" />
                <a href="/" className="text-blue-900">
                  {product?.data?.store_name}
                </a>
              </p>
              <p className="text-xl my-2 text-red-600">
                {convertCurrency(currency, product?.data?.price)
                  ?.toString()
                  ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') ||
                  convertCurrency(currency, product?.price)
                    ?.toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                <del className="mx-6 text-slate-500 hidden">$700</del>
              </p>
              <div className="py-[1px] bg-gray-300 w-1/2 my-4"></div>
              <div>
                {product?.data?.options?.Color?.values?.map((attribute) => (
                  <div
                    className="flex my-4 text-sm font-bold"
                    key={attribute.name}
                  >
                    <p>{attribute.name}</p>
                    {attribute.type === 'color' &&
                      attribute.value?.map((v) => {
                        const isSelected = cart.attributes.some(
                          (attr) =>
                            attr.name === attribute.name &&
                            attr.value === v.name
                        );
                        return (
                          <div
                            style={{ backgroundColor: `${v.name}` }}
                            className={`z-[40] p-4 w-7 h-7 mx-2 rounded-full cursor-pointer ${
                              isSelected ? 'border-2 border-red-500' : ''
                            }`}
                            onClick={() => {
                              handleAttributeChange(attribute.name, v.name);
                            }}
                            key={v.name}
                          ></div>
                        );
                      })}
                    {attribute.type === 'toggle' &&
                      attribute.value?.map((v) => {
                        const isSelected = cart.attributes.some(
                          (attr) =>
                            attr.name === attribute.name &&
                            attr.value === v.name
                        );

                        return (
                          <div
                            onClick={() => {
                              handleAttributeChange(attribute.name, v.name);
                              setBg(v.name);
                              if (v.imgsrc !== '') setCurrentImage(v.imgsrc);
                            }}
                            className={`border mb-4 p-1 w-fit text-center py-0.5 mx-3 cursor-pointer ${
                              isSelected ? 'bg-[#678385]' : ''
                            }`}
                            key={v.name}
                          >
                            {v.name}
                          </div>
                        );
                      })}
                  </div>
                ))}

                <div className="font-semibold my-4">
                  <h1 className="text-green-800">IN STOCK</h1>
                  <p>
                    Quantity:{' '}
                    {product.in_stock === -1
                      ? 'INFINITY'
                      : product?.data?.in_stock}
                  </p>
                </div>
                <div className="items-center">
                  <div className="block">
                    {/* <div className="flex items-center">
                      <img src={wish} alt="phone" className="w-8 mr-4" />
                      <p className="w-full">{t('AddToWishlist')}</p>
                    </div> */}
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
                    className="bg-[#08F46C] px-8 py-2 text-md w-fit xs:p-4 rounded-md ml-1 shadow-md mt-4 shadow-slate-500"
                    onClick={() => {
                      setShowModel(true);
                    }}
                  >
                    {t('AddToCart')}
                  </button>
                  <button
                    onClick={handleRequestQuote}
                    className="bg-[#08F46C] px-8 py-2 text-md w-fit xs:p-4 rounded-md ml-1 shadow-md mt-4 shadow-slate-500"
                  >
                    REQUEST QUOTE
                  </button>
                  {showForm && (
                    <div className="fixed bg-[#35343435] flex justify-center items-center inset-0 z-50">
                      <QuoteRequestForm onClose={handleCloseForm} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 mx-auto">
          <YoutubeEmbed embedId="WhWc3b3KhnY" />
        </div>
        <div className="text-base mx-2">
          <p className="my-3">SKU-: {product?.data?.SKU}</p>
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
      <div className="mx-8 xs:mx-4">
        <div className="flex justify-start">
          <p
            className="text-lg font-bold cursor-pointer"
            onClick={() => setCurrentData('desc')}
          >
            DESCRIPTION
          </p>
          <p
            className="text-lg font-bold cursor-pointer mx-32 xs:mx-10"
            onClick={() => setCurrentData('reviews')}
          >
            REVIEWS
          </p>
          <p
            className="text-lg font-bold cursor-pointer"
            onClick={() => setCurrentData('faqs')}
          >
            FAQS
          </p>
        </div>
        <div className="py-[1px] bg-black w-full my-2"></div>
        {currentData === 'desc' ? (
          <TextRenderer text={textRender}></TextRenderer>
        ) : (
          ''
        )}
        {currentData === 'reviews' ? (
          <div className="flex xs:flex-col justify-between gap-20">
            <div className="w-full">
              <p className="py-3 font-bold underline">
                {product?.data?.reviews?.length} Reviews
              </p>
              <div>
                {product?.data?.reviews?.map((review) => (
                  <div className="border">
                    <div className="text-lg font-bold bg-[#D9D9D9]">
                      Author: {review.author}
                    </div>
                    <p>{review.review_description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <p>Submit Your review</p>
              <p>your rating of this product</p>
              <Rating
                className="custom-rating"
                options={{
                  value: ratingValue,
                  onchange: handleRatingChange,
                  number: 5,
                }}
              />
              <textarea
                className="border-2 p-2 border-black rounded-md w-60 h-20"
                onChange={(event) => {
                  setFeedback(event.target.value)
                }}
              ></textarea><br />
              <button
                className="bg-[#08F46C] px-8 py-2 text-md w-fit  rounded-md ml-3 shadow-md shadow-slate-500"
                onClick={()=>handleSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex items-center my-4 mx-8 font-bold">
        <img src={guides} alt="guides" className="w-10" />
        <p>Guides of use</p>
      </div>
      <div className="my-10">
        {product?.similary?.data?.length > 0 && (
          <h1 className="xs:text-center font-bold sm:ml-14 mt-4">
            RELATED PRODUCTS
          </h1>
        )}
        <div className="grid grid-cols-5 xs:grid-cols-2 mx-10 xs:mx-2">
          {product?.similary?.data?.map((p) => (
            <ProductCard product={p} />
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default SingleProduct;
