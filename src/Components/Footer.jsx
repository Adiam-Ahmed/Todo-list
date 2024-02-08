import React from 'react'
import{
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
    <div>
    <h1 className="w-full text-3xl font-bold text-[#00df9a]">YENTASK</h1>
    <p className='py-4'>Made with 😭 by Adiam Ahmed <br/>bala blala bals </p>
    <div className='flex justify-between md:w-{75%} my-6'>
        <FaFacebookSquare size= {30} />
        <FaInstagram  size= {30} />
        <FaTwitterSquare size= {30} />
        <FaGithubSquare size= {30} />
        <FaDribbbleSquare  size= {30}/>
    </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
    <h6 className='font-medium text-gray-400'>ContactUs</h6>
    <ul>
        <li className='py-2  text-sm'>Data</li>
        <li className='py-2 text-sm'>Task</li>
        <li className='py-2 text-sm'>Marketing</li>
        <li className='py-2 text-sm'>ContactUs</li>
    </ul>
    </div>
    <div>
    <h6 className='font-medium text-gray-400'>Support</h6>
    <ul>
        <li className='py-2  text-sm'>pricing</li>
        <li className='py-2 text-sm'>How to use</li>
        <li className='py-2 text-sm'>Docs</li>
        <li className='py-2 text-sm'>Legal</li>
    </ul>
    </div>
    <div>
    <h6 className='font-medium text-gray-400'>App</h6>
    <ul>
        <li className='py-2  text-sm'>About</li>
        <li className='py-2 text-sm'>Blog</li>
        <li className='py-2 text-sm'>Press</li>
        <li className='py-2 text-sm'>Careeres</li>
    </ul>
    </div>

    </div>

    </div>
  )
}

export default Footer