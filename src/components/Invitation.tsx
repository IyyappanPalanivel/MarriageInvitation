import React from 'react';
import tulip_bg from '../assets/tulip_bg.jpg';
import invitation from '../assets/invitation.jpg';
import RamkumarMarriageInvite from "../assets/videos/RamkumarMarriageInvite.mp4";

const Invitation = () => {
    return (
        <div
            className="max-w-screen-2xl flex min-h-screen bg-cover justify-center items-center"
            style={{
                backgroundImage: `url(${tulip_bg})`,
            }}
        >
            <div className='px-4 lg:px-14 py-44 flex justify-around w-full flex-col md:flex-row items-center gap-8'>
                {/* Invitation Image */}
                <div className='shadow-md bg-white'>
                    <img src={invitation} width="400" height="300"/>
                </div>
                {/* Video */}
                <div className='shadow-md bg-white'>
                    <video preload="auto" width="400" height="300" controls autoPlay loop>
                        <source src={RamkumarMarriageInvite} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>


        </div>
    );
};

export default Invitation;