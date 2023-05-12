import React, { useState } from 'react';
import close from '../../assets/images/icons8-close-120.png';
import Model from '../Model';
import { useTranslation } from 'react-i18next';

const WishCard = () => {
    const [showModel, setShowModel] = useState(false);
    const { t } = useTranslation();
  const product = {
    uid: '20230513211528-12',
    title:
      'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    price: 'RWF 34200',
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    rate: '0',
    image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
  };
  return (
    <div className="flex flex-col bg-white my-4 py-4 xs:w-full w-1/4 px-4 relative">
              {showModel && (
        <Model
          showModel={showModel}
          title="Confirm to add item to cart"
          setShowModel={setShowModel}
          product={product}
        />
      )}
      <img
        src={close}
        alt="close"
        className="absolute w-7 right-1 top-1 cursor-pointer"
        onClick={() => {
          // dispatch(removeProduct(product.uid))
        }}
      />
      <div className="mx-8 shadow-md shadow-slate-300 p-6">
        <img
          src={product.image}
          alt="watch"
          className="w-[200px] h-[200px] mx-auto"
        />
      </div>
      <div className="border-b border-black w-full flex items-center justify-between py-4 my-2">
        <h1 className="text-lg font-bold">iPhone | {product.title}</h1>
      </div>
      <div className="w-full flex items-center justify-between my-2">
        <h1 className="text-lg font-bold">{product.price}</h1>
        <button
          className="bg-[#08F46C] w-fit px-8 py-2 text-lg rounded-md shadow-md mt-4 shadow-slate-500"
          onClick={() => {
            setShowModel(true);
          }}
        >
          {t('AddToCart')}
        </button> 
      </div>
    </div>
  );
};

export default WishCard;
