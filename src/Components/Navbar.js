import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaUser, FaSearch } from 'react-icons/fa';
import matlogo from "../assets/matlogo.jpg"
const Navbar = () => {
    return (
        <div className='flex-col '>

            {/* Blue Navbar */}
            <div className='bg-[#174c85] h-10 flex items-center justify-between'>
                <div className='flex  items-center gap-3 ml-8'>
                    <div className=' text-white  border h-10 '></div>
                    <FaFacebook></FaFacebook>
                    <div className=' text-white  border h-10 '></div>
                    <FaInstagram></FaInstagram>
                    <div className=' text-white  border h-10 '></div>
                    <div className='text-red-500'><FaYoutube></FaYoutube></div>
                    <div className=' text-white  border h-10 '></div>

                </div>
                <div className='mr-3 text-white size={1000px} '><FaUser></FaUser></div>

            </div>
            {/* Navbar main */}
            <div className='flex items-center justify-between  gap-3 h-[55px] bg-white'>
                <div className='ml-8 NavBtn'>
                    <img src={matlogo} className=' w-[60px] h-[55px]' alt='Mat Logo'></img>
                </div>

                <div className='NavBtn'>
                    <button>
                        HOME
                    </button>
                </div>

                <div className='NavBtn'>
                    <button >
                        MARITAL STATUS
                    </button>
                </div>
                <div className='NavBtn'>
                    <button>
                        HEALTH STATUS
                    </button>
                </div>
                <div className='NavBtn'>
                    <button>
                        BEHAVIORAL STATUS
                    </button>
                </div>
                <div className='bg-orange-400 rounded-lg '>
                    <button className= 'text-white mb-[1px] ml-1 mr-1 items-center'>
                        CONTACT US
                    </button>
                </div>
                <div className='mr-7 '>
                    <button>
                        <FaSearch></FaSearch>
                    </button>
                </div>

            </div>

        </div>
    );
}


export default Navbar;