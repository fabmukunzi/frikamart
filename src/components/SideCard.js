import React, { useState } from 'react';

const SideCard = ({ ...props }) => {
  const [showSub, setShowSub] = useState(false);
  return (
    <div className="bg-white w-4/5 xs:mb-4 mx-auto rounded-lg mb-10 pb-3 px-6">
      <h1
        className="font-bold pt-3 text-lg"
        onClick={() => setShowSub(!showSub)}
      >
        {props.header}
        <span className='ml-4 md:hidden'>{showSub?'-':'+'}</span>
      </h1>
      <ul className="xs:hidden">
        {props.categories.map((category) => (
          <li className="my-3 cursor-pointer" key={category.name}>
            {category.name}
          </li>
        ))}
      </ul>
      {showSub && (
        <ul>
          {props.categories.map((category) => (
            <li className="my-3 cursor-pointer" key={category.name}>
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideCard;
