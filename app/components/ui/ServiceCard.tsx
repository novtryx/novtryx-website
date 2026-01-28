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
        rest: { y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
        hover: { y: -8, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" },
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full h-fit bg-white border border-[#F0E1E1] rounded-[20px] p-4 sm:p-5 flex flex-col gap-4"
    >
      {/* Image Wrapper */}
      <div className="w-full h-56 sm:h-60 md:h-64 p-2 sm:p-4 bg-linear-to-br from-[#8FC8C8] via-[#7BFFFF] to-[#8FF0F0C2] rounded-[20px] overflow-hidden">
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.08 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-[20px]"
          />
        </motion.div>
      </div>

      {/* Text */}
      <motion.div
        variants={{
          rest: { y: 0, opacity: 1 },
          hover: { y: -4, opacity: 0.95 },
        }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-1"
      >
        <h3 className="font-medium text-[24px] sm:text-[28px] md:text-[32px]">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-base text-[#555]">{subTitle}</p>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
