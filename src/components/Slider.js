import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { mainResponsive } from '../utils/slider';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Slider({ ...props }) {
  const dataSlider = props?.data ? props?.data : [];
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="container-slider">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={mainResponsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="carousel-item-padding-40-px"
      >
        {dataSlider?.map((product) => (
          <div className="flex px-2 py-4 justify-between">
            <div className="sm:w-40 sm:ml-10 xs:ml-3 my-auto">
              <p className="uppercase text-white">{product?.title}</p>
              <button
                onClick={() => navigate(`/products/${product.uid}`)}
                className="bg-[#08F46C] hover:invert px-8 py-2 text-lg rounded-md shadow-md mt-4 shadow-black absolute bottom-10"
              >
                {t('BuyNow')}
              </button>
            </div>
            <div className="md:m-10">
              <img
                src={product?.image}
                alt="dress"
                className="xs:w-40 object-contain xs:h-40 w-80 h-80"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
