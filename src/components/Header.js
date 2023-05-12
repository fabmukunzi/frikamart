import React, { useState } from 'react';
import searchIcon from '../assets/images/material-symbols_search.svg';
import compareProducts from '../assets/images/fluent_branch-compare-20-filled.png';
import wishList from '../assets/images/Vector (4).svg';
import account from '../assets/images/fluent-mdl2_profile-search.svg';
import cart from '../assets/images/ic_baseline-add-shopping-cart.svg';
import category from '../assets/images/bxs_category.svg';
import menu from '../assets/images/icons8-menu.svg';
import close from '../assets/images/icons8-close-120.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({ onCurrencyChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const navItems = [
    { name: `${t('Home')}`, path: '/' },
    { name: `${t('Stores')}`, path: '/stores' },
    { name: `${t('Made')} ${t('In')} AFRICA`, path: '/madeinafrica' },
    { name: `${t('Products')}`, path: '/products' },
    { name: `${t('Blog')}`, path: '/blog' },
    { name: `${t('Contact')}`, path: '/contact' },
  ];
  const others = [
    { name: `${t('Sell')} ${t('On')} AFRIKAMART`, path: '/sell' },
    { name: `${t('Be')} ${t('An')} ${t('Affliate')}`, path: '/affliate' },
    { name: `${t('Track')} ${t('Your')} ${t('Orders')}`, path: '/orders' },
  ];
  return (
    <div className="w-screen">
      <div className="top-nav flex justify-between bg-[#2C3E50] text-white">
        <h1 className="ml-6 xs:hidden">{t('paragraph')}</h1>
        <div className="flex mx-10 xs:hidden">
          <h1>{t('HOTLINE')}:(+250) 788 679 903</h1>
          <div className="pl-0.5 ml-3 mt-1 bg-white"></div>
          <select
            className="bg-inherit mx-4"
            onChange={(event) => changeLanguage(event.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>

          <select
            onChange={(event) => onCurrencyChange(event.target.value)}
            className="bg-inherit"
          >
            <option value="RWF">RWF</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>
      <div className="top-nav1 flex xs:flex-wrap justify-between xs:pb-14 bg-[#2C3E50] text-white text-sm py-4">
        <h1 className="md:text-xl md:ml-6 font-bold  text-lg xs:ml-4">
          FRIKAMART
        </h1>
        <div className="flex xs:absolute top-14">
          <img
            src={!showMenu ? menu : close}
            alt="menu"
            className="sm:hidden h-8 w-8 mx-6 invert"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
          <input
            type="search"
            placeholder={t('SearchProduct')}
            className="w-[35rem] text-black pl-3 xs:w-60 xs:ml-3 text-left rounded-md"
          />
          <span className="ml-[-38px] rounded-md">
            <img
              src={searchIcon}
              alt="search"
              className="bg-[#08F46C] rounded-md xs:h-8 xs:w-10 cursor-pointer"
            />
          </span>
        </div>
        <div className="flex xs:text-xs">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/compare')}
          >
            <img
              src={compareProducts}
              alt="compare"
              className="w-8 h-8 xs:w-6 xs:h-6 md:mx-3"
            />
            <span className="xs:hidden">
              {t('Compare')} <br /> {t('Product')}
            </span>
          </div>
          <div className="flex items-center mx-4 xs:mx-2 cursor-pointer"
          onClick={() => navigate('/wishlist')}
          >
            <img
              src={wishList}
              alt="compare"
              className="w-8 h-8 xs:w-6 xs:h-6 md:mx-3"
            />
            <span className="xs:hidden">
              {t('Favorite')} <br /> {t('Wishlist')}
            </span>
          </div>
          <div className="flex items-center mx-4 xs:mx-2">
            <img
              src={account}
              alt="compare"
              className="w-8 h-8 xs:w-6 xs:h-6 md:mx-3"
            />
            <span className="xs:hidden">
              {t('Login')} <br /> {t('my account')}
            </span>
          </div>
          <div
            className="flex items-center mx-4 xs:mx-2 cursor-pointer"
            onClick={() => navigate('/cart')}
          >
            <img
              src={cart}
              alt="compare"
              className="w-8 h-8 xs:w-6 xs:h-6 md:mx-3"
            />
            <p className="xs:hidden">
              <span className="bg-[#D9D9D9] px-5 text-black text-center">
                {' '}
                2 <br />
              </span>
              <span>$100.00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#678385] xs:hidden flex justify-around py-4 text-white font-semibold text-base items-center w-screen">
        <div className="flex w-1/10">
          <img src={category} alt="categories" className="w-8 h-8 mx-3" />
          <select className="bg-inherit">
            <option>{t('ShopByCategory')}</option>
            <option>{t('Shoes')}</option>
            <option>{t('Watches')}</option>
            <option>{t('Fashion')}</option>
          </select>
        </div>
        <div className="p-0.5 pb-10 bg-white"></div>
        <div className="main-nav overflow-scroll mx-2">
          <ul className="flex">
            {navItems.map((item) => (
              <li key={item.name} className="mx-2">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-0.5 pb-10 bg-white"></div>
        <div>
          <ul className="flex w-full">
            {others.map((item) => (
              <li key={item.name} className="mx-2">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showMenu && (
        <div className="bg-[#678385] absolute z-[1] sm:hidden text-center py-4 text-white font-normal text-lg items-center w-screen">
          <div className="block">
            <select className="bg-inherit pb-4">
              <option>{t('ShopByCategory')}</option>
              <option>{t('Shoes')}</option>
              <option>{t('Watches')}</option>
              <option>{t('Fashion')}</option>
            </select>
          </div>
          <div className="main-nav">
            <ul className="block">
              {navItems.map((item) => (
                <li key={item.name} className="pb-4">
                  <Link
                    to={item.path}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="block">
              {others.map((item) => (
                <li key={item.name} className="pb-4">
                  <Link
                    to={item.path}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <label>Select Language</label>
            <select
              className="bg-inherit mx-4"
              onChange={(event) => {
                changeLanguage(event.target.value)
                setShowMenu(false);
              }}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
            <label>Select Currency</label>
            <select
              onChange={(event) => {
                onCurrencyChange(event.target.value)
                setShowMenu(false);
              }}
              className="bg-inherit"
            >
              <option value="RWF">RWF</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
      )}
      <div className="bg-[#D9D9D9] py-4">
        <h1 className="uppercase text-xl font-bold text-center">{`${t('Home')}${
          location.pathname !== '/' ? `/ ${t(location.pathname?.split('/')[1])}` : ''
        }`}</h1>
      </div>
    </div>
  );
};

export default Header;
