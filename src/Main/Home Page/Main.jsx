import React from 'react';
import NavBar from './Components/NavBar';
import Content from './Components/Content';

function Main() 
{
    return (
        <div className='bg-gradient-to-l from-teal-100 to-rose-100 w-full h-screen'>
            <NavBar />
            <Content />
        </div>
    )
}

export default Main