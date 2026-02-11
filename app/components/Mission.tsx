"use client"

import Image from "next/image";
import SectionPill from './ui/sectionPill';
import ReviewSection from "./ui/ReviewSection";
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <div id="about" className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col-reverse lg:flex-row py-8 sm:py-10 md:py-12 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 w-full overflow-x-hidden'>
        <motion.div 
          className='relative h-75 sm:h-100 md:h-125 lg:h-162.25 w-full lg:w-[40%] rounded-3xl'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
            <Image src={"/ship.svg"} alt="our mission" fill className="object-contain"/>
        </motion.div>

        <motion.div 
          className="w-full lg:w-[55%] flex flex-col justify-between gap-8 lg:gap-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
            <SectionPill 
                text="Our Mission" 
                position="left" 
                title="Dedicated to Building technology that works for your business" 
                subTitle="We turn complex business problems into scalable digital products through strategy, design, and engineering;  from idea to growth."
            />

            <ReviewSection />
        </motion.div>

    </div>
  )
}

export default Mission