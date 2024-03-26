
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Contact() {
    return (
        <>
            <section className='bg-[#f5df4e] px-12 py-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 '>
                    <div>
                        <h1 className='text-[40px] font-semibold mb-12'>Let's get in touch</h1>
                        <p className='text-[21px] mb-8'>I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
                        <h2 className='text-[21px] font-semibold mb-2'>Living In:</h2>
                        <p className='text-[17px] mb-6'>Rahim Yar Khan (RYK)</p>
                        <h2 className='text-[21px] font-semibold mb-2'>Call:</h2>
                        <p className='text-[17px] ' >(+92)3006705674</p>
                        <div className='icons flex text-3xl mt-16 gap-6 '>
                            <div className='text-[#4d555a] hover:text-[#46c1f6]'>
                                <a href="#"><FaTwitter /></a>
                            </div>
                            <div className='text-[#4d555a] hover:text-[#3b5999]'>
                                <a href="https://www.facebook.com/profile.php?id=100008192887421"><FaFacebook /></a>
                            </div>
                            <div className='text-[#4d555a] hover:text-[#e1306c]'>
                                <a href="https://www.instagram.com/mian_hamza74?igsh=MWlxanRuNW50MHV5NA%3D%3D&utm_source=qr "><FaInstagram /></a>
                            </div>
                            <div className='text-[#4d555a] hover:text-[#333333]'>
                                <a href="https://github.com/hamza5674"><FaGithub /></a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-[40px] font-semibold mb-12'>Estimate your Project?</h1>

                        <form action="#" className="space-y-8">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-[#212529] "
                                >
                                    What is Your Name:
                                </label>
                                <input
                                    type="name"
                                    id="name"
                                    className="border-b-2  border-[#212529] w-full bg-[#f5df4e] outline-none h-10"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-[#212529] "
                                >
                                    Your Email Address:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border-b-2  border-[#212529] w-full bg-[#f5df4e] outline-none h-10"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block  text-[#212529] "
                                >
                                    How can I Help you?
                                </label>
                                <textarea
                                    id="message"
                                    rows={3}
                                    className="border-b-2  border-[#212529] w-full bg-[#f5df4e] outline-none "
                                    defaultValue={""}
                                />
                            </div>
                            <div>
                                <a href="#" className='cursor-pointer text-white bg-black  text-[16px] px-10 py-3 border  inline-block border-transparent  hover:bg-[#252b33] hover:border-black hover:-translate-y-1 transition delay-150 duration-300 ease-in-out'>Send</a>
                            </div>
                        </form>



                    </div>


                </div>
            </section>
        </>
    )
}

export default Contact