import React from 'react';

const Model = ({ ...props }) => (
  <>
    {props.showModel ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto bg-white my-6">
            <div className="flex items-start justify-between p-5 border-b-2 pr-[25rem]">
              <h1 className="font-bold">{props.title}</h1>
            </div>
            <div className="relative px-6 flex-auto">
              <input type='number' placeholder='Number of items' className='border-2  py-2 px-1 my-4 rounded-sm  border-slate-400' />
            </div>
            <div className="flex items-center justify-end gap-x-5 p-3 py-4">
              <button
                className="!text-black bg-transparent py-2 border border-black hover:bg-gray-100  rounded-none px-6"
                type="button"
                l
                onClick={() => props.setShowModel(false)}
              >Cancel</button>
              <button
              className="bg-[#0fc65b] border-[#0fca5d] py-2 border-2 font-bold text-white px-6 text-sm hover:bg-[#08F46C] hover:border-[#08F46C]"
              type="button"
              onClick={() => props.setShowModel(false)}
            >Confirm</button>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black" />
      </>
    ) : null}
  </>
);

export default Model;
