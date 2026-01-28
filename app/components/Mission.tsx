"use client";

import Image from "next/image";
import SectionPill from "./ui/sectionPill";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-24 px-6 md:px-24 py-12">
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full md:w-[40%] h-72 sm:h-96 md:h-[162.25px] rounded-3xl"
      >
        <Image
          src="/ship.svg"
          alt="our mission"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-full md:w-[55%]"
      >
        <SectionPill
          text="Our Mission"
          position="left"
          title="Dedicated to Building technology that works for your business"
          subTitle="We turn complex business problems into scalable digital products. Through strategy, design, and engineering; from idea to growth."
        />
      </motion.div>
    </div>
  );
};

export default Mission;
