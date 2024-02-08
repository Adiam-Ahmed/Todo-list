import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className= "text-white">
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
         <p className='text-[#00df9a] font-bold pt-2'>YEN TASK Manager</p>
         <h1 className='md:text-8xl sm:text-7xl text-4xl font-bold md:py-6'>IS YOU</h1>
         <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>efficient task management </p>
            <Typed 
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pt-2'
            strings={["to","help","YOU"]}
            typeSpeed={150} backSpeed={140} loop/>
         </div>
          <p className='md:text-2xl text-xl font-bold text-gray-300 '>Yen Task Manager simplifies task management</p>
          <button className='bg-[#00df9a] w-(200px) rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero