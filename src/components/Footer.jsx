import React from 'react';
import grey_matrix from '../assets/grey_matrix.png';

const Footer = () => {

    const handleGreyMatrixClick = () => {
        window.open('https://greymatrix.netlify.app');
    };

    return (
        <div className='w-full bg-neutralBlue py-8 flex-col items-center text-center'>
            {/* <p className='italic'> © 2024 |  <a className='underline text-neutralWhite left-1'>Grey Matrix</a>
            </p> */}
            {/* Grey Matrix */}
            <div className='items-center justify-center text-center' onClick={handleGreyMatrixClick}>
                <div className='flex items-center justify-center mt-1 md:mt'>
                    <img src={grey_matrix} className='w-8 h-8 self-center' />
                </div>
                <p className="text-xs font-lato font-extrabold tracking-[1px] text-white sm:order-first">Designed by Grey Matrix</p>
            </div>
        </div>
    );
};

export default Footer;