import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

function Contact() 
{
    return (
        <div className='relative'>
            <div className='w-full h-[180px] bg-slate-200'></div>
            <div className='absolute top-0 left-0 w-full h-full p-12 flex justify-between items-center'>
                <div className='w-[31%] h-[100%] bg-white flex flex-col justify-center items-center gap-5 text-xl font-medium rounded-[12px] shadow-5xl'>
                    <p className='text-center text-2xl text-blue-800 font-bold mb-2 font-cambria tracking-wide'>CONTACT :</p>
                    <div className='flex justify-center items-center gap-3'>
                        <FontAwesomeIcon icon={faPhone} size="x" />
                        <p>0431 - 2331135 , 8903151035</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>                        
                        <FontAwesomeIcon icon={faEnvelope} size="x" />
                        <p>princi@jmc.edu </p>                    
                    </div>
                    <div className='flex justify-center items-center gap-3'>                        
                        <FontAwesomeIcon icon={faGlobe} size="x" />
                        <p>www.jmc.edu</p>
                    </div>
                </div>
                <div className='w-[31%] h-[100%] bg-white flex flex-col justify-center items-center gap-5 text-xl font-medium rounded-[12px]'>
                    <p className='text-center text-2xl text-blue-800 font-bold mb-2 font-cambria tracking-wide'>CONTACT :</p>
                    <div className='flex justify-center items-center gap-3'>
                        <FontAwesomeIcon icon={faPhone} size="x" />
                        <p>0431 - 2331135 , 8903151035</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>                        
                        <FontAwesomeIcon icon={faEnvelope} size="x" />
                        <p>princi@jmc.edu </p>                    
                    </div>
                    <div className='flex justify-center items-center gap-3'>                        
                        <FontAwesomeIcon icon={faGlobe} size="x" />
                        <p>www.jmc.edu</p>
                    </div>
                </div>
                <div className='w-[31%] h-[100%] bg-white flex flex-col justify-center items-center gap-5 text-xl font-medium rounded-[12px]'>
                    <p className='text-center text-2xl text-blue-800 font-bold mb-2 font-cambria tracking-wide'>CONTACT :</p>
                    <div className='flex justify-center items-center gap-3'>
                        <FontAwesomeIcon icon={faPhone} size="x" />
                        <p>0431 - 2331135 , 8903151035</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>                        
                        <FontAwesomeIcon icon={faEnvelope} size="x" />
                        <p>princi@jmc.edu </p>                    
                    </div>
                    <div className='flex justify-center items-center gap-3'>                        
                        <FontAwesomeIcon icon={faGlobe} size="x" />
                        <p>www.jmc.edu</p>
                    </div>
                </div>  
            </div>
            <div className='bg-blue-700 w-full h-[180px]'></div>
        </div>
    )
}

export default Contact;