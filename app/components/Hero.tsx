"use client";
import Image from "next/image";
import QuoteButton from "./ui/QuoteButton";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <div className="w-full pt-16 sm:pt-8 md:pt-12">
      <div className="h-fit w-full relative flex items-center flex-col text-center gap-6 sm:gap-8 md:gap-10">
        <motion.div
          className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] flex flex-col items-center gap-6 sm:gap-4 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[71px] tracking-tighter leading-tight sm:leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            End-to-end product development for{" "}
            <span className="bg-[#70F8F847] relative border border-[#008080] text-cyan-900 px-2 py-0 inline-block">
              modern
              <div className="h-2 lg:h-5 w-2 lg:w-5 absolute -top-1.25 -left-1.25 lg:-left-2.5 rounded-full bg-linear-to-b from-[#008080] to-[#001A1A]"></div>
              <div className="h-2 lg:h-5 w-2 lg:w-5 absolute -top-1.25 -right-1.25 lg:-right-2.5 rounded-full bg-linear-to-b from-[#008080] to-[#001A1A]"></div>
              <div className="h-2 lg:h-5 w-2 lg:w-5 absolute -bottom-1.25 -right-1.25 lg:-right-2.5 rounded-full bg-linear-to-b from-[#008080] to-[#001A1A]"></div>
              <div className="h-2 lg:h-5 w-2 lg:w-5 absolute -bottom-1.25 -left-1.25 lg:-left-2.5 rounded-full bg-linear-to-b from-[#008080] to-[#001A1A]"></div>
            </span>{" "}
            businesses
          </motion.h3>

          <motion.p
            className="text-[16px] sm:text-[18px] md:text-[20px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Novtryx helps startups and enterprises design, build, and launch
            high-performance software — from idea to production.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <QuoteButton />
          </motion.div>
        </motion.div>

        <motion.div
          className="h-50 w-full sm:h-100 sm:w-150 md:h-125 md:w-187.5 lg:h-95.25 lg:w-230.25 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Image
            src="/updated-hero.svg"
            alt="hero"
            fill
            className="object-cover absolute inset-0"
          />

          <motion.div
            className="h-full w-full flex justify-center -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="h-[80%] w-[80%] bg-[#A1FFFF] -z-10 blur-3xl rounded-t-full"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-7 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] h-full absolute -z-20 bg-linear-to-t from-[#026868]/60 to-white gap-px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
