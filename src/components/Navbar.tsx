import React, { useEffect, useState } from 'react';
import HeaderBanner from '../assets/HeaderBanner.png'

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    })

    return (
        <div className={`w-full items-center justify-center p-4 shadow-md fixed left-0 right-0 top-0 mx-auto ${isSticky ? "sticky bg-white" : ""}`}>
            <img className='h-14' src={HeaderBanner} alt='logo'/>
        </div>
    );
};

export default Navbar;