import React from 'react'
import NavBar from './Components/NavBar'
import Content from './Components/Content'

function Main() 
{
    return (
        <div className='flex flex-col bg-gradient-to-l from-teal-100 to-rose-100 w-screen h-screen py-10 px-10'>
            <NavBar />
            <Content />
        </div>
    )
}

export default Main