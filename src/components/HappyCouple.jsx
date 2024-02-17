import React from 'react';

const HappyCouple = () => {
    return (
        <div className='max-w-screen-2xl bg-neutralWhite p-20'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-black font-bold text-3xl uppercase'>The Happy Couple</h2>
                <p className='italic text-xl text-neutralBlue py-2'>A happy marriage is the union of two good forgivers.</p>
                <img className='h-10 w-40 my-4' src='/src/assets/leaves.svg' />

                <div className='border-neutralBlue bg-white border border-opacity-25 mt-10'>
                    <img className='h-60 w-60' src='/src/assets/weds.jpg' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-around py-8 gap-8'>
                {/* Groom Name */}
                <div className='text-center'>
                    <h5 className='uppercase font-bold text-xl mb-2'>M.Ram Kumar BE.,</h5>
                    <p className='italic text-neutralBlue py-2'>S/o S.Murugasen - M.Bagyalakshmi</p>
                    <p className=''>Coimbatore</p>
                </div>
                {/* Groom Name */}
                <div className='text-center'>
                    <h5 className='uppercase font-bold text-xl mb-2'>V.Swetha BE.,</h5>
                    <p className='italic text-neutralBlue py-2'>S/o M.Veeramani - V.Padhmavathi</p>
                    <p className=''>Palani</p>
                </div>
            </div>

        </div>
    );
};

export default HappyCouple;