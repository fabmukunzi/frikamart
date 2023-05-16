import React, { useState } from 'react';

const categories = [
  {
    id: 'cat001',
    name: 'Shoes',
    subCategories: [
      {
        id: 'cat001001',
        name: 'Male shoes',
        subSubCategories: [
          {
            name: 'Mules',
          },
          {
            name: 'Elegant hats',
          },
        ],
      },
      {
        id: 'cat001002',
        name: 'Female shoes',
        subSubCategories: [
          {
            name: 'Mules',
          },
          {
            name: 'Elegant hats',
          },
        ],
      },
    ],
  },
  {
    id: 'cat002',
    name: 'Clothes',
    subCategories: [
      {
        id: 'cat002001',
        name: 'Male shoes',
        subSubCategories: [
          {
            name: 'Mules',
          },
          {
            name: 'Elegant hats',
          },
        ],
      },
      {
        id: 'cat002002',
        name: 'Female shoes',
        subSubCategories: [
          {
            name: 'Mules',
          },
          {
            name: 'Elegant hats',
          },
        ],
      },
    ],
  },
];

const Categories = () => {
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

  return (
    <div className="w-full md:ml-5 md:w-1/4 md:absolute bg-white h-fit bg- z-[99] text-xl font-poppins transition duration-1000">
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="py-">
            <div className="flex flex-row-reverse border-b w-full  justify-between px-4 items-center">
              <span
                className="cursor-pointer"
                onClick={() => handleCategoryClick(category.id)}
              >
                {showSubCategory && currentCategory === category.id ? '-' : '+'}
              </span>
              <span className="">{category.name}</span>
            </div>
            <ul
              className={
                showSubCategory && currentCategory === category.id
                  ? ''
                  : 'hidden'
              }
            >
              {category.subCategories?.map((subcategory) => (
                <li key={subcategory.name} className="">
                  <div className="flex border-b w-full flex-row-reverse justify-between px-4 items-center">
                    <span
                      className="cursor-pointer"
                      onClick={() => handleSubCategoryClick(subcategory.id)}
                    >
                      {showSubSubCategory &&
                      currentSubCategory === subcategory.id
                        ? '-'
                        : '+'}
                    </span>
                    <span className="">{subcategory.name}</span>
                  </div>
                  <ul
                    className={
                      showSubSubCategory &&
                      currentSubCategory === subcategory.id
                        ? ''
                        : 'hidden'
                    }
                  >
                    {subcategory.subSubCategories?.map((subsubcategory) => (
                      <li key={subsubcategory.name} className="border-b w-full py-2">
                        {subsubcategory.name}
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
