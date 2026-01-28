"use client";

import React from "react";
import SectionPill from "./ui/sectionPill";
import ServiceCard from "./ui/ServiceCard";
import { motion, Variants } from "framer-motion";

interface ServiceArrayType {
  title: string;
  subTitle: string;
  image: string;
}

const Services = () => {
  const serviceArray: ServiceArrayType[] = [
    {
      title: "Software Development",
      subTitle:
        "We design and build reliable, scalable web and mobile applications tailored to solve real business problems.",
      image: "/service-img1.svg",
    },
    {
      title: "Digital Transformation & Consultancy",
      subTitle:
        "We help organizations modernize their processes, systems, and technology to improve efficiency, innovation, and growth.",
      image: "/service-img2.svg",
    },
    {
      title: "Branding & Design Services",
      subTitle:
        "We craft strong brand identities and visual systems that communicate your value clearly and consistently.",
      image: "/service-img3.svg",
    },
    {
      title: "UX/UI Design",
      subTitle:
        "We create intuitive, user-centered digital experiences that are easy to use, visually engaging, and built for performance.",
      image: "/service-img4.svg",
    },
  ];

  // ✅ Properly typed container variant
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // ✅ Properly typed card variant
  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-24 gap-10">
      {/* SECTION TITLE */}
      <div className="w-full md:w-[65%]">
        <SectionPill
          text="Our Services"
          title="Built for Performance. Designed for Growth."
          subTitle="Novtryx brings together product strategy, user experience, software engineering, and system architecture to power modern digital products."
        />
      </div>

      {/* SERVICES GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
      >
        {/* Background blur */}
        <div className="absolute inset-0 flex items-center justify-center -z-20">
          <div className="h-[80%] w-[80%] bg-[#7BFFFF] blur-3xl"></div>
        </div>

        {/* SERVICE CARDS */}
        {serviceArray.map((item: ServiceArrayType) => (
          <motion.div
            key={item.title}
            variants={cardVariant}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // move transition here
          >
            <ServiceCard
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
