"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ServiceCardType {
  image: string;
  title: string;
  subTitle: string;
}

const ServiceCard = ({ image, title, subTitle }: ServiceCardType) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: {
          y: 0,
          boxShadow: "0px 0px 0px rgba(0,0,0,0)",
        },
        hover: {
          y: -8,
          boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
        },
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full h-fit bg-white border border-[#F0E1E1] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-4 sm:p-5 flex flex-col gap-3 sm:gap-4"
    >
      {/* Image wrapper */}
      <div className="w-full h-fit p-3 sm:p-4 bg-linear-to-br from-[#8FC8C8] via-[#7BFFFF] to-[#8FF0F0C2] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden">
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.08 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-[200px] sm:h-[250px] md:h-59.25 relative"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-[14px] sm:rounded-[16px] md:rounded-[20px]"
          />
        </motion.div>
      </div>

      {/* Text */}
      <motion.div
        variants={{
          rest: { y: 0, opacity: 1 },
          hover: { y: -4, opacity: 0.9 },
        }}
        transition={{ duration: 0.3 }}
        className="space-y-1 sm:space-y-2"
      >
        <h3 className="font-medium text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] leading-tight">
          {title}
        </h3>
        <p className="text-[14px] sm:text-[15px] md:text-base leading-relaxed">
          {subTitle}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;