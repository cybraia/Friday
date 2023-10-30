import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://source.unsplash.com/Q6UehpkBSnQ'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://source.unsplash.com/Oh0pJxCXdj8'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://source.unsplash.com/YYt8aPiaCxg'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://source.unsplash.com/Awnib4OXGsI'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://source.unsplash.com/Q3qSVB2KsWg'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <a href="#joinwaitlist" >
          <button className='bg-black text-white border-black hover:shadow-xl'>Join Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Plan;
