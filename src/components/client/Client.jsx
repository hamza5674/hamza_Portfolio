
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic1 from '../client/p1.jpg'
import pic2 from '../client/p2.jpg'
import pic3 from '../client/p3.jpg'
import pic4 from '../client/p4.jpg'


function Client() {

    
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
   
    };



    return (
        <>
            <div className='text-center px-12 py-12  bg-[#939597]'>
                <div className=' text-center'>
                    <h2 className=' text-center bg-[#f5df4e] inline-block px-1'>Client Speak</h2>
                    <h1 className='text-4xl font-medium mt-4 mb-8 text-white'>What Some of my Clients Say</h1>
                </div>
                <div className=' md:px-40'>
                    <Slider {...settings} className=''>
                        <div className='mt-10'>
                            <h3 className='text-[20px] text-white '> “Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure. simply dummy text of the printing and typesetting industry.”</h3>
                            <div className='flex justify-center mt-8'>
                                <img src={pic1} alt="" className='w-20 h-20 rounded-full object-cover' />
                            </div>
                            <p className='text-white font-medium'>Patrick Cary</p>
                            <p className='text-[#dee3e4]'>Freelancer from USA</p>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-[20px] text-white '>  “I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure. simply dummy text of the printing and typesetting industry.”</h3>
                            <div className='flex justify-center mt-8'>
                                <img src={pic2} alt="" className='w-20 h-20 rounded-full object-cover' />
                            </div>
                            <p className='text-white font-medium'>Dennis Jacques</p>
                            <p className='text-[#dee3e4]'>Noon Inc</p>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-[20px] text-white '> “Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”</h3>
                            <div className='flex justify-center mt-8'>
                                <img src={pic3} alt="" className='w-20 h-20 rounded-full object-cover' />
                            </div>
                            <p className='text-white font-medium'>Jay Shah</p>
                            <p className='text-[#dee3e4]'>Founder at Icomatic Pvt Ltd</p>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-[20px] text-white '> “I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. simply dummy text of the printing and typesetting industry. Excellent.”</h3>
                            <div className='flex justify-center mt-8'>
                                <img src={pic4} alt="" className='w-20 h-20 rounded-full object-cover' />
                            </div>
                            <p className='text-white font-medium'>Saba Load</p>
                            <p className='text-[#dee3e4]'>From pakistan</p>
                        </div>

                    </Slider>
                </div>

            </div>
        </>
    )
}

export default Client