"use client";

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectCardProps {
  category: string;
  testifierName: string;
  testifierRole: string;
  message: string;
  images: string[];
}

const ProjectCard = ({ 
  category, 
  testifierName, 
  testifierRole, 
  message, 
  images 
}: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide images every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

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
      className='h-auto lg:h-auto xl:h-144.25 w-full rounded-xl sm:rounded-2xl border-2 border-[#008080] shadow-lg grid grid-cols-1 lg:grid-cols-2 shadow-[#008080] p-4 sm:p-5 md:px-6 md:py-5 gap-4 lg:gap-6'
    >
      {/* Content Section */}
      <div className='flex flex-col justify-between py-2 sm:py-4 md:py-6 lg:pr-8 xl:pr-12 gap-6 lg:gap-8 order-2 lg:order-1'> 
        <motion.div 
          className='p-2 px-4 rounded-full bg-[#EDFAFA] border border-[#E2E0E0] w-fit'
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.3 }}
        >
          <p className='text-[14px] sm:text-[16px] md:text-[18px] font-medium'>{category}</p>
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
            <h3 className='font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]'>
              {testifierName}
            </h3>
            <p className='font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#6F6F6F]'>
              {testifierRole}
            </p>
          </span>

          <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#6F6F6F] leading-relaxed'>
            {message}
          </p>
        </motion.div>
      </div>

      {/* Image Slider Section */}
      <motion.div 
        className='w-full h-64 sm:h-80 md:h-96 lg:h-full min-h-75 relative rounded-xl sm:rounded-2xl overflow-hidden order-1 lg:order-2'
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.02 },
        }}
        transition={{ duration: 0.4 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative"
          >
            <Image 
              src={images[currentImageIndex]} 
              alt={`${category} project ${currentImageIndex + 1}`} 
              fill 
              className='object-cover rounded-xl sm:rounded-2xl' 
            />
          </motion.div>
        </AnimatePresence>

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-[#008080] w-6 sm:w-8' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
