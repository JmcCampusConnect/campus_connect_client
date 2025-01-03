import React from "react";
import Image from "../../../assets/img.jpg";
import Jmc from '../../../assets/jmclogo.png';

const Home = () => 
{
    return (
        <div
            className="main w-screen h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${Image})`, height: '100%'}}
        >
            <div className="w-screen h-[60px] flex flex-row justify-between">
                <div className="w-48 h-28 flex">
                    <img src={Jmc} className="w-28 h-28 ml-6"></img>
                    {/* <h1 className=" text-3xl font-mono text-teal-700 mt-5">Jamal College</h1> */}
                </div>
                <div className="space-x-14 p-8 font-mono font-extrabold text-lg ">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Team</a>
                    <a href="">Pricing</a>
                    <a href="">Blog</a>
                    <a href="">Pages+</a>
                </div>
                <div className="mr-20 space-x-7 p-7 font-mono">
                    <button className=" bg-blue-600  shadow-lg shadow-blue-500/30 text-white w-[78px] h-[35px] rounded-md  font-mono">
                        Login
                    </button>
                    <button className=" bg-blue-600  shadow-lg shadow-blue-500/30 text-white w-[78px] h-[35px] rounded-md  font-mono">
                        Register
                    </button>
                </div>
            </div>
            <div className="flex">
                <div className="">
                    <div>
                        <h1 className="text-5xl w-1/2 ml-20 mt-24 font-mono ">
                            Thinking The High Quality Software.
                        </h1>
                    </div>
                    <div className="w-10/12 ml-20  mt-10  font-mono">
                        <p className="text-white">
                            Softino is an all-new stylish Software for device that can show
                            you thinks. awareness, drive traffic,conncet with customers.
                        </p>
                    </div>
                    <div className="space-x-2 mt-11 ml-20 ">
                        <button className="bg-blue-600 shadow-lg shadow-blue-500/30 text-white w-32 h-9 rounded-md">
                            Start A Today
                        </button>
                        <button className="bg-black shadow-lg shadow-gray-500/30 text-white w-32 h-9 rounded-md">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="w-1/2 h-[400px] "></div>
            </div>
            <div className=" w-full h-[220px] flex space-x-32  font-mono">
                <div className="bg-white  shadow-2xl shadow-orange-500/40  w-60 ml-20  font-mono rounded-md ">
                    <h1 className="font-mono flex justify-center text-2xl mb-7 mt-7 text-violet-900 bg-orange-600 rounded-sm">
                        CONTACT:
                    </h1>
                    <h2 className="flex justify-center mb-2  text-violet-900">
                        0431 - 2331135 , 8903151035
                    </h2>
                    <h2 className="flex justify-center mb-3">principal@jmc.edu</h2>
                    <h2 className="flex justify-center mb-3">www.jmc.edu</h2>
                </div>
                <div className="bg-white  shadow-2xl shadow-orange-500/40  w-60  font-mono rounded-md">
                    <h1 className="font-mono flex justify-center text-2xl mt-7 mb-7  text-violet-900  bg-orange-600 rounded-sm">
                        CONTACT:
                    </h1>
                    <h2 className="flex justify-center mb-3">
                        0431 - 2331135 , 8903151035
                    </h2>
                    <h2 className="flex justify-center mb-3">principal@jmc.edu</h2>
                    <h2 className="flex justify-center mb-3">www.jmc.edu</h2>
                </div>
                <div className="bg-white w-60  shadow-2xl shadow-orange-500/40  font-mono rounded-md">
                    <h1 className="font-mono flex justify-center text-2xl mt-7 mb-7  text-violet-900  bg-orange-600 rounded-sm">
                        CONTACT:
                    </h1>
                    <h2 className="flex justify-center mb-3">
                        0431 - 2331135 , 8903151035
                    </h2>
                    <h2 className="flex justify-center mb-3">principal@jmc.edu</h2>
                    <h2 className="flex justify-center mb-3">www.jmc.edu</h2>
                </div>
                <div className="bg-white w-60 shadow-2xl shadow-orange-500/40 font-mono rounded-md">
                    <h1 className="font-mono flex justify-center text-2xl mt-7 mb-7  text-violet-900  bg-orange-600 rounded-sm">
                        CONTACT:
                    </h1>
                    <h2 className="flex justify-center mb-3">
                        0431 - 2331135 , 8903151035
                    </h2>
                    <h2 className="flex justify-center mb-3">principal@jmc.edu</h2>
                    <h2 className="flex justify-center mb-3">www.jmc.edu</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;
