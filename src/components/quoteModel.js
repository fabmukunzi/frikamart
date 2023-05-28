import React, { useState } from 'react';

const QuoteRequestForm = ({onClose}) => {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleCancel = () => {
    onClose();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setDescription('');
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className='bg-white xs:mx-3 xs:w-screen w-1/2 p-4'>
      <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
      <form onSubmit={handleSubmit} className="bg-white py-2 space-y-4">
        <div>
          <label htmlFor="email" className="text-gray-700 font-medium">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border outline-none focus:outline-none border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="text-gray-700 font-medium">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="border outline-none focus:outline-none border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
            rows="4"
            required
          ></textarea>
        </div>
        <div className='flex justify-end'>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-slate-500 mx-4 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#0fc65b] hover:bg-[#0ebb56] text-white font-medium py-2 px-4 rounded-md"
        >
          Submit
        </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default QuoteRequestForm;
