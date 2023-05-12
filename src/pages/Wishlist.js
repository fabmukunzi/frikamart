import React from 'react';
import WishCard from '../components/product/WishCard';

const Wishlist = () => {
    const wishes=[]
    for(let i=0;i<3;i++)
    wishes.push('Wish')
    return (
        <div className='flex xs:mx-4 flex-wrap gap-8 justify-around xs:flex-col'>
            {
                wishes.map((wish)=><WishCard />)
            }
        </div>
    );
}

export default Wishlist;
