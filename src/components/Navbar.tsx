import React from 'react';
import HeaderBanner from '../assets/HeaderBanner.png'

const Navbar = () => {
    return (
        <div className='w-full items-center justify-center p-4 shadow-md fixed left-0 right-0 top-0 mx-auto'>
            <img className='h-14' src={HeaderBanner} alt='logo'/>
        </div>
    );
};

export default Navbar;