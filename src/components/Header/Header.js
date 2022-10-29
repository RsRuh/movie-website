import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className='text-xl font-bold flex justify-evenly bg-pink-800 text-white py-5'>
            <Link to='/'><img className='logo' src="RsLogo.png" alt="" /></Link>
            <Link to='/home'>Home</Link>
            <Link to='/popular'>Popular</Link>
            <Link to='/upcoming'>Upcoming</Link>
            <Link to='/top_rated'>Top Rated</Link>
            <Link to='/tv_shows'>Tv Shows</Link>
        </div>
    );
};

export default Header;