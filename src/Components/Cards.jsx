import React from 'react'
import SquishyCard from "./Card"

const Cards = () => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
      };

    return (
        
        <div className='w-full py-[10rem] px-4 bg-white'>
        <div>
        <p className='text-[#00df9a] font-bold pt-1 text-center flex flex-col justify-center'>PRICING</p>
        <p className='text-center flex flex-col justify-center md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>The right price for you, whoever you are</p>
        <p className='text-center flex flex-col justify-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.</p>
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-18">
          <div className='w-full md:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg'>
          <SquishyCard
            onClick={handleButtonClick}
            plan="Pro"
            price="$299"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem."
          />
          </div>
          <div className='w-full md:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg'>
          <SquishyCard
            onClick={handleButtonClick}
            plan="Basic"
            price="$99"
            description="Another description for the Basic plan."
          />
          </div>
          <div className='w-full md:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg'>
          <SquishyCard
            onClick={handleButtonClick}
            plan="Premium"
            price="$499"
            description="Description for the Premium plan."
            />
          </div>
        </div>
        </div>
        </div>
    );
  };
  
  export default Cards;