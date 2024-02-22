import React from 'react';
import leaves from '../assets/leaves.svg';
import calender from '../assets/calender.png';
import location from '../assets/location.png';
import tulip_bg from '../assets/tulip_bg.jpg';

const WeddingEvent = () => {
    return (
        <div
            className="max-w-screen-2xl min-h-screen bg-cover px-4"
            style={{
                backgroundImage: `url(${tulip_bg})`,
            }}
        >
            <div className='py-16 flex flex-col items-center justify-center'>
                <h2 className='text-black font-bold text-3xl uppercase'>The Wedding Event</h2>
                <p className='italic text-xl py-2'>If you have only one smile in you give it to the people you love..</p>
                <img className='h-10 w-40 my-4' src={leaves} />
            </div>

            {/* Location Cards */}
            <div className='flex flex-col md:flex-row justify-around py-8 gap-8'>
                {/* Reception */}
                <div className='bg-white shadow-md p-8 my-4 rounded-md'>
                    <h2 className='text-black font-bold text-xl uppercase'>THE RECEPTION</h2>
                    <div className='py-2 flex items-center'>
                        <img className='h-10 w-10 mr-3' src={calender} />
                        <p>Friday - March 22, 2024 <br />06.00 PM - 10.00 PM</p>
                    </div>
                    <div className='py-2 flex items-center'>
                        <img className='h-10 w-10 mr-3' src={location} />
                        <p>S N Arangam, Ramanadhapuram <br />Coimbatore.</p>
                    </div>
                    <button className='px-4 py-2 border-2 hover:bg-black hover:text-white border-black my-4'>View Map</button>
                </div>

                {/* Marriage */}
                <div className='bg-white shadow-md p-8 my-4 rounded-md'>
                    <h2 className='text-black font-bold text-xl uppercase'>THE Marriage</h2>
                    <div className='py-2 flex items-center'>
                        <img className='h-10 w-10 mr-3' src={calender} />
                        <p>Wednesday - March 20, 2024 <br />05.00 AM - 06.00 AM</p>
                    </div>
                    <div className='py-2 flex items-center'>
                    <img className='h-10 w-10 mr-3' src={location} />
                        <p>Karthik Mahal <br />Palani.</p>
                    </div>
                    <button className='px-4 py-2 border-2 hover:bg-black hover:text-white border-black my-4'>View Map</button>
                </div>
            </div>

            <div className='py-16 flex flex-col items-center justify-center'>
                <h2 className='text-black font-bold text-3xl uppercase italic'>We Can't Wait to See You!</h2>
                <p className='italic text-xl py-2'>March, 20 2024 | karthik mahal, Palani</p>
                <img className='h-10 w-40 my-4' src={leaves} />
            </div>
        </div>
    );
};

export default WeddingEvent;