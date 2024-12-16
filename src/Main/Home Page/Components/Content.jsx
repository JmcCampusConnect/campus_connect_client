import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Content() 
{
    return (
        <div className='flex justify-between'>
            <div className='w-1/2 p-10'>
                <p className='mb-3 text-green-800 text-6xl font-cambria font-black'>JMC CAMPUS</p>
                <p className='text-6xl mb-3 font-cambria font-black'>CONNECT</p>
                {/* <p className='text-lg font-arial mb-1.5'>JMC Campus Connect is a platform designed to enhance Collaboration,</p>
                <p className='text-lg font-arial mb-1.5'>Streamline Processes, and Strengthen Connections within</p>
                <p className='text-lg font-arial'>the Campus Community.</p> */}
                Empowering Connections, Inspiring Growth, and simplifying your Campus Journey - all in one place.
                Where opportunities meet collaboration. Dive into a world that brings together everything you need for a fulfilling Campus Experience.
                Stay Inspired, Stay Informed, and unlock your potential through a platform designed to empower every aspect of your journey.
                Let's build connections that last a lifetime!                
                <button className='bg-blue-700 mt-4 text-white rounded-md p-3 flex items-center gap-2.5 transform hover:scale-105'>
                    <p className='font-md text-sm'>KNOW ABOUT MORE</p>
                    <FontAwesomeIcon icon={faArrowRight} className='mt-0.5 text-lg' />
                </button>
            </div>
            <div className='w-1/2 flex justify-end '>
                {/* <img src={JCC} className='w-[400px] h-[330px]' /> */}
            </div>
        </div>
    )
}

export default Content