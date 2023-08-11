import React from 'react';
import CompareCard from '../components/product/CompareCard';
import { useSelector } from 'react-redux';
import { Slide } from 'react-awesome-reveal';

const ComparePage = () => {
    const {products} =useSelector((state)=>state.compareProducts)
  return (
    <Slide triggerOnce className='grid grid-cols-3 xs:grid-cols-1 gap-10 place-items-center'>
      {products.length>0?(products.map((product) => (
        <CompareCard product={product} />
      ))):(
            <h1 className='text-center text-2xl py-20'>No products to compare</h1>
      )}
    </Slide>
  );
};

export default ComparePage;
