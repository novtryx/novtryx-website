import Image from 'next/image'
import React from 'react'
import QuoteButton from './ui/QuoteButton'

const Hero = () => {
  return (
    <div className='w-full  pt-12'>
      <div className='h-fit w-full relative flex items-center flex-col text-center  gap-10'>
        <div className='w-[65%] flex flex-col items-center gap-4'>
          <h3 className='text-[71px] tracking-tighter leading-19.25'>End-to-end product development for <span className=''>modern</span> businesses</h3>
          <p className='text-[20px] w-[60%]'>Novtryx helps startups and enterprises design, build, and launch high-performance software — from idea to production.</p>
          <QuoteButton />
        </div>
        <div className="h-95.25 w-230.25 relative  ">
          <Image
            src="/updated-hero.svg"
            alt="hero"
            fill
            className="object-cover absolute inset-0"
          />

          <div className='h-full w-full flex justify-center -z-10   '>
            <div className='h-[80%] w-[80%] bg-[#A1FFFF] -z-10  blur-3xl rounded-t-full'></div>

          </div>
        </div>
        <div className="grid grid-cols-7  w-[70%] h-full absolute -z-20 bg-linear-to-t from-[#026868]/60 to-white gap-px">
          <div className="   bg-white"></div>
          <div className="   bg-white"></div>
          <div className="   bg-white"></div>
          <div className="   bg-white"></div>
          <div className="   bg-white"></div>
          <div className="   bg-white"></div>
          <div className="   bg-white"></div>

        </div>

      </div>
    </div>
  )
}

export default Hero