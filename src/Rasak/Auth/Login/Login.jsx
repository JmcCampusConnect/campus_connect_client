import React from 'react'


function Login() {
    return (
        <div className='w-screen h-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex justify-center items-center'>
            <div className='w-1/2 h-3/4  bg-black  flex'>
                <div className="w-1/2 h-full bg-blue-400 bg-[url('/src/assets/mountain2.jpg')] bg-center 
                bg-cover bg-no-repeat   flex justify-center items-center">
                    <div className="w-4/5 h-max flex flex-col justify-center ">
                        <h1 className='text-4xl font-bold text-center  text-white'>Stay Connected</h1>
                        <p className='font-bold text-center text-white'>"Welcome back! Log in to stay 
                            updated with the latest news, updates, and features." </p>
                        <button className='w-full bg-blue-00 h-10 rounded-3xl backdrop-blur-sm border-2 mt-5 font-bold text-white border-black'>Sing in</button>

                    </div>
                </div>

                <div className='w-1/2 h-full bg-gradient-to-r from-violet-200 to-pink-200 px-8 py-8'>
                    <div className=' w-full h-full flex  flex-col justify-center gap-5 items-start'>
                        <h1 className='text-black font-bold text-3xl'>Log in</h1>
                        <div className='flex justify-start flex-col w-full gap-1'>
                            <input type="text" placeholder='Enter Username' className='w-full font-bold focus:outline-none placeholder-black border-black bg-transparent border-b-2 h-10' />
                        </div>
                        <div className='flex justify-start flex-col gap-1 w-full'>
                            <input type="password" placeholder='Enter password' className='w-full font-bold focus:outline-none placeholder-black border-black bg-transparent border-b-2 h-10' />
                        </div>

                        <button className='w-full bg-blue-900 h-10 text-white  rounded-2xl'>Log in</button>
                        <div className='flex gap-8'>
                            <button>Forgot password  /</button>
                            <button>Sign</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login