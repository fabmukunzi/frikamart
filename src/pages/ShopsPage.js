import React, { useEffect } from 'react';
import ShopCard from '../components/shops/ShopCard';
import searchIcon from '../assets/images/material-symbols_search.svg';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStores } from '../features/stores/getAll';
import Loader from '../components/Loader';
import { Slide } from 'react-awesome-reveal';

const ShopsPage = () => {
  const { t } = useTranslation();
  const { stores, isLoading } = useSelector((state) => state.stores);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStores());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Slide triggerOnce className="my-6">
          <div className="relative py-3 hidden">
            <input
              type="search"
              placeholder={t('SearchProduct')}
              className="w-[35rem] xs:w-full ml-20 xs:py-2 text-black pl-3 xs:ml-3 rounded-md"
            />
            <img
              src={searchIcon}
              alt="search"
              className="relative right-14 xs:top-1 xs:h-8 xs:w-10 cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-3 xs:grid-cols-1 xs:gap-10 gap-20 mx-3 md:mx-20">
            {stores?.map((store) => (
              <ShopCard data={store} />
            ))}
          </div>
        </Slide>
      )}
    </>
  );
};

export default ShopsPage;
