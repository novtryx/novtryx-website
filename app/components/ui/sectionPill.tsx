"use client";

import React from "react";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

interface PillType {
  text: string;
  position?: "left" | "right";
  title: string;
  subTitle: string;
}

const SectionPill = ({ text, position, title, subTitle }: PillType) => {
  return (
    <div
      className={`flex flex-col gap-3 ${
        position ? `lg:items-${position} text-${position} items-center` : "items-center text-center"
      }`}
    >
      {/* PILL TAG */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#008080] bg-[#E8FFFF] w-fit px-3 py-2 border-2 border-[#008080] rounded-full flex gap-1 items-center justify-center text-[16px] sm:text-[18px]"
      >
        <GoDotFill size={20} />
        <p className="font-medium">{text}</p>
      </motion.div>

      {/* TITLE & SUBTITLE */}
      <div className="space-y-2 sm:space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[28px] sm:text-[32px] md:text-[40px] font-medium leading-snug"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#6F6F6F] text-[16px] sm:text-[18px] md:text-[20px] font-normal px-2 sm:px-0"
        >
          {subTitle}
        </motion.p>
      </div>
    </div>
  );
};

export default SectionPill;
