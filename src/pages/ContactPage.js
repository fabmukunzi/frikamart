import React from 'react';
import Contact from '../components/forms/Contact';

const ContactPage = () => {
  return (
    <div>
        <p className='text-center font-bold text-xl'>OUR OFFICES</p>
        <div className='grid grid-cols-2 place-items-center gap-10'>
            <div>
                <h1 className='font-bold text-lg'>GUINEA</h1>
                <p>GN street 101 kk st paul</p>
                <p>Tel: 0788303928</p>
            </div>
            <div>
                <h1 className='font-bold text-lg'>RWANDA</h1>
                <p>GN street 101 kk st paul</p>
                <p>Tel: 0788303928</p>
            </div>
            <div>
                <h1 className='font-bold text-lg'>BURUNDI</h1>
                <p>GN street 101 kk st paul</p>
                <p>Tel: 0788303928</p>
            </div>
            <div>
                <h1 className='font-bold text-lg'>USA</h1>
                <p>GN street 101 kk st paul</p>
                <p>Tel: 0788303928</p>
            </div>
        </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
