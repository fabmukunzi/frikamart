import React from 'react';
import phone from '../../assets/images/IMG_0031-removebg-preview 1.svg';
import phone0 from '../../assets/images/images-removebg-preview 1.svg';
import phone1 from '../../assets/images/PT_iPhone-14-Pro-removebg-preview 1.svg';
import rates from '../../assets/images/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-removebg-preview 1.svg';
import wish from '../../assets/images/material-symbols_heart-plus-outline.svg';
import compare from '../../assets/images/fluent_branch-compare-20-filled.svg';

const SingleProduct = ({ data }) => {
  const phones = [phone0, phone1, phone0, phone1];
  return (
    <div className='flex'>
      <div className="w-1/2 flex">
        <div className="grid grid-cols-2 gap-4">
          {phones.map((image) => (
            <img
              key={image}
              src={image}
              alt="phone"
              className="w-14 h-24 border border-black mx-3"
            />
          ))}
        </div>
        <div>
          <img key={phone} src={phone} alt="phone" className="w-80" />
        </div>
      </div>
      <div className="w-1/2 bg-pink-300">
        <div>
          <h1>iPhone | Power Mac Center</h1>
          <div className='flex items-center'>
            <h1>BRAND: IPHONE</h1>
            <img key={phone} src={rates} alt="phone" className="w-32 mx-4" />
          </div>
          <div className='py-[1px] bg-gray-300 w-1/2'></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
