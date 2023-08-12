/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import searchIcon from '../assets/images/material-symbols_search.svg';
import { useTranslation } from 'react-i18next';
import ProductCard from '../components/product/ProductCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleStore } from '../features/stores/getSingle';
import { Slide } from 'react-awesome-reveal';

const SingleShop = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { store,products } = useSelector((state) => state.store.store);
  useEffect(() => {
    dispatch(getSingleStore({ id: id }));
  }, [dispatch, id]);
  return (
    <Slide triggerOnce className="mx-2">
      <div className="flex xs:flex-col xs:w-full mx-auto font-bold justify-end bg-[#D9D9D9] w-2/3 my-6">
        <img
          src={store?.config_logo}
          alt="image0"
          className="w-[25rem] object-contain"
        />
        <div className="px-4 py-3 bg-white w-2/3 xs:w-full">
          <div className="flex items-center justify-between">
            <div className="">
              <h1>{store?.store_name}</h1>
              <h1 className="my-2 text-blue-900 w-full">{store?.rank}</h1>
            </div>
            <div className="flex py-2 xs:mb-16">
              <p>Domain:</p>
              <a href="#" className="text-blue-900 ml-3">
                {store?.config_url}
              </a>
            </div>
          </div>
          <p className="my-2">{store?.config_meta_description}</p>
        </div>
      </div>
      <div className="flex xs:w-full justify-between rounded-lg md:mx-10 px-3 my-6 items-center bg-[#D9D9D9]">
        <h1 className="font-bold xs:text-base text-lg">PRODUCTS</h1>
        <div className="relative flex py-3">
          <input
            type="search"
            placeholder={t('SearchProduct')}
            className="w-[35rem] xs:w-full ml-20 xs:py-2 text-black pl-3 xs:ml-3 rounded-md"
          />
          <img
            src={searchIcon}
            alt="search"
            className="relative right-14 xs:top-1 xs:h-8 xs:w-10 cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 xs:grid-cols-1 justify-center">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </Slide>
  );
};

export default SingleShop;
