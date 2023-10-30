import React from 'react'
import couple from "../assets/pexels-unique-click-by-sonam-singh-6544106.jpg"
import {Carousel} from "./Carousel"
import physical_health from "../assets/gymlogo.png"
import mental_health from "../assets/mental_health.png"
import slogo from "../assets/slogo.png"
import timer from "../assets/timer.png"
import Familylogo from "../assets/Familylogo.png"
import indiaMap from "../assets/indiaMap.jpg"
export const Home = () => {
    return (
        <div className='bg-white-300 '>
            {/* Three Photo */}
            <div className='flex justify-between mt-[60px] ml-6 mr-6  gap-6'>
                <div className='flex-col'>
                    <img className='h-[400px] w-[400px] imgHover ' src={couple}  ></img>
                    <div className='flex justify-center NavBtn'>
                    <button >
                        Find Your Partner
                    </button>
                    </div>
                </div>
                
                <div className='flex-col'>
                    <img className='h-[400px] w-[400px] imgHover ' src={couple}  ></img>
                    <div className='flex justify-center NavBtn'>
                    <button >
                        Get doctor recommendation
                    </button>
                    </div>
                </div>

                <div className='flex-col'>
                    <img className='h-[400px] w-[400px] imgHover ' src={couple}  ></img>
                    <div className='flex justify-center NavBtn'>
                    <button >
                       Have a happy and Healthy Family
                    </button>
                    </div>
                </div>


               
            </div>

            {/* five logo Section */}
            <div className='flex justify-between gap-8 mt-16'>
                <div className=' flex flex-col items-center'>
                    <div>
                    <img className='h-[60px] w-[60px]' src={slogo}  ></img>
                    </div>                                     
                    <div className='text-center'>INCLUSIVE PLATFORM</div>
                    <div className='text-center'>The Platform provides facility for all the genders </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className=' justify-center'>
                    <img className='h-[60px] w-[60px]' src={timer}  ></img>
                    </div>
                    <div>TIME EFFICIENT</div>
                    <div className='text-center'>Using this saves Your time</div>
                </div>
                <div className='flex  flex-col items-center'>
                    <div >
                    <img className='h-[60px] w-[60px]' src={physical_health}  ></img>
                    </div>
                    <div className='text-center'>PHYSICAL HEALTH</div>
                    <div className='text-center'>This platform helps in finding your partner by matching physical health </div>
                </div>
                <div className=' flex flex-col items-center'>
                    <div>
                    <img className='h-[60px] w-[60px]' src={mental_health}  ></img>
                    </div>
                    <div className='text-center'>MENTAL HEALTH</div>
                    <div className='text-center'>This platform helps in finding your partner by matching mental health</div>
                </div>
                <div className='flex flex-col items-center'>
                    <div>
                    <img className='h-[60px] w-[60px]' src={Familylogo}  ></img>
                    </div>
                    <div className='text-center'>FAMILY PLANNING</div>
                    <div className='text-center'>We provides you an AI enhanced family planning</div>
                </div>
            </div>

            
          
            {/* <div>
            <Carousel></Carousel>
            </div> */}

            <div className='flex justify-center text-[30px] font-bold text-blue-800'><h2>...Our Collaborators...</h2></div>

            <div className='bg-white h-[120px]'>

            </div>
            <div className='h-1 bg-[#174c85]'></div>
            <div className='h-10'></div>
            <div className='h-7 bg-[#09213a] text-white pl-10'>Best medical labs all around India to get tested</div>
            {/* india MAp ,data card*/}

            <div className='flex justify-between gap-4 mt-20'>
                {/* data card  */}
                <div className=' '>
                    <div className='bg-[#9ca3af] ml-[100px] w-fit rounded-md'>
                        <div className='p-1 '>
                        <p>PATNA</p>
                        <h2>Contact:+9183636743</h2>
                        <h2>Email:parivartak@gmail.com</h2>
                        <h2>Address:Chandi</h2>
                       </div>
                    </div>
                </div>
                <div className='ml-8 mr-8'><img src={indiaMap} className='w-[600px] h-[800px]' alt='indiamap'>
                </img></div>
                <div  className=' '>
                <div className='bg-[#9ca3af] mr-[100px] w-fit rounded-md'>
                        <div className='p-1'>
                        <p>PATNA</p>
                        <h2>Contact:+9183636743</h2>
                        <h2>Email:parivartak@gmail.com</h2>
                        <h2>Address:Chandi</h2>
                       </div>
                    </div>
                </div>
            </div>

            {/* foooter */}

            <div className=' bg-[#09213a] h-[100px]'></div>
            <div className='bg-white flex flex-col text-center'><p>@copyright |2023-2024| mat.com</p></div>
            <div className=' bg-[#09213a] h-[20px]'></div>
      </div>
    );
}

export default Home;
