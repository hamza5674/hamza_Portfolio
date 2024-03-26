import React, { useState, useEffect } from 'react';
import image1 from '../../images/profile.jpg'
import Typewriter from 'typewriter-effect';
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import './style.css'


function Header() {
    return (
        <>
            <div id='header ' className='bg-[#f5df4e] px-12 '>
                <div className='grid grid-cols-1 lg:grid-cols-2 py-[60px] gap-20 '>

                    <div className='mt-10 md:mt-20 mx-auto lg:mx-0'>
                        <p className='text-[35px] sm:text-[60px] md:text-[80px] lg:text-[95px]  text-[#252b33] mb-2'>HI, I'M A FREELANCER</p>
                        <div>
                            <h1 className='text-[45px] sm:text-[70px] md:text-[100px] lg:text-[115px] font-semibold  text-[#252b33] '>
                                <Typewriter
                                    options={{
                                        strings: ["Developer", "Designer"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                        </div>
                        <p className='mt-2 text-[#252b33] text-[21px]'>based in Rahim Yar Khan, Pakistan.</p>
                        <div className='flex gap-3 items-center'>
                            <div>
                                <a href="#" className='cursor-pointer text-white bg-black mt-5 text-[16px] px-10 py-3 border  inline-block border-transparent  hover:bg-[#252b33] hover:border-black hover:-translate-y-1 transition delay-150 duration-300 ease-in-out'>View My Works</a>
                            </div>
                            <div>
                                <a href="http://localhost:5173/#contact"  className='cursor-pointer  mt-7 text-[16px] px-10 py-3 inline-block underline hover:no-underline'>Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-10 mx-auto lg:pl-8'>
                        <img src={image1} alt="" className='w-[425px] h-[425px] rounded-9xl bg-contain rounded-full profile border-[14px] border-white  object-center  ' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header