import React, { act, useState } from 'react'
import Login from './Components/Login';
import Sign from './Components/Sign';
import JmcLogo from '../../assets/JmcLogo.png'

function Main() 
{
    const [ activeTab, setActiveTab ] = useState('Log In')

    const switchTab = () => {

        setActiveTab((prev) => (activeTab === 'Log In' ? 'Sign Up' : 'Log In'))
    }

    return (
        <div className='w-full h-screen flex'>
            <div className="w-1/2 bg-slate-200 flex flex-col justify-center items-center p-10 space-y-8">
        <img src={JmcLogo} className="w-64 h-auto" alt="JMC Logo" />
        <button
          onClick={switchTab}
          className="border border-orange-500 w-60 py-3 font-cambria text-xl text-black rounded-lg font-medium uppercase shadow-lg hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
        >
          {activeTab === 'Log In' ? 'Sign Up' : 'Log In'}
        </button>
      </div>
            <div className='w-1/2 bg-gradient-to-b from-blue-600 to-blue-800 h-screen'>
                {activeTab === 'Log In' ? <Login activeTab={activeTab} /> : <Sign activeTab={activeTab} />}
            </div>
        </div>
    )
}

export default Main;
