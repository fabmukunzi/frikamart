import React from 'react';
import WishCard from '../components/product/WishCard';
import { Slide } from 'react-awesome-reveal';

const Wishlist = () => {
    const wishes=[]
    for(let i=0;i<3;i++)
    wishes.push('Wish')
    return (
        <Slide className='flex xs:mx-4 flex-wrap gap-8 justify-around xs:flex-col'>
            {
                wishes.map((wish)=><WishCard />)
            }
        </Slide>
    );
}

export default Wishlist;