import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex items-center flex-col text-center pt-12 gap-10'>
        <div className='w-[65%] flex flex-col items-center gap-4'>
            <h3 className='text-[71px] tracking-tighter leading-19.25'>End-to-end product development for modern businesses</h3>
            <p className='text-[20px] w-[60%]'>Novtryx helps startups and enterprises design, build, and launch high-performance software — from idea to production.</p>
            <button className=' bg-linear-to-r from-[#008080] to-[#001A1A] w-55 h-12.25 rounded-xl text-white'>Get a Quote</button>
        </div>
        <div className='h-97.25 w-235.25 relative  '>
            <Image src="/hero-image.svg" alt="hero" fill className='object-contain' />
        </div>
    </div>
  )
}

export default Hero