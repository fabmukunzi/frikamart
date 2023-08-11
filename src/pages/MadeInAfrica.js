import React, { useState } from 'react';
import rwanda from '../assets/images/Rectangle 14571.png';
import guinea from '../assets/images/Rectangle 14572.png';
import canada from '../assets/images/Rectangle 14573.png';
import usa from '../assets/images/Rectangle 14574.png';
import togo from '../assets/images/Rectangle 14575.png';
import ProductCard from '../components/product/ProductCard';
import { useOutletContext } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

const MadeInAfrica = () => {
  const [setCurrentAmount, convertedAmount, currency] = useOutletContext();
  const [country, setCountry] = useState('Rwanda');
  const product = {
    uid: '03cd6d20-be42-4b47-949e-22dc0006d154',
    slug: '',
    title: 'Rustic Fresh Shoes',
    rating: 0,
    price: 'RWF 30000',
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    attributes: [
      {
        name: 'Color',
        type: 'color',
        value: [
          {
            name: '#00a0d7',
            imgsrc: '',
          },
          {
            name: '#f3f3f3',
            imgsrc: '',
          },
        ],
      },
      {
        name: 'Size',
        type: 'toggle',
        value: [
          {
            name: 'XL',
            imgsrc: '',
          },
          {
            name: 'XXL',
            imgsrc: '',
          },
        ],
      },
    ],
    brand: '',
    category: 'cat0012',
    discounts: [
      {
        amount: 0,
        end_to: '2023-06-07T07:19:35.247Z',
        start_from: '2023-06-07T07:19:35.247Z',
      },
      {
        amount: 0,
        end_to: '2023-06-07T07:19:35.247Z',
        start_from: '2023-06-07T07:19:35.247Z',
      },
    ],
    image: 'https://loremflickr.com/640/480/product?lock=5191200246071296',
    in_stock: 8529,
    more_imgs: [
      'https://loremflickr.com/640/480/product?lock=961219548676096',
      'https://loremflickr.com/640/480/product?lock=968653954613248',
    ],
    SKU: 'TEST/test/test',
  };
  return (
    <Slide>
      <div className="flex xs:gap-3 gap-10 my-4 md:ml-24 xs:mx-2 xs:justify-center">
        <div className="cursor-pointer" onClick={() => setCountry('Rwanda')}>
          <img src={rwanda} alt="" />
          <p>Rwanda</p>
        </div>
        <div className="cursor-pointer" onClick={() => setCountry('Guinea')}>
          <img src={guinea} alt="" />
          <p>Guinea</p>
        </div>
        <div className="cursor-pointer" onClick={() => setCountry('Canada')}>
          <img src={canada} alt="" />
          <p>Canada</p>
        </div>
        <div className="cursor-pointer" onClick={() => setCountry('USA')}>
          <img src={usa} alt="" />
          <p>USA</p>
        </div>
        <div className="cursor-pointer" onClick={() => setCountry('Togo')}>
          <img src={togo} alt="" />
          <p>Togo</p>
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-xl my-4">
          Made in {country}
        </h1>
      </div>
      <div className="grid grid-cols-5 xs:grid-cols-2">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <ProductCard
              setCurrentAmount={setCurrentAmount}
              convertedAmount={convertedAmount}
              product={product}
              currency={currency}
              key={index} //
            />
          ))}
      </div>
    </Slide>
  );
};

export default MadeInAfrica;
