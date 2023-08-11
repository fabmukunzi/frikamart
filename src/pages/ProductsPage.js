import React, { useEffect, useState } from 'react';
import SideCard from '../components/SideCard';
import ProductCard from '../components/product/ProductCard';
import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';
import { getAllProducts } from '../features/products/getProducts';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { Slide } from 'react-awesome-reveal';

const ProductsPage = () => {
  const [showSub, setShowSub] = useState(false);
  const [showSub1, setShowSub1] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });
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
  const dispatch = useDispatch();
  const [setCurrentAmount, convertedAmount, currency] = useOutletContext();
  useEffect(() => {
    dispatch(getAllProducts({ page: 0 }));
  }, [dispatch]);
  let { products, isLoading } = useSelector((state) => state.allProducts);
  let page, pages;
  if (products?.page) {
    pages = products?.page[1];
    page = products?.page[0];
  }
  // console.log(products?.page[1])
  // console.log(typeof([...products?.page]),'=========?')
  return (
    <Slide className="my-10 w-full flex xs:flex-wrap justify-around">
      {/* <div className="bg-gray-500 w-full mx-3 text-center mb-3 sm:hidden">
        Filter
      </div> */}
      {/* <div className="w-1/4 xs:w-full xs:mx-2">
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
      </div> */}
      <div className=" xs:w-screen md:mx-4">
        {/* <div className="bg-white xs:mx-10 xs:pl-3 rounded-md md:px-3">
          <label htmlFor="name">Sort by:</label>
          <select name="order" className="bg-gray-400 py-2 my-2 mx-3">
            <option>Best selling</option>
            <option>Featured Products</option>
            <option>Recommended Products</option>
          </select>
        </div> */}
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-5 xs:grid-cols-2 xs:gap-1 xs:mx-2">
            {products?.data?.length > 0 ? (
              products?.data?.map((product) => {
                return (
                  <ProductCard
                    setCurrentAmount={setCurrentAmount}
                    convertedAmount={convertedAmount}
                    product={product}
                    currency={currency}
                    key={product.uid}
                  />
                );
              })
            ) : (
              <h1 className="text-center my-32 ml-20 text-3xl">
                No products found
              </h1>
            )}
            {products&&(
              <div className="w-screen flex items-center -ml-[10rem] justify-end py-3 bg-white rounded-md xs:px-6 xs:mx-6 px-3">
              <CaretLeft
                onClick={() => {
                  dispatch(getAllProducts({ page: page - 1 }));
                }}
                className="cursor-pointer"
                size={32}
                weight="fill"
              />
              <p>
                Showing {page + 1} of {pages + 1}
              </p>
              <CaretRight
                className="cursor-pointer"
                onClick={() => {
                  dispatch(getAllProducts({ page: page + 1 }));
                }}
                size={32}
                weight="fill"
              />
            </div>
            )}
          </div>
        )}
      </div>
    </Slide>
  );
};

export default ProductsPage;
