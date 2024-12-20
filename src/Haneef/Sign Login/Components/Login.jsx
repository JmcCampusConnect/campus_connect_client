import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function Login({ activeTab }) 
{
    return (
        <>
            {activeTab === 'Login' && (
                <div className='flex flex-col gap-9 px-16 py-11'>
                    <span className='text-2xl font-bold text-blue-800 text-center font-cambria'>LOGIN INTO YOUR ACCOUNT</span>
                    <input
                        className='bg-transparent border-[1.5px] rounded-md border-black py-2.5 px-3 focus:outline-none'
                        placeholder='Username'
                    />
                    <input
                        className='bg-transparent border-[1.5px] rounded-md border-black py-2.5 px-3 focus:outline-none'
                        placeholder='Password'
                    />
                    <button
                        className="w-full p-2.5 bg-blue-700 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
                        // onClick={handleLogin}
                    >
                        <FontAwesomeIcon icon={faLock} className="mr-2" />
                        <span className='font-cambria text-xl mt-0.5'>LOGIN</span>
                    </button>
                </div>
            )}
        </>
    )
}

export default Login;