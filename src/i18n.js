import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      paragraph: 'Free shipping over $100 & free returns',
      Product: 'Product',
      HOTLINE: 'HOTLINE',
      Compare: 'compare',
      Favorite: 'Favorite',
      Wishlist: 'Wishlist',
      Login: 'Login',
      Account: 'my  account',
      ShopByCategory: 'ShOP BY CATEGORY',
      Shoes: 'Shoes',
      Watches: 'Watches',
      Home: 'HOME',
      Stores: 'STORES',
      Products: 'PRODUCTS',
      products: 'PRODUCTS',
      Blog: 'BLOG',
      Contact: 'CONTACT',
      Made: 'MADE',
      In: 'IN',
      Sell: 'SELL',
      On: 'ON',
      Be: 'BE',
      An: 'AN',
      Affliate: 'AFFLIATE',
      AddToCart: 'Add to Cart',
      ContactUs: 'Contact us',
      Careers: 'Careers',
      OurBlog: 'Our blog',
      Policy: 'Policy',
      FAQS: 'FAQS',
      YourSafety: 'Your safety',
      Delivery: 'Delivery',
      ReturnPolicy: 'Return policy',
      Services: 'Services',
      FreeHosting: 'Free hosting',
      YourOnlineShop: 'Your online shop',
      API: 'API',
      Electronics: 'Electronics',
      Fashion: 'Fashion',
      Computer: 'Computer',
      Television: 'Television',
      Phones: 'Phones',
      AboutUs: 'About us',
      Safety: 'Safety',
      DigitalProduct: 'Digital Product',
      DownloadApp: 'DOWNLOAD APP',
      paragraphf: 'Frikamart is an online store that has come to give',
      PopularCategories: 'POPULAR CATEGORIES',
      TrendingCategories: 'Trending Categories',
      FeaturedProducts: 'FEATURED PRODUCTS',
      AddToWishlist: 'add to wishlist',
      CompareProduct: 'compare product',
      BuyNow: 'BUY NOW',
      ShowAll: 'SHOW ALL',
      SocialMedia: 'SOCIAL MEDIA',
      ByBrands: 'BY BRANDS',
      FilterBy: 'FILTER BY',
      Availability: 'Availability',
      InStock: 'In stock',
      OutOfStock: 'Out of stock',
    },
  },
  sp: {
    translation: {
      paragraph:
        'react-i18next es un poderoso marco de internacionalización para React / React Native que se basa en i18next.',
    },
  },
  hn: {
    translation: {
      paragraph:
        'प्रतिक्रिया-i18next प्रतिक्रिया / प्रतिक्रिया मूल के लिए एक शक्तिशाली अंतर्राष्ट्रीयकरण ढांचा है जो i18next पर आधारित है।',
    },
  },

  fr: {
    translation: {
    paragraph: 'Livraison gratuite à partir de 100 $ et retours gratuits',
    Product: 'Produit',
    HOTLINE: 'Ligne directe',
    Compare: 'Comparer',
    Favorite: 'Favori',
    Wishlist: 'Liste de souhaits',
    Login: 'Connexion',
    Account: 'Mon compte',
    ShopByCategory: 'ACHETER PAR CATÉGORIE',
    Shoes: 'Chaussures',
    Watches: 'Montres',
    Home: 'ACCUEIL',
    Stores: 'MAGASINS',
    Products: 'PRODUITS',
    products: 'PRODUITS',
    Blog: 'BLOG',
    Contact: 'CONTACT',
    Made: 'FABRIQUÉ',
    In: 'EN',
    Sell: 'VENTE',
    On: 'SUR',
    Be: 'ÊTRE',
    An: 'UN',
    Affliate: 'AFFILIÉ',
    AddToCart: 'Ajouter au panier',
    ContactUs: 'Contactez-nous',
    Careers: 'Carrières',
    OurBlog: 'Notre blog',
    Policy: 'Politique',
    FAQS: 'FAQ',
    YourSafety: 'Votre sécurité',
    Delivery: 'Livraison',
    ReturnPolicy: 'Politique de retour',
    Services: 'Services',
    FreeHosting: 'Hébergement gratuit',
    YourOnlineShop: 'Votre boutique en ligne',
    API: 'API',
    Electronics: 'Électronique',
    Fashion: 'Mode',
    Computer: 'Ordinateur',
    Television: 'Télévision',
    Phones: 'Téléphones',
    AboutUs: 'À propos de nous',
    Safety: 'Sécurité',
    DigitalProduct: 'Produit numérique',
    DownloadApp: "TÉLÉCHARGER L'APPLICATION'",
    paragraphf: 'Frikamart est une boutique en ligne qui est là pour donner',
    PopularCategories: 'CATÉGORIES POPULAIRES',
    TrendingCategories: 'Catégories tendances',
    FeaturedProducts: 'PRODUITS EN VEDETTE',
    AddToWishlist: 'Ajouter à la liste de souhaits',
    CompareProduct: 'Comparer le produit',
    BuyNow: 'ACHETER MAINTENANT',
    ShowAll: 'TOUT AFFICHER',
    SocialMedia: 'MÉDIAS SOCIAUX',
    ByBrands: 'PAR MARQUES',
    FilterBy: 'FILTRER PAR',
    Availability: 'Disponibilité',
    InStock: 'En stock',
    OutOfStock: 'Rupture de stock',
    },
    },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
