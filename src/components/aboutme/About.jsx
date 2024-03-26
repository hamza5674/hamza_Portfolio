
import React from 'react'
import './style.css'
// import line from "../../images/line.png"
function About() {

    return (
        <>
            <section className='bg-white py-[104px] px-12'>
                <div className=' text-center'>
                    <h2 className=' text-center bg-[#f5df4e] inline-block px-1'>About me</h2>
                    <h1 className='text-4xl font-medium mt-4 mb-8'>Know Me More</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
                    <div className=' col-span-2'>
                        <p className='text-3xl  inline-block text-[#252b33]'>Hi, I'm <span className='font-medium border-b-[3px] border-[#f5df4e] inline-block '>Hamza Shahid</span></p>
                        <p className='text-[24px] text-[#252b33] mt-4 grid '>
                            I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.
                        </p>
                    </div>
                    <div className='mx-auto text-center'>
                        <div className=''>
                            <h1 className='text-[140px] text-[#4c4d4d] mt-[-25px] font-medium'>2</h1>
                            <h1 className='mt-[-45px] text-[30px]'>Years of <span className='inline-block font-medium text-[30px]'>Experiance</span></h1>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20'>
                    <div>
                        <p className='text-[18px] font-normal text-[#6c757d]'>Name:</p>
                        <h1 className='text-[20px] font-medium my-1'>Hamza Shahid</h1>
                    </div>
                    <div>
                    <p className='text-[18px] font-normal text-[#6c757d]'>Email:</p>
                        <h1 className='text-[20px] font-medium my-1'>chamza199@gmail.com</h1>
                    </div>
                    <div>
                    <p className='text-[18px] font-normal text-[#6c757d]'>Date of birth:</p>
                        <h1 className='text-[20px] font-medium my-1'>15 October, 1998</h1>
                    </div>
                    <div>
                    <p className='text-[18px] font-normal text-[#6c757d]'>From:</p>
                        <h1 className='text-[20px] font-medium my-1'>Rahim Yar Khan, Pk.</h1>
                    </div>
                </div>
            </section>
            <section>

                
            </section>

        </>
    )
}

export default About