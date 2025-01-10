import React from 'react'
import Image from '../../../assets/ig3.png'
function Content() {
    return (
        <div className="mt-8 h-  flex flex-row justify-between ">
            <div className="w-1/2 flex flex-col pt-10 ">
                <div className='font-bold  text-[50px] pt-16'>
                    <span><span className='text-green '>JMC</span> Campus Connect:<br />Bridging Opportunities,<br />Connecting Minds</span>
                </div>
                <div className='pt-7 '>
                    <span>Empowering connections, inspiring growth, and simplifying your campus journey – all in one place.
                        Where opportunities meet collaboration. Dive into a world that brings together everything you need for a fulfilling campus experience.
                        Stay inspired, stay informed, and unlock your potential through a platform designed to empower every aspect of your journey.
                        Let’s build connections that last a lifetime!
                    </span>r
                </div>
                <div className='pt-5 flex flex-row  '>
                    <div><button className='w-40 mt-8 h-10 bg-light_rose box-border border-2 rounded-tr-2xl  text-white hover:drop-shadow-2xl'>Explore  ➨</button></div>
                </div>
            </div>
            <div className="w-1/2   flex flex-row  bg-[url('/src/assets/ig3.png')]  bg-cover bg-center ">
                {/* <div className='w-80 h-80'><img src={image} alt='Image'/></div> */}
            </div>
        </div>
    )

}

export default Content