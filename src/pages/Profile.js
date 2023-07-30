import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Account from '../components/profile/Account';
import Orders from '../components/profile/Orders';
import ChangePassword from '../components/profile/ChangePassword';
import Logout from '../components/profile/Logout';
import Address from '../components/profile/Address';

const Profile = () => {
  const { data } = useSelector((state) => state.profile.data);
  const [userData, setUserData] = useState({ ...data })
  const [currentItem, setCurrentItem] = useState('Account Information')
  const items = ['Account Information', 'Update Profile', 'Orders', 'Address', 'Change Password', 'Logout']
  return (
    <div className="py-4 ml-20 xs:ml-4">
      <div className="flex items-center gap-4">
        <div className="text-5xl bg-slate-600 rounded-full p-0.5 text-center w-12">
          {data?.avatar ? <img src={data?.avatar} alt='profile' /> : data?.firstname[0].toUpperCase()}
        </div>
        <p>
          {data?.firstname} {data?.lastname}
        </p>
      </div>
      <div className='flex gap-16 mt-10 xs:flex-col'>
        <div className='border w-80'>
          {items.map((item, index) => (
            <div onClick={() => { setCurrentItem(item) }} key={index} className='border-b cursor-pointer'>
              <p className='py-4 px-2 hover:text-white hover:bg-[#3f3f3e]'>{item}</p>
            </div>
          ))}
        </div>
        <div>
          {currentItem === 'Account Information' && <Account editMode={false} userData={userData} setUserData={setUserData} />}
          {currentItem === 'Update Profile' && <Account editMode={true} userData={userData} setUserData={setUserData} />}
          {currentItem === 'Orders' && <Orders />}
          {currentItem === 'Address' && <Address />}
          {currentItem === 'Change Password' && <ChangePassword />}
          {currentItem === 'Logout' && <Logout />}

        </div>
      </div>
    </div>
  );
};

export default Profile;
