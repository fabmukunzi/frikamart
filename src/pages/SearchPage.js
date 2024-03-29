import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { searchProducts } from '../features/products/Search';
import Loader from '../components/Loader';
import { Slide } from 'react-awesome-reveal';

const SearchPage = () => {
  const { products, isLoading } = useSelector((state) => state.searchProducts);
  const { item } = useParams();
  const dispatch = useDispatch();
  const [setCurrentAmount, convertedAmount, currency] = useOutletContext();

  useEffect(() => {
    dispatch(searchProducts({ product: item }));
  }, [dispatch, item]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Slide triggerOnce className="grid grid-cols-4 mx-10 xs:grid-cols-1">
          {products.length > 0 ? (
            products.map((product) => {
              return (
                <ProductCard
                  setCurrentAmount={setCurrentAmount}
                  convertedAmount={convertedAmount}
                  product={product}
                  currency={currency}
                  key={product.uid} //
                />
              );
            })
          ) : (
            // <div className="md:w-full flex justify-between py-3 bg-white rounded-md xs:px-6 xs:mx-6 px-3">
            // <p>Showing 1 of 2</p>
            // <p>{'>'}</p>
            // </div>
            <h1 className="text-center my-32 ml-20 text-3xl">
              No products found
            </h1>
          )}
        </Slide>
      )}
    </>
  );
};

export default SearchPage;
