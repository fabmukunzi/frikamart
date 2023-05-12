import React from 'react';
import playstore from '../assets/images/Rectangle 98.jpg';
import appstore from '../assets/images/Rectangle 99.svg';
import facebook from '../assets/images/bi_facebook (1).svg';
import twitter from '../assets/images/tabler_brand-twitter-filled.svg';
import footer from '../assets/images/Group 1.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const about = [t('ContactUs'), t('Careers'), t('OurBlog'), t('Policy')];
  const safety = [
    t('FAQS'),
    t('YourSafety'),
    t('Delivery'),
    t('ReturnPolicy'),
    t('Services'),
  ];
  const digital = [t('FreeHosting'), t('YourOnlineShop'), t('API')];
  return (
    <div className="flex xs:flex-col xs:pl-4 font-poppins justify-around relative bottom-0 bg-[#2C3E50] w-screen text-white">
      <div className="mt-5">
        <h1 className="font-bold text-lg">FRIKAMART</h1>
        <p>
          <span className="text-green-500">An online store</span> for you
        </p>
        <div className="w-72 mt-3">
          <h2>{t('paragraphf')}</h2>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum
          </p>
        </div>
        <div className="flex items-center">
          <h1 className="font-bold mr-3">{t('DownloadApp')}</h1>
          <img
            src={playstore}
            alt="playstore"
            className="w-[100px] h-[30px] mr-3"
          />
          <img src={appstore} alt="appstore" className="w-[100px] h-[100px]" />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="font-bold">{t('SocialMedia')}</h1>
          <img src={facebook} alt="facebook" className="w-[100px] h-[30px]" />
          <img
            src={twitter}
            alt="twitter"
            className="w-[100px] h-[30px] -ml-8"
          />
        </div>
        <div className="my-10">
          <h1 className="mb-3">
            <span className="font-bold">{t('Electronics')}: </span>computer, television
            ,phones
          </h1>
          <h1 className="mb-3">
            <span className="font-bold">{t('Fashion')}: </span>gucci, luis vuiton
            ,calvin klein
          </h1>
          <h1 className="mb-3">
            <span className="font-bold">{t('Electronics')}: </span>computer,
            television, phones
          </h1>
        </div>
        <div className="xs:absolute bottom-0">
          <p>2023 frikamart. all rights reserved</p>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-lg">About us</h1>
        {about.map((item) => (
          <h2 className="sm:mt-3">{item}</h2>
        ))}
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-lg">Safety</h1>
        {safety.map((item) => (
          <h2 className="sm:mt-3">{item}</h2>
        ))}
      </div>
      <div className="mt-5 xs:mb-10">
        <h1 className="font-bold text-lg">Digital Product</h1>
        {digital.map((item) => (
          <h2 className="sm:mt-3">{item}</h2>
        ))}
      </div>
      <img
        src={footer}
        alt="footer"
        className="absolute bottom-0 object-fill right-0 w-[400px] h-[300px]"
      />
    </div>
  );
};

export default Footer;
