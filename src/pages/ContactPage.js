import React from 'react';
import Contact from '../components/forms/Contact';
import { Slide } from 'react-awesome-reveal';

const ContactPage = () => {
  return (
    <Slide className=''>
      <div className='flex justify-center w-screen'>
      <iframe title='frikamart map' src="https://www.google.com/maps/d/u/0/embed?mid=1OYrkuy3oRZfd8ijveDLxuvEZN3K5xAA&ehbc=2E312F" width="640" height="480"></iframe>
      </div>
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
    </Slide>
  );
};

export default ContactPage;
