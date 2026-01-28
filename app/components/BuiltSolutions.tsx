"use client";

import React from "react";
import SectionPill from "./ui/sectionPill";
import ProjectsContainer from "./ui/ProjectsContainer";
import { motion } from "framer-motion";

const BuiltSolutions = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 px-6 md:px-12 lg:px-24 flex flex-col items-center gap-12 md:gap-17.5"
    >
      {/* Section Title */}
      <div className="w-full md:w-3/5 text-center md:text-left">
        <SectionPill
          text="Built Solutions"
          title="Solutions We Bring to Life"
          subTitle="From customer-facing platforms to internal systems, we create scalable digital products tailored to your business goals."
          position="left"
        />
      </div>

      {/* Projects */}
      <div className="w-full">
        <ProjectsContainer />
      </div>
    </motion.section>
  );
};

export default BuiltSolutions;
