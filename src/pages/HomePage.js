import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/slider';
import ProductCard from '../components/product/ProductCard';
import { useTranslation } from 'react-i18next';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { homeData } from '../features/home/getHome';
import Loader from '../components/Loader';
import { Slide } from 'react-awesome-reveal';

const HomePage = ({ ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [setCurrentAmount, convertedAmount, currency] = useOutletContext();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.homeData);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(homeData());
  }, [dispatch]);
  const sideData = data ? data?.Head?.Sections_001?.More : [];
  const categories = data ? data?.Category?.Popular : [];
  const trends = data ? data?.Category?.Latest : [];

  return isLoading ? (
    <Loader />
  ) : (
    <Slide>
      <div className="flex xs:flex-col justify-around">
        <div className="rounded-md shadow-md  my-3 lg:mx-2 shadow-[#415871] w-2/3 xs:w-[95%] xs:rounded-xl mx-auto">
          <Slider data={data?.Head?.Sections_001?.Slider} />
        </div>
        <div className="w-1/3 sm:px-6 xs:hidden">
          {sideData?.map((data, i) => (
            <div
              key={i}
              className="w-full flex my-6 items-center justify-around px-4 text-lg h-48 xs:mt-6 bg-[#415871]"
            >
              <div className='w-1/2'>
                <p className="mr-3 text-white h-28 overflow-hidden">
                  {data.title}
                </p>
                <button
                  onClick={() => navigate(`/products/${data.uid}`)}
                  className="bg-[#08F46C] w-28 py-3 text-sm rounded-md shadow-md mt-4 shadow-black"
                >
                  {t('BuyNow')}
                </button>
              </div>
              <div className="w-1/2">
                <img
                  src={data.image}
                  alt="sideImage"
                  className="object-contain h-44 md:ml-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-container transition-opacity duration-500 opacity-100 my-8 mx-8">
        <h1 className="font-bold text-[#678385] sm:ml-4 xs:text-center mb-2">
          {t('PopularCategories')}
        </h1>
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          keyBoardControl={true}
          customTransition="opacity"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          itemClass="carousel-item-padding-40-px"
        >
          {categories?.map((category, i) => (
            <div
              key={i}
              className="flex items-center w-[96%] mx-4 rounded-md border border-slate-300 px-2 py-1"
            >
              <img
                key={category?.image}
                src={category?.image}
                alt="dress"
                className="w-10 mx-1 bg-[#678385] h-10 mt-1"
              />
              <div>
                <p
                  onClick={() => navigate(`/search/${category?.category_id}`)}
                  className="uppercase cursor-pointer text-xs w-full"
                >
                  {category?.category_name}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="grid md:grid-cols-5 xs:grid-cols-2 mx-4 xs:mx-2 xs:gap-1">
        {data?.Products?.Popular?.map((product) => (
          <ProductCard
            setCurrentAmount={setCurrentAmount}
            convertedAmount={convertedAmount}
            product={product}
            currency={currency}
            key={product.id} //
          />
        ))}
      </div>
      <div>
        <p className="font-bold text-lg my-4 xs:text-center sm:ml-14">
          {t('LatestCategories')}
        </p>
        <div className="grid grid-cols-5 xs:grid-cols-2 gap-6  py-4 bg-white my-8 mx-14 xs:mx-2 xs:px-2 sm:px-6 rounded-md border border-gray-200">
          {trends?.map((cat, i) => (
            <div
              key={i}
              onClick={() => navigate(`/search/${cat?.category_id}`)}
              className="flex w-full items-center justify-between shadow-lg border px-4 cursor-pointer"
            >
              <div>
                <p className="uppercase text-sm w-auto">{cat.category_name}</p>
              </div>
              <img
                key={i}
                src={cat.image}
                alt="dress"
                className="w-10 mx-1 bg-[#678385] h-10 mt-1"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="xs:text-center font-bold sm:ml-14">{t('LatestProducts')}</h1>
        <div className="grid md:grid-cols-5 xs:gap-1 mx-4 xs:mx-2 xs:grid-cols-2">
          {data?.Products?.Latest?.map((product) => (
            <ProductCard
              setCurrentAmount={setCurrentAmount}
              convertedAmount={convertedAmount}
              product={product}
              currency={currency}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default HomePage;
