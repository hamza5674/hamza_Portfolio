
import React from 'react'

function Resume() {
    return (
        <>
            <section id='resume' className=' py-[104px] px-12'>
                <div className=' text-center'>
                    <h2 className=' text-center bg-[#f5df4e] inline-block px-1'>Resume</h2>
                    <h1 className='text-4xl font-medium mt-4 mb-[70px]'>A summary of My Resume</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 px-2 gap-16'>
                    <div>
                        <h1 className='text-[28px] font-semibold mb-5'>My Education</h1>
                        <div className='border-l-[2px] border-[#f5df4e] ps-4'>
                            <h1 className='text-[21px] mb-2 font-medium'>Matric/Secondary School Certificate Bise Bwp </h1>
                            <p className='mb-2'>Sheikh Zayed Public School, Rahim Yar Khan / 2012 - 2014</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>

                            <h1 className='text-[21px] mb-2 font-medium mt-7'>FSC Pre-Engineering Bise Bwp </h1>
                            <p className='mb-2'>Punjab College Rahim Yar Khan / 2014 - 2016</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>

                            <h1 className='text-[21px] mb-2 font-medium mt-7'>Bachelors in Computer Science </h1>
                            <p className='mb-2'>Khwaja Fareed UEIT / 2017 - 2022</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>

                        </div>
                    </div>

                    <div>
                        <h1 className='text-[28px] font-semibold mb-5'>My Experience</h1>
                        <div className='border-l-[2px] border-[#f5df4e] ps-4'>
                            <h1 className='text-[21px] mb-2 font-medium'>Jr. Font End Developer</h1>
                            <p className='mb-2'>TICER/ 2024 - current</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>

                            <h1 className='text-[21px] mb-2 font-medium mt-7'>Jr. Back End Developer</h1>
                            <p className='mb-2'>TICER/ 2024 - current</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>

                            <h1 className='text-[21px] mb-2 font-medium mt-7'>HTML Developer</h1>
                            <p className='mb-2'>TICER/ 2024 - current</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-8'>
                    <a href="https://drive.google.com/file/d/1xfAMkXDsIeOKrO9YxWjvOiTUinCY5FJJ/view" className='cursor-pointer  border-black  mt-5 text-[16px] px-10 py-3 border-[2px]  inline-block border-transparent hover:text-white hover:bg-[#252b33] hover:border-black hover:-translate-y-1 transition delay-150 duration-300 ease-in-out'>Download CV</a>
                </div>
                <h1 className='text-[28px] font-semibold mb-8 mt-14'>My Skills</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 px-3 gap-16'>

                    <div className='left'>
                        <div className='no1 mb-5'>
                            <div class="flex justify-between mb-3 mt-4">
                                <span class="text-base font-medium  ">Web Design</span>
                                <span class="text-sm font-medium  ">85%</span>
                            </div>
                            <div class="w-[100%] bg-gray-200 rounded-full h-[9px] ">
                                <div class="bg-[#f5df4e] h-[9px] rounded-s-full w-[85%]"></div>
                            </div>
                        </div>

                        <div className='no2 mb-5'>
                            <div class="flex justify-between mb-3 mt-10">
                                <span class="text-base font-medium ">JavaScript</span>
                                <span class="text-sm font-medium ">75%</span>
                            </div>
                            <div class="w-[100%] bg-gray-200 rounded-full h-[9px]  ">
                                <div class="bg-[#f5df4e] h-[9px] rounded-s-full w-[75%] "></div>
                            </div>
                        </div>

                        <div className='no3 mb-5'>
                            <div class="flex justify-between mb-3 mt-10">
                                <span class="text-base font-medium  ">Tailwind CSS</span>
                                <span class="text-sm font-medium  ">85%</span>
                            </div>
                            <div class="w-[100%] bg-gray-200 rounded-full h-[9px]">
                                <div class="bg-[#f5df4e] h-[9px] rounded-s-full w-[85%] "></div>
                            </div>
                        </div>
                    </div>

                    <div className='right'>
                        <div className='no1 mb-5'>
                            <div class="flex justify-between mb-3 mt-4">
                                <span class="text-base font-medium  ">HTML/CSS</span>
                                <span class="text-sm font-medium  ">95%</span>
                            </div>
                            <div class="w-[100%] bg-gray-200 rounded-full h-[9px] ">
                                <div class="bg-[#f5df4e] h-[9px] rounded-s-full w-[98%] "></div>
                            </div>
                        </div>

                        <div className='no2 mb-5'>
                            <div class="flex justify-between mb-3 mt-10">
                                <span class="text-base font-medium  ">React JS</span>
                                <span class="text-sm font-medium  ">80%</span>
                            </div>
                            <div class="w-[100%] bg-gray-200 rounded-full h-[9px] ">
                                <div class="bg-[#f5df4e] h-[9px] rounded-s-full w-[80%]"></div>
                            </div>
                        </div>

                        <div className='no3 mb-5'>
                            <div class="flex justify-between mb-3 mt-10">
                                <span class="text-base font-medium  ">Bootstrap</span>
                                <span class="text-sm font-medium  ">95%</span>
                            </div>
                            <div class="w-[100%] bg-gray-200 rounded-full h-[9px] mb-5">
                                <div class="bg-[#f5df4e] h-[9px] rounded-s-full  w-[95%]"></div>
                            </div>
                        </div>
                    </div>





                </div>

            </section>

        </>
    )
}

export default Resume