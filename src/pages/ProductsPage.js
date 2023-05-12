import React, { useEffect, useState } from 'react';
import SideCard from '../components/SideCard';
import ProductCard from '../components/product/ProductCard';
import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';
import { getAllProducts } from '../features/products/getProducts';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';

const ProductsPage = () => {
  const [showSub, setShowSub] = useState(false);
  const [showSub1, setShowSub1] = useState(false);
  const { t } = useTranslation();
  const categories = [
    {
      name: 'Clothes',
      subCategories: ['Men clothes', 'Women clothes', 'Kids clothes'],
    },
    {
      name: 'Clothes',
      subCategories: ['Men clothes', 'Women clothes', 'Kids clothes'],
    },
    {
      name: 'Clothes',
      subCategories: ['Men clothes', 'Women clothes', 'Kids clothes'],
    },
    {
      name: 'Clothes',
      subCategories: ['Men clothes', 'Women clothes', 'Kids clothes'],
    },
  ];
  const brands = [
    { name: 'Nike' },
    { name: 'Adidas' },
    { name: 'Gucci' },
    { name: 'Nike' },
    { name: 'Adidas' },
    { name: 'Gucci1' },
  ];
  const colors = [];
  for (let i = 0; i < 10; i++) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    colors.push(`rgb(${r},${g},${b})`);
  }
  const tags = [
    'headphone',
    'electronics',
    'shoes',
    'headphone',
    'electronics',
    'shoes',
    'headphone',
    'electronics',
    'shoes',
  ];
  const dispatch=useDispatch();
  const [setCurrentAmount, convertedAmount,currency] = useOutletContext();
  useEffect(()=>{
    dispatch(getAllProducts())
  },[dispatch])
  const {products,isLoading}=useSelector((state)=>state.allProducts);
  return (
    <div className="my-10 w-full flex xs:flex-wrap justify-around">
      <div className="w-1/4 xs:w-full xs:mx-2">
        <SideCard categories={categories} header={t('ShopByCategory')} />
        <SideCard categories={brands} header={t('ByBrands')} />
        <div className="bg-white w-4/5 mx-auto rounded-lg mt-5 px-4">
          <h1
            className="font-bold text-lg pt-3 xs:py-3"
            onClick={() => setShowSub(!showSub)}
          >
            {t('FilterBy')}
            <span className="ml-4 md:hidden">{showSub ? '-' : '+'}</span>
          </h1>
          <div className={showSub ? '' : 'xs:hidden'}>
            <p className="font-bold my-2">{t('Availability')}</p>
            <input type="checkbox" className="w-10" />
            {t('InStock')}
            <br />
            <input type="checkbox" className="w-10" />
            {t('OutOfStock')}
          </div>
          <div className={`${showSub ? '' : 'xs:hidden'} "my-3"`}>
            <p className="font-bold">Price</p>
            <label htmlFor="low">Low</label>
            <input
              type="number"
              name="low"
              className="bg-slate-300 w-1/4 mx-4"
            />
            <label htmlFor="high">High</label>
            <input
              type="number"
              name="high"
              className="bg-slate-300 w-1/4 mx-2"
            />
          </div>
          <div className={showSub ? '' : 'xs:hidden'}>
            <p className="font-bold">By color</p>
            <div className="grid grid-cols-5">
              {colors.map((color) => (
                <div
                  className={'bg-black m-3 p-3 rounded-full w-10 h-10'}
                ></div>
              ))}
            </div>
          </div>
          <div className={`${showSub ? '' : 'xs:hidden'} 'mt-4 pb-4'`}>
            <p className="font-bold">By size</p>
            <input
              type="number"
              placeholder="Your size"
              className="border border-black rounded-md p-1 mt-2"
            />
          </div>
        </div>
        <div className="bg-white w-4/5 xs:py-3 xs:my-4 mx-auto rounded-lg md:mt-5 px-6">
          <p
            className="font-bold text-lg md:pt-3"
            onClick={() => setShowSub1(!showSub1)}
          >
            By Product Tag
            <span className="ml-4 md:hidden">{showSub1 ? '-' : '+'}</span>
          </p>
          <div
            className={`${
              showSub1 ? '' : 'xs:hidden'
            } " grid grid-cols-3 gap-3 py-6 xs:py-12"`}
          >
            {tags.map((tag) => (
              <div className="cursor-pointer text-xs py-2 bg-slate-300 rounded-md px-2">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-3/4 xs:w-screen md:mx-4">
        <div className="bg-white xs:mx-10 xs:pl-3 rounded-md md:px-3">
          <label htmlFor="name">Sort by:</label>
          <select name="order" className="bg-gray-400 py-2 my-2 mx-3">
            <option>Best selling</option>
            <option>Featured Products</option>
            <option>Recommended Products</option>
          </select>
        </div>
        {isLoading?<Loader />:(
        <><div className="grid sm:grid-cols-3 xs:grid-cols-1 w-full">
            {products.map((product) => {
              return (
                <ProductCard
                  setCurrentAmount={setCurrentAmount}
                  convertedAmount={convertedAmount}
                  product={product}
                  currency={currency}
                  key={product.id} //
                />
              );
            }
            )}
          </div><div className="md:w-full flex justify-between py-3 bg-white rounded-md xs:px-6 xs:mx-6 px-3">
              <p>Showing 1 of 2</p>
              <p>{'>'}</p>
            </div></>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
