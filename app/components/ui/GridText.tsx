"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface GridTextProp {
  title: string;
  subTitle: string;
}

const textVariants: Variants = {
  rest: { y: 0, opacity: 1 },
  hover: { y: -4, opacity: 0.95, transition: { duration: 0.3, ease: "easeOut" } },
};

const GridText = ({ title, subTitle }: GridTextProp) => {
  return (
    <motion.div variants={textVariants} className="lg:space-y-2">
      <motion.h3 className="font-medium text-[24px]">{title}</motion.h3>
      <motion.p className="text-[#6F6F6F] text-base">{subTitle}</motion.p>
    </motion.div>
  );
};

export default GridText;
