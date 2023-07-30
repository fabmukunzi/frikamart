import React, { useState } from 'react'

const Account = ({ editMode, userData, setUserData }) => {

  return (
    <div className='flex flex-col'>
      <span className='font-bold text-xl'>{editMode ? "Update Profile" : "Account Information"}</span>

      <span className='flex my-2 items-center'>Names:
        {editMode ?
          <input type='text' className='ml-2 rounded p-2 outline-none border' placeholder='Enter your name here' value={userData.names} onChange={(e) => setUserData({ ...userData, names: e.target.value })} />
          :
          <span>{userData.names}</span>
        }
      </span>
      <span className='flex my-2 items-center'>Email:
        {editMode ?
          <input type='email' className='ml-2 rounded p-2 outline-none border' placeholder='Enter your email here' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
          :
          <span>{userData.email}</span>
        }
      </span>    </div>
  )
}

export default Account