"use client";

import React from "react";
import SectionPill from "./ui/sectionPill";
import GridSection from "./ui/GridSection";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <motion.div
      className="py-12 px-4 md:px-24 bg-[#113F3F]/5 space-y-12 md:space-y-18"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Section Title */}
      <div className="w-full md:w-[60%]">
        <SectionPill
          text="Why Choose Us"
          title="The Novtryx difference"
          subTitle="We combine product thinking, scalable engineering, and long-term partnership to deliver technology that actually moves your business forward."
          position="left"
        />
      </div>

      {/* Grid Section */}
      <GridSection />
    </motion.div>
  );
};

export default WhyChooseUs;
