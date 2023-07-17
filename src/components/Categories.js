import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCategories } from '../features/products/category';
const Categories = ({ scale }) => {
  const { categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const dispatch= useDispatch();
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
  const location=useLocation();
  const[isMobile,setIsMobile]=useState(false)
  useEffect(() => {
    if (window.innerWidth < 426 && location.pathname === '/categories') {
      setIsMobile(true)
    } else if (window.innerWidth > 426 && location.pathname === '/categories') {
      setIsMobile(false);
      navigate('/');
    }
  }, [dispatch, location.pathname, navigate]);
  useEffect(()=>{
    dispatch(getCategories())
  },[])
  return (
    <div
  className={
    scale
      ? 'md:-translate-y-[3.7rem] w-full border-2 transition md:ml-10 md:mt-[3.7rem] duration-500 transform xs:w-full md:w-1/4 md:absolute bg-white text-green z-[999] h-fit text-xl font-poppins'
      : `opacity-0 -translate-y-[3.7rem] ${
          isMobile ? 'hidden' : 'hidden'
        } -translate-x-[100%] w-full border-2 transition md:ml-10 md:mt-[3.7rem] duration-500 transform xs:w-full md:w-1/4 md:absolute bg-white text-green z-[999] h-fit text-xl font-poppins`
  }
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
                  navigate(`/search/${category.category_name}`);
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
              {category?.subCategories?.map((subcategory) => (
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
                    <span
                      className="py-2 text-lg cursor-pointer ml-5"
                      onClick={() => {
                        navigate(`/search/${subcategory.category_name}`);
                      }}
                    >
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
                    {subcategory?.subCategories?.map((subsubcategory) => (
                      <li
                        key={subsubcategory.category_name}
                        className="border-b hover:bg-[#D9D9D9] ml-10 cursor-pointer w-full px-4 py-2"
                        onClick={() => {
                          navigate(`/search/${subsubcategory.category_name}`);
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
// const CategoriesWrapper = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
//   const navigate = useNavigate();

//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth < 768);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       {isSmallScreen ? (
//         <Categories show={true} />
//       ) : (
//         <div
//           style={{
//             position: 'absolute',
//             top: '10px',
//             right: '10px',
//           }}
//         >
//           <Categories show={false} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoriesWrapper;
