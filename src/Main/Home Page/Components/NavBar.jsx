import React from 'react';

function NavBar() 
{
    return (
        <div className='flex jutify-center items-center justify-between px-5 py-5'>
            <div>
                <span className='font-bold text-2xl text-cus_rose'>CampusConnect</span>
            </div>
            <div className='flex jutify-center items-center justify-between gap-7'>
                <span className='font-bold text-xl rounded-lg hover:cursor-pointer hover:bg-cus_green hover:text-white px-3 py-1 underline hover:no-underline'>Clubs</span>
                <span className='font-bold text-xl rounded-lg hover:cursor-pointer hover:bg-cus_green hover:text-white px-3 py-1 underline hover:no-underline'>Placement</span>
                <span className='font-bold text-xl rounded-lg hover:cursor-pointer hover:bg-cus_green hover:text-white px-3 py-1 underline hover:no-underline'>Events</span>
                <span className='font-bold text-xl rounded-lg hover:cursor-pointer hover:bg-cus_green hover:text-white px-3 py-1 underline hover:no-underline'>Help</span>
                <span className='font-bold text-xl rounded-lg hover:cursor-pointer hover:bg-cus_green hover:text-white px-3 py-1 underline hover:no-underline'>Notification</span>
                <span className='font-bold text-xl rounded-lg hover:cursor-pointer hover:bg-cus_green hover:text-white px-3 py-1 underline hover:no-underline'>Academics</span>
                <button className='bg-yellow-400 px-3 py-1 text-lg rounded-lg font-semibold'>Sign Up</button>
                <button className='bg-cus_green px-3 py-1 text-lg rounded-lg font-semibold text-white'>Log In</button>
            </div>
        </div>
    )
}

export default NavBar;