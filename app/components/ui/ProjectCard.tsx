"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImageCarousel } from "./ImageCarousel";
import { SquareArrowOutUpRight } from "lucide-react";

interface ProjectCardProps {
  category: string;
  testifierName: string;
  testifierRole: string;
  message: string;
  images: string[];
  link: string;
}

const ProjectCard = ({
  category,
  testifierName,
  testifierRole,
  message,
  images,
  link
}: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: {
          y: 0,
          boxShadow: "0px 0px 20px rgba(0, 128, 128, 0.3)",
        },
        hover: {
          y: -8,
          boxShadow: "0px 20px 40px rgba(0, 128, 128, 0.4)",
        },
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-auto lg:h-auto xl:h-144.25 w-full rounded-xl sm:rounded-2xl border-2 border-[#008080] shadow-lg grid grid-cols-1 lg:grid-cols-2 shadow-[#008080] p-4 sm:p-5 md:px-6 md:py-5 gap-4 lg:gap-6"
    >
      {/* Content Section */}
      <div className="flex flex-col justify-between py-2 sm:py-4 md:py-6 lg:pr-8 xl:pr-12 gap-6 lg:gap-8 order-2 lg:order-1">
        <motion.div
          className="p-2 px-4 rounded-full bg-[#EDFAFA] border border-[#E2E0E0] w-fit"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium">
            {category}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3 sm:gap-4"
          variants={{
            rest: { y: 0 },
            hover: { y: -4 },
          }}
          transition={{ duration: 0.3 }}
        >
          <span>
            <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
              {testifierName}
            </h3>
            <p className="font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#6F6F6F]">
              {testifierRole}
            </p>
          </span>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#6F6F6F] leading-relaxed">
            {message}
          </p>

          {/* Link */}
          <div className="text-lg font-medium border-2 border-[#008080] hover:bg-[#008080] hover:text-white text-[#008080] w-fit p-2 rounded-lg">
            <a href={link} target="_blank" rel="noreferrer noopener" className="flex gap-3 items-center">
              View Live
              <SquareArrowOutUpRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <ImageCarousel images={images} />
    </motion.div>
  );
};

export default ProjectCard;
