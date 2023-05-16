import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import convertCurrency from '../utils/convertCurrency';

const ProductsLayout = () => {
    const [currentAmount, setCurrentAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState(currentAmount);
    const[currency,setCurrency]=useState('RWF')
    const [searchProducts,setProducts]=useState(null)
  
    const handleCurrencyChange = (currency) => {
      const converted = convertCurrency(currency, currentAmount);
      setCurrency(currency);
      setConvertedAmount(converted);
    };
  
    return (
      <div>
        <Header onSearch={setProducts} onCurrencyChange={handleCurrencyChange} />
        <Outlet context={[searchProducts,setCurrentAmount, convertedAmount,currency]} />
        <Footer />
      </div>
    );
  };

export default ProductsLayout;
