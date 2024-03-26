
import React from 'react'
import './style.css'
import { IoIosColorPalette } from "react-icons/io";
import { LuMonitor } from "react-icons/lu";
import { FaPencilRuler } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";

function Services() {
    const NavItems = [
        {
            id: 1,
            icon: <IoIosColorPalette />,
            title: "Graphic Design",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        },
        {
            id: 2,
            icon: <LuMonitor />,
            title: "Web Design",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        },
        {
            id: 3,
            icon: <FaPencilRuler />,
            title: "UI/UX Design",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        },
        {
            id: 4,
            icon: <FaPaintbrush />,
            title: "App Design & Develop",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        },
        {
            id: 5,
            icon: <FaChartArea />,
            title: "Business Analysis",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        },
        {
            id: 6,
            icon: <FaBullhorn />,
            title: "SEO Marketing",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        },

    ]

    return (
        <>
            <section id='services' className='bg-[#f8f9fa] py-[104px] px-12'>
                <div className=' text-center ' >
                    <h2 className=' text-center bg-[#f5df4e] inline-block px-1'>What I Do?</h2>
                    <h1 className='text-4xl font-medium mt-6 mb-[100px]'>How I can help your next project</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-10'>
                    {
                        NavItems.map((item) => {
                            return <>
                                <div className=''>
                                    <span className='flex justify-center font-bold text-[#f5df4e] text-[60px]'>{item.icon}</span>
                                    <p className='text-center text-[24px] font-semibold my-3'>{item.title}</p>
                                    <p className='text-[#6c757d] text-center leading-7'>{item.content}</p>
                                </div>

                            </>
                        })
                    }
                </div>



            </section>
        </>

    )
}

export default Services