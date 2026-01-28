"use client";

import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface BuildCardProps {
  index: number;
  Icon: IconType;
  title: string;
  subTitle: string;
}

const BuildCard = ({ Icon, title, subTitle, index }: BuildCardProps) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: {
          backgroundColor: "#ffffff",
          color: "#151515",
        },
        hover: {
          backgroundColor: "#151515",
          color: "#ffffff",
        },
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-fit md:h-71.25 w-full rounded-2xl px-7 py-6 flex flex-col gap-10 border border-[#DBDBDB]"
    >
      <div className="flex items-center justify-between">
        {/* Icon */}
        <motion.div
          variants={{
            rest: {
              backgroundColor: "#008080",
              color: "#ffffff",
              scale: 1,
            },
            hover: {
              backgroundColor: "#ffffff",
              color: "#151515",
              scale: 1.1,
            },
          }}
          transition={{ duration: 0.3 }}
          className="h-12 w-12 rounded-lg flex items-center justify-center"
        >
          <Icon size={20} />
        </motion.div>

        {/* Index */}
        <motion.h1
          variants={{
            rest: {
              scale: 1,
              opacity: 1,
              color: "#E3E3E3",
            },
            hover: {
              scale: 1.05,
              opacity: 0.6,
              color: "#ffffff",
            },
          }}
          transition={{ duration: 0.3 }}
          className="text-[64px] font-semibold cursor-default"
        >
          {index}
        </motion.h1>

      </div>

      <div className="space-y-1">
        <h2 className="font-medium text-[24px]">{title}</h2>
        <p className="text-sm opacity-80">{subTitle}</p>
      </div>
    </motion.div>
  );
};

export default BuildCard;
