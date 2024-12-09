import React from 'react';

function NavBar() 
{
    return (
        <div className='bg-blue-700 flex justify-end gap-7 p-3 text-white font-bold'>
            <button className='tracking-wider hover:bg-white px-4 py-2 hover:text-black rounded-lg'>ACADEMICS</button>
            <button className='tracking-wider hover:bg-white px-4 py-2 hover:text-black rounded-lg'>CLUB</button>
            <button className='tracking-wider hover:bg-white px-4 py-2 hover:text-black rounded-lg'>PLACEMENT</button>
            <button className='bg-white px-4 py-2 text-black rounded-lg'>SIGN UP</button>
        </div>
    )
}

export default NavBar;