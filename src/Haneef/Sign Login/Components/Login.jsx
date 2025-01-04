import React, { useState } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';

function Login({ activeTab }) 
{
    const [ userId, setUserId ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login',{
                user_id: userId,
                user_pass: password
            })
            console.log(response.data)
        }
        catch(err) {}
    }

    return (
        <>
            {activeTab === 'Log In' && (
                <div className='flex flex-col justify-center h-screen items-center p-16 px-28 gap-12'>
                    <span className='text-3xl font-bold text-white text-center font-cambria'>WELCOME BACK !</span>
                    <span className='text-lg text-slate-200'>Log In to continue your journey with us.</span>
                    <div className='flex border-b-2 w-full'>
                        <div className='w-[7%] h-12 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faUser} className="text-md text-white" />
                        </div>
                        <div className='w-[93%] p-3'>
                            <input
                                input='text'
                                className='bg-transparent focus:outline-none text-white text-md placeholder:text-white'
                                placeholder='USER NAME'
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        className="w-full bg-orange-500 p-2.5 mt-5 text-white text-md font-semibold rounded-md shadow-md hover:bg-orange-600 focus:outline-none flex items-center justify-center hover:shadow-slate"
                        onClick={handleLogin}
                    >
                        <FontAwesomeIcon icon={faSignInAlt} className="mr-3" />
                        <span className='font-cambria text-xl'>LOGIN</span>
                    </button>
                </div>
            )}
        </>
    )
}

export default Login;