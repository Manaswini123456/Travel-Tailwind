//since stacking things thus we are using flex-col
import React from 'react'
import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';

const Navbar = () => {
  const [nav,setnav] = useState(false)
  const [logo,setlogo] = useState(false)
  const handleNav = ()=>{
    setnav(!nav)
    setlogo(!logo)

  }
  return (
    <div className=" flex w-full text-3xl justify-between items-center h-20 px-4 absolute z-10 text-white">
        <div>
            <h1  onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travels</li>
            <li>Views</li>
            <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <BsPerson className='mr-2' size={20} />
            <BiSearch size={20} />
        </div>
        <div onClick = {handleNav} className='md:hidden z-10'>
          {nav?<AiOutlineClose className='text-black' size={20}/> :<HiOutlineMenuAlt4 size={20}/>}
        </div>
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1 >BEACHES.</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travels</li>
            <li className='border-b'>Views</li>
            <li className='border-b'>Book</li>
            <div className='flex flex-col'> 
              <button className='my-6'>Search</button>
              <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
              <FaFacebook className='icon' id='iconface'/>
              <FaTwitter className='icon' id='icontwit'/>
              <FaInstagram className='icon' id='iconinst'/>
              <FaYoutube className='icon' id='iconyou'/>
              <FaPinterest className='icon' id='iconinter'/>
            </div>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
