import React, { useState, useEffect } from 'react';
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { Button, Drawer } from 'antd';
import { RxHamburgerMenu } from "react-icons/rx";
import { SiSitepoint } from "react-icons/si";
// import image1 from "../../images/logo1.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {

  const [open, setOpen] = useState(false);

  const NavItems = [
    {
      id: 1,
      title: "HOME",
      section: "#home"
    },
    {
      id: 2,
      title: "ABOUT",
      section: "#about"
    },
    {
      id: 3,
      title: "SERVICES",
      section: "#services"
    },
    {
      id: 4,
      title: "RESUME",
      section: "#resume"
    },
    {
      id: 5,
      title: "PORTFOLIO",
      section: "#portfolio"
    },
    {
      id: 6,
      title: "FAQ",
      section: "#faq"
    },
    {
      id: 7,
      title: "CLIENT",
      section: "#client"
    },
    {
      id: 8,
      title: "CONTACT",
      section: "#contact"
    },
  ]

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };






  return (
    <>
      {/* <Button type="primary" onClick={showDrawer} className='text-2xl mt-2 md:hidden text-black'>
        <RxHamburgerMenu />
      </Button> */}
      <div className='flex justify-between'>
        <div className='hedaing pt-3  me-auto '>
          {/* <img src={image1} alt="" className='w-[65px]' /> */}
          <h1 className='font-bold text-[20px] pt-3 text-[#252b33]'>JointX</h1>

        </div>
        <div className='hidden md:block me-auto '>
          {
            NavItems.map((item) => {
              return <a href={item.section} className='m-2 px-2 pt-5 nav  text-[#252b33] font-semibold text-md  inline-block'> {item.title} </a>
            })
          }
        </div>

        <div className='icons flex text-xl pt-7 pr-7 gap-6'>
          <div className='text-[#4d555a] hover:text-[#3b5999]'>
            <FaFacebook />
          </div>
          <div className='text-[#4d555a] hover:text-[#46c1f6]'>
            <FaTwitter />
          </div>
          <div className='text-[#4d555a] hover:text-[#e1306c]'>
            <FaInstagram />
          </div>
        </div>
        <Button type="primary" onClick={showDrawer} className='text-2xl mt-4 md:hidden text-black'>
        <RxHamburgerMenu />
      </Button>

      </div>
     


      <Drawer title="Navbar" onClose={onClose} open={open} >
        <div className=''>
          {
            NavItems.map((item) => {
              return <a href={item.section} className='text-black dark:text-white p-3 px-5 hover:text-red-600  text-lg block'> {item.title} </a>
            })
          }
        </div>
      </Drawer>
    </>
  )
}

export default Navbar







