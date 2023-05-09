import React from 'react';
import Slider from '../components/Slider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import nike from '../assets/images/nike_shoes_website_landing_page-removebg-preview 1.svg';
import dress from '../assets/images/fxemoji_dress.svg';
import { responsive } from '../utils/slider';
import ProductCard from '../components/product/ProductCard';
import phone from '../assets/images/IMG_0031-removebg-preview 1.svg';

const data = [
  {
    description:
      'from enjoy the best of nike shoe .with nike anything is possible',
    image: nike,
  },
  { description: 'This is new', image: phone },
];
const HomePage = () => {
  const categories = [
    { name: 'DRESSES', image: dress },
    { name: 'SHORTS', image: dress },
    { name: 'GLASSES AND LENS', image: dress },
    { name: 'JEANS', image: dress },
    { name: 'ELECTRONICS', image: dress },
    { name: 'CLOTHES', image: dress },
  ];
  const trends=[
    { name: 'DRESSES', image: dress },
    { name: 'SHORTS', image: dress },
    { name: 'GLASSES AND LENS', image: dress },
    { name: 'JEANS', image: dress },
    { name: 'CLOTHES', image: dress },
    { name: 'CLOTHES', image: dress },
    { name: 'CLOTHES', image: dress },
    { name: 'CLOTHES', image: dress },
    { name: 'CLOTHES', image: dress },
    { name: 'CLOTHES', image: dress },
  ];

  return (
    <div>
      <div className="flex xs:flex-col justify-around">
        <div className=" w-2/3 xs:w-screen bg-[#9DEDF0]">
          <Slider data={data} />
        </div>
        <div className="w-1/3 sm:px-6 xs:w-screen">
          <div className="w-full flex items-center justify-around px-4 text-xl h-48 xs:mt-6 bg-[#F57BCC]">
            <div>
              <p>
                from enjoy the best of nike shoe .with nike anything is possible
              </p>
              <button className="bg-[#08F46C] w-28 py-3 text-sm rounded-md shadow-md mt-4 shadow-black">
                BUY NOW
              </button>
            </div>
            <div className="w-full">
              <img src={nike} alt="sideImage" className="object-cover w-24" />
            </div>
          </div>
          <div className="w-full flex items-center justify-around px-4 text-xl h-48 bg-[#F57BCC] mt-6">
            <div>
              <p>
                from enjoy the best of nike shoe .with nike anything is possible
              </p>
              <button className="bg-[#08F46C] w-28 py-3 text-sm rounded-md shadow-md mt-4 shadow-black">
                BUY NOW
              </button>
            </div>
            <div className="w-full">
              <img src={nike} alt="sideImage" className="object-cover w-24" />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-container transition-opacity duration-500 opacity-100 my-8 mx-8">
        <h1 className="font-bold text-[#678385] sm:ml-4 xs:text-center mb-2">
          POPULAR CATEGORIES
        </h1>
        <Carousel
          swipeable={false}
          draggable={false}
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
          {categories.map((cat) => (
            <div className="flex w-4/5 mx-4 rounded-md border border-slate-300 px-2 py-1">
              <img
              key={cat.image}
                src={cat.image}
                alt="dress"
                className="w-10 mx-1 bg-[#678385] h-10 mt-1"
              />
              <div>
                <p className="uppercase">{cat.name}</p>
                <a href="." className="text-green-500">
                  SHOW ALL
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="grid grid-cols-3 xs:grid-cols-1 mx-10 xs:mx-2">
        {categories.map(() => (
          <ProductCard />
        ))}
      </div>
      <div>
        <p className='font-bold text-lg my-4 xs:text-center sm:ml-14'>Trending Categories</p>
        <div className='grid grid-cols-5 xs:grid-cols-2 gap-6  py-4 bg-white my-8 mx-14 xs:mx-2 xs:px-2 sm:px-6 rounded-md border border-gray-200'>
        {trends.map((cat) => (
            <div className="flex w-4/5 xs:w-full justify-between items-center sm:mx-6 rounded-md border  px-2 py-1 shadow-lg">
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
        <h1 className='xs:text-center font-bold sm:ml-14'>FEATURED PRODUCTS</h1>
      <div className="grid grid-cols-3 xs:grid-cols-1 mx-10 xs:mx-2">
        {categories.map((cat) => (
          <ProductCard />
        ))}
      </div>
      </div>
    </div>
  );
};

export default HomePage;
