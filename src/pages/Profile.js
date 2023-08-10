import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { data } = useSelector((state) => state.profile.data);
  const [currentItem,setCurrentItem]=useState('Account Information')
  const items=['Account Information','Update Profile','Orders','Address','Change Password','Logout']
  return (
    <Slide className="py-4 ml-20 xs:ml-4">
      <div className="flex items-center gap-4">
        <div className="text-5xl bg-slate-600 rounded-full p-0.5 text-center w-12">
          {data?.avatar?<img src={data?.avatar} alt='profile' />:data?.firstname[0].toUpperCase()}
        </div>
        <p>
          {data?.firstname} {data?.lastname}
        </p>
      </div>
      <div className='flex gap-16 mt-10 xs:flex-col'>
      <div className='border w-80'>
        {items.map((item)=>(
            <div onClick={()=>{setCurrentItem(item)}} className='border-b cursor-pointer'>
            <p className='py-4 px-2 hover:text-white hover:bg-[#3f3f3e]'>{item}</p>
          </div>
        ))}
      </div>
      <div>
        <p className='font-bold text-2xl mb-4'>{currentItem}</p>
        <div className='flex gap-4 flex-col'>
            <p>Names: {data?.firstname} {data?.lastname}</p>
            <p>Email: {data?.email}</p>
        </div>
      </div>
      </div>
    </Slide>
  );
};

export default Profile;
