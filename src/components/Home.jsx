import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from "react-scroll";
export const Home = () => {
  return (
    <div name="home" className='w-full h-screen  bg-[#0a192f]'>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600 font-bold text-2xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>YASSINE CHAMAM</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>A passionate Front-End React Developer</h2>
            <p className='text-[#8892b0] py-4 '>I'm a Front-end developer specializing in building and designing exceptional digital experiences. Currently, I'am focused on building responsive Front-end web applications.</p>
            <div>
                
                <Link to='work' smooth={true} duration={500}>
                  <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work <HiArrowNarrowRight className='ml-3'/></button>
                </Link>
            </div>
        </div>
    </div>
  )
}
