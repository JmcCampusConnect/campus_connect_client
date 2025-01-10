import React from 'react'

function NavBar() 
{
    return (
        <div className='flex flex-row justify-between'>
            <div className='w-90 h-max '>
                <div><span className=' font-bold text-3xl capitalize'>CampusConnect</span></div>
            </div>
            <div className='flex flex-row justify-around flex-wrap items-cener  w-max h-max  font-bold text-xl '>
                <div className='mx-10 hover:cursor-pointer hover:text-green hover:bg-white'>Clubs</div>
                <div className='mx-10 hover:cursor-pointer hover:text-green hover:bg-white'>Placement</div>
                <div className='mx-10 hover:cursor-pointer hover:text-green hover:bg-white'>Events</div>
                <div className='mx-10 hover:cursor-pointer hover:text-green hover:bg-white'>Help</div>
                <div className='mx-10 hover:cursor-pointer hover:text-green hover:bg-white'>Notification</div>
                <div className='mx-10 hover:cursor-pointer hover:text-green hover:bg-white'>Academics</div>
            </div>
            <div className='w-max h-max  flex flex-row justify-end items-center'>
                <div className='px-5 hover:cursor-pointer'>Sign in</div>
                <div className=''><button className='w-20 h-10 bg-yellow rounded-t-sm '>Register</button></div>
            </div>
        </div>
    )
}

export default NavBar