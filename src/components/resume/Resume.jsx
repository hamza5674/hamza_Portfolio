
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
                            <h1 className='text-[21px] mb-2 font-medium'>Master in Computer Engineering</h1>
                            <p className='mb-2'>Harvard University / 2015 - 2017</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>

                            <h1 className='text-[21px] mb-2 font-medium mt-7'>Bachelor in Computer Engineering</h1>
                            <p className='mb-2'>University of California / 2014 - 2015</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>

                            <h1 className='text-[21px] mb-2 font-medium mt-7'>International Science</h1>
                            <p className='mb-2'>Harvard University / 2013 - 2014</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>

                        </div>
                    </div>

                    <div>
                        <h1 className='text-[28px] font-semibold mb-5'>My Experience</h1>
                        <div className='border-l-[2px] border-[#f5df4e] ps-4'>
                            <h1 className='text-[21px] mb-2 font-medium'>Sr. Font End Developer</h1>
                            <p className='mb-2'>Apple Inc / 2020 - current</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>

                            <h1 className='text-[21px] mb-2 font-medium mt-7'>Jr. Font End Developer</h1>
                            <p className='mb-2'>Dribbble Inc / 2018 - 2020</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>

                            <h1 className='text-[21px] mb-2 font-medium mt-7'>HTML Developer</h1>
                            <p className='mb-2'>Adobe Inc / 2017 - 2018</p>
                            <p className='text-[#6c757d] mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <span className=''><hr /></span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-8'>
                    <a href="#" className='cursor-pointer  border-black  mt-5 text-[16px] px-10 py-3 border-[2px]  inline-block border-transparent hover:text-white hover:bg-[#252b33] hover:border-black hover:-translate-y-1 transition delay-150 duration-300 ease-in-out'>Download CV</a>
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