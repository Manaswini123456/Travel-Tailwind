import React from 'react'

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='w-full bg-gray-200 py-16'>
      <div className='max-w-[1500px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>BEACHES.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' id='iconface'/>
            <FaTwitter className='icon' id='icontwit'/>
            <FaYoutube className='icon' id='iconyou'/>
            <FaPinterest className='icon' id='iconinter' />
            <FaInstagram className='icon' id='iconinst' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex '>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
