"use client";

import Image from "next/image";
import React from "react";
import GridText from "./GridText";
import { GoStar } from "react-icons/go";
import { motion, Variants } from "framer-motion";

/* Motion config */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const GridSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 grid-rows-auto lg:grid-rows-2 gap-3 sm:gap-4"
    >
      {/* 1️⃣ Product-first */}
      <motion.div
        variants={card}
        whileHover={{ y: -6, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
        className="w-full h-72 sm:h-80 md:h-96 grid grid-cols-1 sm:grid-cols-8 bg-white rounded-xl sm:rounded-2xl col-span-1 sm:col-span-2 lg:col-span-5 overflow-hidden"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-48 sm:h-full relative col-span-1 sm:col-span-3"
        >
          <Image
            src="/product-first.svg"
            alt="product first"
            fill
            className="object-cover rounded-t-xl sm:rounded-l-2xl sm:rounded-tr-none"
          />
        </motion.div>
        <div className="col-span-1 sm:col-span-5 flex items-end py-4 px-4 sm:pl-4 sm:pr-6">
          <GridText
            title="Product-first approach"
            subTitle="We don't just code: we build real products."
          />
        </div>
      </motion.div>

      {/* 2️⃣ Stats */}
      <motion.div
        variants={card}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-72 sm:h-80 md:h-96 bg-white rounded-xl sm:rounded-2xl col-span-1 lg:col-span-3 flex flex-col items-center justify-center gap-3 text-center p-4"
      >
        <motion.div 
          whileHover={{ rotate: 8 }} 
          className="h-10 w-10 sm:h-12 sm:w-12 bg-white rounded-full flex items-center justify-center shadow-md"
        >
          <GoStar size={20} className="sm:w-6 sm:h-6" color="#008080" />
        </motion.div>
        <motion.h1
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-medium text-[36px] sm:text-[40px]"
        >
          98%
        </motion.h1>
        <GridText title="Client Satisfaction Rate" subTitle="We don't disappear after launch." />
      </motion.div>

      {/* 3️⃣ Agile */}
      <motion.div
        variants={card}
        whileHover={{ y: -6, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
        className="w-full h-72 sm:h-[600px] lg:h-full grid grid-rows-1 sm:grid-rows-8 bg-white rounded-xl sm:rounded-2xl col-span-1 sm:col-span-2 lg:col-span-4 lg:row-span-2 overflow-hidden"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="row-span-1 sm:row-span-6 w-full h-48 sm:h-full relative"
        >
          <Image src="/agile.svg" alt="agile" fill className="object-cover rounded-t-xl sm:rounded-t-2xl" />
        </motion.div>
        <div className="row-span-1 sm:row-span-2 flex items-center py-4 px-4 sm:pl-4 sm:pr-6">
          <GridText title="Agile & transparent" subTitle="You always know what's happening." />
        </div>
      </motion.div>

      {/* 4️⃣ Image only */}
      <motion.div
        variants={card}
        whileHover={{ y: -6, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
        className="w-full h-72 sm:h-80 md:h-96 bg-white rounded-xl sm:rounded-2xl col-span-1 lg:col-span-3 overflow-hidden"
      >
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative"
        >
          <Image src="/choose1.svg" alt="choose" fill className="object-cover rounded-xl sm:rounded-2xl" />
        </motion.div>
      </motion.div>

      {/* 5️⃣ Scalable */}
      <motion.div
        variants={card}
        whileHover={{ y: -6, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
        className="w-full h-72 sm:h-80 md:h-96 grid grid-cols-1 sm:grid-cols-8 bg-white rounded-xl sm:rounded-2xl col-span-1 sm:col-span-2 lg:col-span-5 overflow-hidden"
      >
        <div className="col-span-1 sm:col-span-5 flex items-end py-4 px-4 sm:pl-4 sm:pr-6 order-2 sm:order-1">
          <GridText title="Scalable architecture" subTitle="Built to grow, not to break." />
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-48 sm:h-full relative col-span-1 sm:col-span-3 order-1 sm:order-2"
        >
          <Image src="/scalable.svg" alt="scalable" fill className="object-cover rounded-t-xl sm:rounded-r-2xl sm:rounded-tl-none" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GridSection;