"use client";

import Image from "next/image";
import React from "react";
import GridText from "./GridText";
import { GoStar } from "react-icons/go";
import { motion, Variants } from "framer-motion";

/* ================= MOTION CONFIG ================= */
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

/* ================= COMPONENT ================= */
const GridSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4"
    >
      {/* 1️⃣ Product-first */}
      <motion.div
        variants={card}
        whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
        className="col-span-12 md:col-span-5 h-[300px] sm:h-[350px] md:h-[380px] grid grid-cols-8 bg-white rounded-2xl overflow-hidden"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative col-span-3 h-full"
        >
          <Image src="/product-first.svg" alt="product first" fill className="object-cover rounded-l-2xl" />
        </motion.div>

        <div className="col-span-5 flex items-end py-4 pl-4 pr-6">
          <GridText
            title="Product-first approach"
            subTitle="We don’t just code: we build real products."
          />
        </div>
      </motion.div>

      {/* 2️⃣ Stats */}
      <motion.div
        variants={card}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="col-span-12 sm:col-span-2 md:col-span-3 h-[300px] sm:h-[350px] md:h-[380px] bg-white rounded-2xl flex flex-col items-center justify-center gap-3 text-center p-4"
      >
        <motion.div whileHover={{ rotate: 8 }} className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md">
          <GoStar size={24} color="#008080" />
        </motion.div>

        <motion.h1
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-medium text-[36px] sm:text-[40px]"
        >
          98%
        </motion.h1>

        <GridText
          title="Client Satisfaction Rate"
          subTitle="We don’t disappear after launch."
        />
      </motion.div>

      {/* 3️⃣ Agile */}
      <motion.div
        variants={card}
        whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
        className="col-span-12 md:col-span-4 row-span-1 sm:row-span-2 h-[300px] sm:h-[350px] md:h-[380px] grid grid-rows-8 bg-white rounded-2xl overflow-hidden"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="row-span-6 relative"
        >
          <Image src="/agile.svg" alt="agile" fill className="object-cover rounded-t-2xl" />
        </motion.div>
        <div className="row-span-2 flex items-center py-4 pl-4 pr-6">
          <GridText
            title="Agile & transparent"
            subTitle="You always know what’s happening."
          />
        </div>
      </motion.div>

      {/* 4️⃣ Image only */}
      <motion.div
        variants={card}
        whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
        className="col-span-12 sm:col-span-2 md:col-span-3 h-[300px] sm:h-[350px] md:h-[380px] rounded-2xl overflow-hidden"
      >
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full"
        >
          <Image src="/choose1.svg" alt="choose" fill className="object-cover rounded-2xl" />
        </motion.div>
      </motion.div>

      {/* 5️⃣ Scalable */}
      <motion.div
        variants={card}
        whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
        className="col-span-12 md:col-span-5 h-[300px] sm:h-[350px] md:h-[380px] grid grid-cols-8 bg-white rounded-2xl overflow-hidden"
      >
        <div className="col-span-5 flex items-end py-4 pl-4 pr-6">
          <GridText
            title="Scalable architecture"
            subTitle="Built to grow, not to break."
          />
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-3 relative h-full w-full"
        >
          <Image src="/scalable.svg" alt="scalable" fill className="object-cover rounded-r-2xl" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GridSection;
