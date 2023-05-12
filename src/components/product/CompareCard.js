import React from 'react';
import close from '../../assets/images/icons8-close-120.png';
import { removeProduct } from '../../features/products/compareProducts';
import { useDispatch } from 'react-redux';

const CompareCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col bg-white my-4 py-4 w-4/5 px-4 relative">
      <img
        src={close}
        alt="close"
        className="absolute w-7 right-1 top-1 cursor-pointer"
        onClick={() => {
          dispatch(removeProduct(product.uid));
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
      <div className="border-b border-black w-full flex items-center justify-between py-4 my-2">
        <h1 className="text-lg font-bold">{product.price}</h1>
      </div>
      <div className="border-b border-black w-full flex items-center justify-between py-4 my-2">
        <h1 className="text-lg font-bold">Category</h1>
        <p>Watches</p>
      </div>
      <div className="border-b border-black w-full flex items-center justify-between py-4 my-2">
        <h1 className="text-lg font-bold">Sku</h1>
        <p>400000</p>
      </div>
      <div className="border-b border-black w-full flex items-center justify-between py-4 my-2">
        <h1 className="text-lg font-bold">Availability</h1>
        <p>In Stock</p>
      </div>
      <div className="border-b border-black w-full flex items-center justify-between py-4 my-2">
        <h1 className="text-lg font-bold">Color</h1>
        <div className="flex justify-between py-4">
          <div className="bg-blue-700 p-4 rounded-full mx-1"></div>
          <div className="bg-red-600 p-4 rounded-full mx-1"></div>
          <div className="bg-green-500 p-4 rounded-full mx-1"></div>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <h1 className="text-lg font-bold">Size</h1>
        <div className="flex gap-4">
          <p className="">S</p>
          <p className="">M</p>
          <p className="">L</p>
        </div>
      </div>
    </div>
  );
};

export default CompareCard;
