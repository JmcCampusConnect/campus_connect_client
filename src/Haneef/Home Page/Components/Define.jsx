import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import JCC from '../../../assets/jmclogo.png';

function Define() 
{
    return (
        <div className='flex p-24 justify-between'>
            <div className=' w-1/2'>
                <p className='mb-3 text-green-800 text-7xl font-cambria font-black'>JMC CAMPUS</p>
                <p className='text-7xl mb-3 font-cambria font-black'>CONNECT</p>
                <p className='text-xl font-arial mb-1.5'>JMC Campus Connect is a platform designed to enhance Collaboration,</p>
                <p className='text-xl font-arial mb-1.5'>Streamline Processes, and Strengthen Connections within</p> 
                <p className='text-xl font-arial'>the Campus Community.</p>
                <button className='bg-blue-700 mt-4 text-white rounded-md p-3 flex items-center gap-2.5 transform hover:scale-105'>
                    <p className='font-md text-lg'>KNOW ABOUT MORE</p>
                    <FontAwesomeIcon icon={faArrowRight} className='mt-1 text-xl' />
                </button>
            </div>
            <div className='w-1/2 flex justify-end'>
                <img src={JCC} className='w-[500px] h-[330px]' />
            </div>
        </div>
    )
} 

export default Define;