"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center text-center pt-12 gap-10 px-4 md:px-0">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-[65%] flex flex-col items-center gap-4"
      >
        <h3 className="text-[42px] sm:text-[55px] md:text-[71px] tracking-tighter leading-snug sm:leading-[4.5rem] md:leading-[4.8rem]">
          End-to-end product development for modern businesses
        </h3>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] w-full sm:w-[80%] md:w-[60%]">
          Novtryx helps startups and enterprises design, build, and launch
          high-performance software — from idea to production.
        </p>
        <button className="bg-linear-to-r from-[#008080] to-[#001A1A] px-6 py-3 sm:w-44 sm:h-12 rounded-xl text-white text-base sm:text-lg">
          Get a Quote
        </button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[900px] h-[250px] sm:h-[350px] md:h-[390px] relative"
      >
        <Image
          src="/hero-image.svg"
          alt="hero"
          fill
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
