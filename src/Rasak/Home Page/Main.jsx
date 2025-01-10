import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import Content from './Components/Content'

function Main() 
{
    const [login, setLogin]=useState(false);
    
    return (
        <div className='h-[]  px-10 py-10  bg-gradient-to-l from-teal-100 to-rose-100 w-'>
            <NavBar />
            <Content />
        </div>
    )
}

export default Main