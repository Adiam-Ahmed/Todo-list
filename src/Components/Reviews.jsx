import React from 'react';

const Reviews = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-black'>
      <div>
        <p className='text-[#00df9a] font-bold pt-1 text-center flex flex-col justify-center'>TESTIMONIALS</p>
        <p className='text-white text-center flex flex-col justify-center md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Join our empowered community</p>
        <p className='text-center flex flex-col justify-center text-white md:text-3xl sm:text-2xl text-1xl font-bold md:py-6 '>Yentask has helped a lot of people boost their productivity and improve their quality of life.</p>


        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-18 mb-8">
      
          <div className="mr-8">
            <p className='text-white'>
              "Zentask has transformed the way I manage projects. The intuitive interface makes task creation and updates a breeze.
              Deleting completed tasks feels like a small victory each time. Zentask is my secret weapon for maintaining project Zen."
            </p>
            <h1 className='text-[#00df9a]'>Sarah Thompson, Project Manager</h1>
          </div>

          <div className="mr-8">
            <p className='text-white'>
              "As a designer, attention to detail is crucial. Zentask's seamless task updating allows me to refine project details effortlessly.
              It's my go-to tool for staying organized and focused in the creative chaos."
            </p>
            <h1 className="text-[#00df9a]">James Mitchell, Freelance Designer</h1>
          </div>

     
          <div className="mr-8">
            <p className='text-white'>
              "Running multiple businesses demands efficiency. Zentask has been a game-changer, streamlining task creation and providing clarity in task deletion.
              It's my trusted ally in the entrepreneurial journey."
            </p>
            <h1 className="text-[#00df9a]">Emily Carter, Entrepreneur</h1>
          </div>
        </div>


        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-18">

        <div className="mr-8">
            <p className='text-white'>
              "Being a student and working part-time can be overwhelming, but Zentask simplifies everything.
              Creating study tasks, deleting completed assignments, and updating schedules—all in one place. Zentask is a lifesaver!"
            </p>
            <h1 className="text-[#00df9a]">Alex Rodriguez, Student and Part-Time Worker</h1>
          </div>

          
          <div className="mr-8">
            <p className='text-white'>
              "Zentask has seamlessly integrated into my tech-driven workflow. Task creation is quick, updates are straightforward, and the option to delete outdated tasks keeps my to-do list clean.
              It's a must-have for any IT professional."
            </p>
            <h1 className="text-[#00df9a]">David Harper, IT Specialist</h1>
          </div>

   
          <div className="mr-8">
            <p className='text-white'>
              "Zentask understands the chaos of parenting. It's perfect for creating daily tasks, updating routines on the fly, and, let's be honest, deleting those tasks that just won't happen.
              Zentask keeps my household in check with ease."
            </p>
            <h1 className="text-[#00df9a]">Olivia Simmons, Stay-at-Home Parent</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
