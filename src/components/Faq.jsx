
import React from 'react'
import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const accordionItems = [
        {
            icon: <RiArrowDropDownLine />, title: 'What is Joint-X?', content:
                "Welcome to Joint-X, a leading IT company driving innovation and excellence in the digital realm. With a dedicated team of experts, we deliver tailored IT solutions to empower businesses for success. From custom software development to robust cybersecurity measures, we're committed to shaping a future where technology fuels growth and transformation. Join us at Joint-X and unlock your organization's full potential in the digital age."
        },
        { icon: <RiArrowDropDownLine />, title: 'How Can I Help You?', content: "Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo." },
        { icon: <RiArrowDropDownLine />, title: 'Simple process for workflow?', content: 'Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.' },
        {
            icon: <RiArrowDropDownLine />, title: 'Why responsive one page template?', content: " A responsive one-page template is a web design approach where all the content of a website is presented on a single page that adjusts its layout and appearance based on the device's screen size. This template offers a simplified user experience by condensing navigation and content into a single scrolling page, making it easier for visitors to find information without clicking through multiple pages."
        },
    ];
    return (
        <>
            <section className='bg-white  px-12'>
                <div className='text-start'>
                    <h2 className='  bg-[#f5df4e] inline-block px-1'>FAQ</h2>
                    <h1 className='text-4xl font-medium mt-4 mb-8'>Have any questions?</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 '>
                    <div className="max-w-lg pt-4">
                        {accordionItems.map((item, index) => (
                            <div key={index} className=" overflow-hidden mb-2 ">
                                <button
                                    className="w-full text-left font-medium py-6 text-[20px]  focus:outline-none flex border-b-2 text-[#6c757d]"
                                    onClick={() => handleToggle(index)}
                                >
                                    <p className='text-3xl'>{item.icon}</p>
                                    {item.title}

                                </button>
                                {openIndex === index && (
                                    <div className="py-4 ms-6">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div>
                        <img src="	https://harnishdesign.net/demo/react/callum/demo/images/faq.png" alt="" className='w-[100%] h-[70%]' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq