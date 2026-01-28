"use client";

import SectionPill from "./ui/sectionPill";
import BuildCard from "./ui/BuildCard";
import { IconType } from "react-icons";
import { CiSearch } from "react-icons/ci";
import { IoMapOutline } from "react-icons/io5";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { LiaToolsSolid } from "react-icons/lia";
import { LuChartNoAxesCombined, LuShieldCheck } from "react-icons/lu";
import { GrPowerCycle } from "react-icons/gr";
import { PiRocketLaunch } from "react-icons/pi";
import { motion, Variants } from "framer-motion";

interface HowWeBuildArrayType {
  icon: IconType;
  title: string;
  subTitle: string;
}

const HowWeBuild = () => {
  const howWeBuildArray: HowWeBuildArrayType[] = [
    {
      icon: CiSearch,
      title: "Discovery",
      subTitle:
        "We learn about your business, users, and goals to fully understand the problem before building a solution.",
    },
    {
      icon: IoMapOutline,
      title: "Strategy & Road-mapping",
      subTitle:
        "We translate insights into a clear execution plan — defining scope, milestones, timelines, and success metrics.",
    },
    {
      icon: HiSquare3Stack3D,
      title: "Design & System Architecture",
      subTitle:
        "We craft intuitive user experiences and robust system architectures built for performance and scalability.",
    },
    {
      icon: LiaToolsSolid,
      title: "Engineering & Execution",
      subTitle:
        "Our team builds using modern technologies, clean code, and industry best practices to deliver reliable solutions.",
    },
    {
      icon: LuShieldCheck,
      title: "Testing & Optimization",
      subTitle:
        "We rigorously test and optimize to ensure security, speed, and a seamless user experience",
    },
    {
      icon: GrPowerCycle,
      title: "Review & Iteration",
      subTitle:
        "We collaborate closely with you to refine the product through feedback-driven iterations.",
    },
    {
      icon: PiRocketLaunch,
      title: "Launch & Deployment",
      subTitle:
        "We deploy with precision, ensuring a smooth, stable, and production-ready release",
    },
    {
      icon: LuChartNoAxesCombined,
      title: "Growth & Support",
      subTitle:
        "Post-launch, we provide ongoing support, improvements, and scaling as your product evolves",
    },
  ];

  // Framer Motion variants for staggered cards
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="px-4 md:px-24 py-12 flex flex-col items-center gap-10">
      {/* Section Title */}
      <div className="w-full md:w-[65%]">
        <SectionPill
          text="How We Build"
          title="Our Proven Product Development Process."
          subTitle="A structured, end-to-end approach that takes your idea from discovery to launch — and supports you as your product scales."
        />
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-6"
      >
        {howWeBuildArray.map((item: HowWeBuildArrayType, index: number) => (
          <motion.div key={index} variants={cardVariants}>
            <BuildCard
              Icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
              index={index + 1}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HowWeBuild;
