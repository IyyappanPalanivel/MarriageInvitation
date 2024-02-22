import React from 'react';
import tulip_bg from '../assets/tulip_bg.jpg';

const Invitation = () => {
    return (
        <div
            className="max-w-screen-2xl flex min-h-screen bg-cover"
            style={{
                backgroundImage: `url(${tulip_bg})`,
            }}
        >
            <div className='px-4 lg:px-14 py-44'>
                <div className='bg-neutralWhite px-4 py5 rounded'>
                    <h5>Together with Our Families</h5>
                </div>
            </div>
        </div>
    );
};

export default Invitation;