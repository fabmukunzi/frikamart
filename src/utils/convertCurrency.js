import exchangeRates from "./exchangeRates";

const convertCurrency = (targetCurrency,amount) => {
 const  baseCurrency=amount?.split(' ')[0]
  const  price=amount?.split(' ')[1]
  if(baseCurrency&&price){
    if (baseCurrency === targetCurrency) {
      return `${targetCurrency} ${(price*1).toFixed(2)}`;
    }
    
    const rate = exchangeRates[baseCurrency][targetCurrency];
    
    if (rate) {
      return `${targetCurrency} ${(price * rate).toFixed(2)}`;
    }
  }
  return null;
};
export default convertCurrency;
