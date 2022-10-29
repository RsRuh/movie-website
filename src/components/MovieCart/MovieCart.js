import React from 'react';
import './MovieCart.css'
import { StarIcon } from '@heroicons/react/24/solid'

const MovieCart = ({movie}) => {
    
    const {name, img, price, about, download, id, star, type, views, registered} = movie;
    return (
        <div className='m-5 inline-block p-2 cursor-pointer duration-300 perCart'>
            <img src={img} alt="" />
            <div className='m-4'>
            <h1 className='foodName text-xl font-bold'>{name}</h1>
            
            <div className='flex'>
            <h1 className=' text-red-700 font-bold text-xl'>{star?star.slice(0, 3): 'h'}</h1>
            <StarIcon className="h-4 w-4"/>
            </div>
            <p className=' font-semibold'>{registered}</p>
            </div>
        </div>
    );
};

export default MovieCart;