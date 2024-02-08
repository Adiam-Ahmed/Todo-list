import React from 'react'

const Email = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
    <div className='lg:col-span-2 my-4'>
       <h1 className='md:text-4xl sm:text-3xl text-2xl'>ffdgkvv</h1> 
       <p>sign up fou newsletter</p>
    </div>
    <div className='my-4'>
    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
        <input className ="p-3 flex w-full rounded-md text-black"type='email' placeholder="eneter ur email"name ="" id =""/>
        <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium ml-4 my-6  px-6 py-3 '>Notify Me</button>
    </div>
     <p>We care about the protection of data. <span className='text-[#00df9a]'>Read our privacy Policy </span></p>
    </div>
    </div>
    </div>
  )
}

export default Email