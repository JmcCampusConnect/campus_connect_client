import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLock, faShield, faShieldAlt, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';

function Sign({ activeTab }) 
{
    return (
        <>
            {activeTab === 'Sign Up' && (
                <div className='flex flex-col items-center p-16 px-28 gap-8 justify-center h-screen'>
                    <span className='text-3xl font-bold text-white text-center font-cambria'>WELCOME !</span>
                    <span className='text-lg text-slate-200'>Sign Up with us and explore Endless Possibilities !</span>
                    <div className='flex border-b-2 w-full'>
                        <div className='w-[7%] h-12 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faUser} className="text-md text-white" />
                        </div>
                        <div className='w-[93%] p-3'>
                            <input
                                input='text'
                                className='bg-transparent focus:outline-none text-white text-md placeholder:text-white'
                                placeholder='USER NAME'
                            />
                        </div>
                    </div>
                    <div className='flex border-b-2 w-full'>
                        <div className='w-[7%] h-12 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faLock} className="text-md text-white" />
                        </div>
                        <div className='w-[93%] p-3'>
                            <input
                                type='psw'
                                className='bg-transparent focus:outline-none text-white text-md placeholder:text-white'
                                placeholder='PASSWORD'
                            />
                        </div>
                    </div>
                    <div className='flex border-b-2 w-full'>
                        <div className='w-[7%] h-12 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faShieldAlt} className="text-md text-white" />
                        </div>
                        <div className='w-[93%] p-3'>
                            <input
                                type='psw'
                                className='bg-transparent focus:outline-none text-white text-md placeholder:text-white'
                                placeholder='CONFIRM PASSWORD'
                            />
                        </div>
                    </div>
                    <button
                        className="w-full bg-orange-500 p-2.5 mt-5 text-white text-lg font-semibold rounded-md shadow-md hover:bg-orange-600 focus:outline-none flex items-center justify-center hover:shadow-slate"
                    >
                        <FontAwesomeIcon icon={faUserPlus} className="mr-3" />
                        <span className='font-cambria text-lg'>SIGN UP</span>
                    </button>
                </div>
            )}
        </>
    )
}

export default Sign;