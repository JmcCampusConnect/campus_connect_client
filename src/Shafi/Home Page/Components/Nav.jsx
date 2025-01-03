import React from 'react'
// import { useState } from 'react-route-dom';
const Nav = () => {
  return (
    <div className='bg-teal-200 w-screen h-screen flex items-center justify-center'>
        <div className='bg-red-200 w-1/3 h-3/6 rounded-lg '>
        <h1 className=' flex items-center justify-center font-cambria font-bold text-3xl'>Login page</h1>
        <div className=' w-full h-1/2  flex flex-col items-center'>
     
       
        <input type="text" placeholder="Enter Register Number"  className='w-1/2 mt-10 mb-10 p-2 rounded-md'></input>
        <input type="password"placeholder="Enter Password"  className='w-1/2 mb-10 p-2 rounded-md'></input>
        </div>
        <div className=' w-full h-16 flex items-center justify-center'>
        <button className='bg-blue-600 w-1/2 h-10 rounded-md items-center text-white'>Login</button>
        </div>
       

        

        </div>
    </div>
  )
}

export default Nav