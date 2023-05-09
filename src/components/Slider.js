import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { mainResponsive } from '../utils/slider';

export default function Slider({ ...props }) {
  const dataSlider = props?.data;
  //   const descs = props?.data.map((item) => item.description);
  //   const [slideIndex, setSlideIndex] = useState(0);
  //   useEffect(() => {
  //     setInterval(() => {
  //       nextSlide();
  //     }, 3000);
  //   });
  //   const nextSlide = () => {
  //     if (slideIndex !== dataSlider.length - 1) {
  //       setSlideIndex(slideIndex + 1);
  //     } else if (slideIndex === dataSlider.length - 1) {
  //       setSlideIndex(0);
  //     }
  //   };

  //   const prevSlide = () => {
  //     if (slideIndex !== 0) {
  //       setSlideIndex(slideIndex);
  //     } else if (slideIndex === 0) {
  //       setSlideIndex(dataSlider.length - 1);
  //     }
  //   };
  return (
    <div className="container-slider ">
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={mainResponsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="carousel-item-padding-40-px"
      >
        {dataSlider.map((cat) => (
          <div className="flex px-2 py-4 justify-between">
            <div className="sm:w-40 sm:ml-10 xs:ml-3 my-auto">
              <p className="uppercase">{cat.description}</p>
              <button className="bg-[#08F46C] hover:invert px-8 py-2 text-lg rounded-md shadow-md mt-4 shadow-black absolute bottom-10">
                BUY NOW
              </button>
            </div>
            <img
            key={cat.images}
              src={cat.image}
              alt="dress"
              className="w-80 xs:w-40 mr-5 mt-10"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
