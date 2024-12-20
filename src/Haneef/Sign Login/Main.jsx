import React, { useState } from 'react';
import Login from './Components/Login';
import Sign from './Components/Sign'

function Main() 
{
    const [activeTab, setActiveTab] = useState('Login');

    const switchTab = (value) => {

        setActiveTab(value)
    }

    return ( 
        <div className='w-full h-screen flex px-32 py-24 bg-gradient-to-l from-blue-700 to-blue-400'>
            <div className='w-full flex'>
                <div className='w-1/2 bg-white'>
                </div>
                <div className='w-1/2 bg-white border-l-[1px] border-black p-0'>
                    <button
                        className={ activeTab === 'Login' ? 'w-1/2 p-4 bg-blue-700 uppercase text-white font-cambria text-lg font-bold' : 'w-1/2 p-4 bg-white uppercase text-black font-cambria text-lg font-bold border-none' }
                        onClick={() => switchTab('Login')}
                    >
                        Log In
                    </button>
                    <button
                        className={ activeTab === 'Sign In' ? 'w-1/2 p-4 bg-blue-700 uppercase text-white font-cambria text-lg font-bold' : 'w-1/2 p-4 bg-white uppercase text-black font-cambria text-lg font-bold' }
                        onClick={() => switchTab('Sign In')}
                    >
                        Sign In
                    </button>
                    <Login activeTab={activeTab} />
                    <Sign  activeTab={activeTab} />
                </div>
            </div>
        </div>
    )
}

export default Main;