/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../features/products/category';
import { useNavigate } from 'react-router-dom';
import { searchProducts } from '../features/products/Search';

const Categories = ({ onSearch, scale }) => {
  const [show, setShow] = useState(false);
  const { products } = useSelector((state) => state.searchProducts);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.screen.width > 500) navigate('/products');
      else navigate('/categories');
    });
    dispatch(getCategories());
  }, [dispatch, window.onresize]);

  useEffect(() => {
    setShow(false);
  }, [scale]);

  const [showSubCategory, setShowSubCategory] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [showSubSubCategory, setShowSubSubCategory] = useState(false);
  const [currentSubCategory, setCurrentSubCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    if (currentCategory === categoryId) {
      setShowSubCategory(!showSubCategory);
    } else {
      setShowSubCategory(true);
    }
    setCurrentCategory(categoryId);
  };

  const handleSubCategoryClick = (subcategoryId) => {
    if (currentSubCategory === subcategoryId) {
      setShowSubSubCategory(!showSubSubCategory);
    } else {
      setShowSubSubCategory(true);
    }
    setCurrentSubCategory(subcategoryId);
  };
  useEffect(() => {
    if (products && products.length !== 0 && products !== '') {
      setShow(false)
      onSearch(products);
    }
  }, [dispatch, products, scale, onSearch]);

  return (
    <div
    // onMouseLeave={()=>setShow(false)}
      className={`${
        scale
          ? 'md:-translate-y-[3.7rem]'
          : 'opacity-0 -translate-y-[3.7rem] xs:hidden -translate-x-[100%]'
      } ${
        show
          ? 'opacity-0 -translate-y-[3.7rem] xs:hidden -translate-x-[100%]'
          : 'md:-translate-y-[3.7rem]'
      } w-full transition duration-500 transform md:w-1/4 md:absolute bg-white h-fit bg- z-[999] text-xl font-poppins`}
    >
      <ul>
        {categories?.map((category) => (
          <li key={category.uid} className="">
            <div className="flex hover:bg-[#D9D9D9] flex-row-reverse border-b w-full  justify-between px-4 items-center">
              <span
                className="py-2 cursor-pointer"
                onClick={() => handleCategoryClick(category.uid)}
              >
                {category.subCategories.length > 0
                  ? showSubCategory && currentCategory === category.uid
                    ? '-'
                    : '+'
                  : ''}
              </span>
              <span
                className="py-2 cursor-pointer"
                onClick={() => {
                  setShow(true)
                  dispatch(searchProducts({ product: category.category_name }));
                }}
              >
                {category.category_name}
              </span>
            </div>
            <ul
              className={
                showSubCategory && currentCategory === category.uid
                  ? ''
                  : 'hidden'
              }
            >
              {category.subCategories?.map((subcategory) => (
                <li key={subcategory.category_name} className="">
                  <div className="flex hover:bg-[#D9D9D9] border-b w-full flex-row-reverse justify-between px-4 items-center">
                    <span
                      className="py-2 cursor-pointer text-xl"
                      onClick={() => handleSubCategoryClick(subcategory.uid)}
                    >
                      {subcategory.subCategories?.length > 0
                        ? showSubSubCategory &&
                          currentSubCategory === subcategory.uid
                          ? '-'
                          : '+'
                        : ''}
                    </span>
                    <span className="py-2 text-lg cursor-pointer" onClick={() => {
                  setShow(true)
                  dispatch(searchProducts({ product: subcategory.category_name }));
                }}>
                      {subcategory.category_name}
                    </span>
                  </div>
                  <ul
                    className={
                      showSubSubCategory &&
                      currentSubCategory === subcategory.uid
                        ? ''
                        : 'hidden'
                    }
                  >
                    {subcategory.subCategories?.map((subsubcategory) => (
                      <li
                        key={subsubcategory.category_name}
                        className="border-b hover:bg-[#D9D9D9] cursor-pointer w-full px-4 py-2"
                        onClick={() => {
                          setShow(true)
                          dispatch(searchProducts({ product: subsubcategory.category_name }));
                        }}>
                        {subsubcategory.category_name}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
