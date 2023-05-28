import React from 'react';
import loader from '../assets/images/loader.svg';

const Loader = ( props ) => (
  <div className="flex justify-center py-[18rem]" { ...props }>
    <img src={loader} alt="Loader Spinner" className="text-green-500 animate-spin w-[30px] text-center" />
  </div>
);

export default Loader;