import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../features/products/category';
import { Slide } from 'react-awesome-reveal';
const Categories = ({ scale, setScale }) => {
  const { categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    dispatch(getCategories())
  }, [dispatch])
  return (
    <div
      onMouseEnter={() => { setScale(true) }} onMouseLeave={() => { setScale(false) }}
      className={
        scale
          ? 'md:-translate-y-[3.7rem] w-full border-2 transition md:ml-10 md:mt-[3.7rem] duration-500 transform xs:w-full md:w-1/4 md:absolute bg-white text-green z-[999] h-fit text-xl font-poppins'
          : `opacity-0 -translate-y-[3.7rem] -translate-x-[100%] w-full border-2 transition md:ml-10 md:mt-[3.7rem] duration-500 transform xs:w-full md:w-1/4 md:absolute bg-white text-green z-[999] h-fit text-xl font-poppins`
      }
    >
      <ul>
        {categories?.map((category) => (
          <li key={category.uid} className="relative">
            <div
              onMouseEnter={() => handleCategoryClick(category.uid)}
              className="flex hover:bg-[#D9D9D9] flex-row-reverse border-b w-full  justify-between px-4 items-center">
              <span
                className="py-2 cursor-pointer"
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
                  navigate(`/search/${category.category_id}`);
                }}
              >
                {category.category_name}
              </span>
            </div>
            <ul
              className={
                showSubCategory && currentCategory === category.uid
                  ? 'absolute top-0 left-full bg-white w-full border-l-2'
                  : 'hidden'
              }
            >
              {category?.subCategories?.map((subcategory) => (
                <li key={subcategory.category_name} className="">
                  <div
                    onMouseEnter={() => handleSubCategoryClick(subcategory.uid)}
                    onMouseLeave={() => handleSubCategoryClick(subcategory.uid)}
                    className="flex hover:bg-[#D9D9D9] border-b w-full flex-row-reverse justify-between px-4 items-center">
                    <span
                      className="py-2 cursor-pointer text-xl"
                      onMouseEnter={() => handleSubCategoryClick(subcategory.uid)}
                    >
                      {subcategory.subCategories?.length > 0
                        ? showSubSubCategory &&
                          currentSubCategory === subcategory.uid
                          ? '-'
                          : '+'
                        : ''}
                    </span>
                    <span
                      className="py-2 text-lg cursor-pointer ml-5"
                      onClick={() => {
                        navigate(`/search/${subcategory.category_id}`);
                      }}
                    >
                      {subcategory.category_name}
                    </span>
                  </div>
                  <ul
                    className={
                      showSubSubCategory &&
                        currentSubCategory === subcategory.uid
                        ? 'absolute top-0 left-full bg-white w-full border-l-2'
                        : 'hidden'
                    }
                  >
                    {subcategory?.subCategories?.map((subsubcategory) => (
                      <li
                        key={subsubcategory.category_name}
                        className="border-b hover:bg-[#D9D9D9] ml-10 cursor-pointer w-full px-4 py-2"
                        onClick={() => {
                          navigate(`/search/${subsubcategory.category_id}`);
                        }}
                      >
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

export const MobileCategories = () => {
  return (
    <Slide direction='up'>
      <Categories scale={true} />
    </Slide>
  )
}