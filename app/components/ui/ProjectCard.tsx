"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = () => {
  return (
    <motion.div 
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: {
          y: 0,
          boxShadow: "0px 0px 20px rgba(0, 128, 128, 0.3)",
        },
        hover: {
          y: -8,
          boxShadow: "0px 20px 40px rgba(0, 128, 128, 0.4)",
        },
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className='h-auto lg:h-144.25 w-full rounded-xl sm:rounded-2xl border-2 border-[#008080] shadow-lg grid grid-cols-1 lg:grid-cols-2 shadow-[#008080] p-4 sm:p-5 md:px-6 md:py-2 gap-4 lg:gap-0'
    >
        <div className='flex flex-col justify-between py-4 sm:py-5 md:py-6 lg:pr-24 gap-6 lg:gap-0 order-2 lg:order-1'> 
            <motion.div 
              className='p-2 rounded-full bg-[#EDFAFA] border border-[#E2E0E0] w-fit'
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 },
              }}
              transition={{ duration: 0.3 }}
            >
                <p className='text-[16px] sm:text-[18px] md:text-[20px]'>SAAS Platform</p>
            </motion.div>

            <motion.div 
              className='flex flex-col gap-3 sm:gap-4'
              variants={{
                rest: { y: 0 },
                hover: { y: -4 },
              }}
              transition={{ duration: 0.3 }}
            >
                <span>
                    <h3 className='font-semibold text-[20px] sm:text-[22px] md:text-[24px]'>David Michael</h3>
                    <p className='font-medium text-[14px] sm:text-[15px] md:text-[16px] text-[#6F6F6F]'>CEO -  Glorywrist watch</p>
                </span>

                <p className='text-[16px] sm:text-[18px] md:text-[20px] text-[#6F6F6F] leading-relaxed'>
                  {`Novtryx is just the last bus stop. Very fast in delivery projects and I love their working team. They delivered even more than expected. I'm glad I met with your team`}
                </p>
            </motion.div>
        </div>

        <motion.div 
          className='w-full h-64 sm:h-80 md:h-96 lg:h-full relative rounded-xl sm:rounded-2xl overflow-hidden order-1 lg:order-2'
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.4 }}
        >
            <Image src={"/project.svg"} alt='project' fill className='object-cover rounded-xl sm:rounded-2xl' />
        </motion.div>
    </motion.div>
  )
}

export default ProjectCard