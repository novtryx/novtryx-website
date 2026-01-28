"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        boxShadow: "0px 18px 35px rgba(0,128,128,0.25)",
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full grid grid-cols-1 md:grid-cols-2 rounded-2xl border-2 border-[#008080] overflow-hidden"
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-col justify-between gap-4 p-6 md:p-8"
      >
        <div className="p-2 md:p-3 rounded-full bg-[#EDFAFA] border border-[#E2E0E0] w-fit">
          <p className="text-[18px] md:text-[20px] font-medium">SAAS Platform</p>
        </div>

        <div className="flex flex-col gap-2 md:gap-4">
          <span>
            <h3 className="font-semibold text-[20px] md:text-[24px]">David Michael</h3>
            <p className="font-medium text-[#6F6F6F] text-sm md:text-base">
              CEO - Glorywrist Watch
            </p>
          </span>

          <p className="text-[16px] md:text-[20px] text-[#6F6F6F]">
            Novtryx is just the last bus stop. Very fast in delivery projects and I love their working team. They delivered even more than expected. I’m glad I met with your team.
          </p>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <div className="w-full h-60 md:h-full relative">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative"
        >
          <Image
            src="/project.svg"
            alt="project"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
