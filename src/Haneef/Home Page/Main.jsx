import React from 'react';
import NavBar from './Components/NavBar';
import Define from './Components/Define'
import Contact from './Components/Contact';

function Main() 
{
    return (
        <div className='w-full h-screen bg-slate-200'>
            <NavBar />
            <Define />
            <Contact />
        </div>
    )
}

export default Main