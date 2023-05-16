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

const HomePage = ({ ...props }) => {
  const [searchProducts, setCurrentAmount, convertedAmount, currency] = useOutletContext();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data,isLoading } = useSelector((state) => state.homeData);
  useEffect(() => {
    dispatch(homeData());
  }, [dispatch]);
  const sideData=data?data?.Head?.Section_001?.More:[]
  const categories = data?data?.Category?.Popular:[]
  const navigate=useNavigate();
  const trends = data?data?.Category?.Latest:[]

  return (isLoading?<Loader />:(
    <div>
    <div className="flex xs:flex-col justify-around">
      <div className=" w-2/3 xs:w-screen bg-[#9DEDF0]">
        <Slider data={data?.Head?.Section_001?.Slider} />
      </div>
      <div className="w-1/3 sm:px-6 xs:w-screen">
        {sideData?.map((data,i)=>(
          <div key={i} className="w-full flex my-3 items-center justify-around px-4 text-xl h-48 xs:mt-6 bg-[#F57BCC]">
          <div>
            <p>
              {data.decription}
            </p>
            <button onClick={()=>navigate(`/products/${data.uid}`)} className="bg-[#08F46C] w-28 py-3 text-sm rounded-md shadow-md mt-4 shadow-black">
              {t('BuyNow')}
            </button>
          </div>
          <div className="w-full">
            <img src={data.image} alt="sideImage" className="object-cover" />
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
        {categories?.map((category,i) => (
          <div key={i} className="flex w-4/5 mx-4 rounded-md border border-slate-300 px-2 py-1">
            <img
              key={category?.image}
              src={category?.image}
              alt="dress"
              className="w-10 mx-1 bg-[#678385] h-10 mt-1"
            />
            <div>
              <p className="uppercase">{category?.name}</p>
              <a href="." className="text-green-500">
                {t('ShowAll')}
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
    <div className="grid grid-cols-3 xs:grid-cols-1 mx-10 xs:mx-2">
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
        {trends?.map((cat,i) => (
          <div key={i} className="flex w-4/5 xs:w-full justify-between items-center sm:mx-6 rounded-md border  px-2 py-1 shadow-lg">
            <div>
              <p className="uppercase w-auto">{cat.name}</p>
            </div>
            <img
              key={cat.image}
              src={cat.image}
              alt="dress"
              className="w-10 mx-1 bg-[#678385] h-10 mt-1"
            />
          </div>
        ))}
      </div>
    </div>
    <div>
      <h1 className="xs:text-center font-bold sm:ml-14">
        {t('LatestProducts')}
      </h1>
      <div className="grid grid-cols-3 xs:grid-cols-1 mx-10 xs:mx-2">
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
  </div>
  ));
};

export default HomePage;