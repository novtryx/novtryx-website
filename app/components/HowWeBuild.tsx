"use client"
import SectionPill from './ui/sectionPill'
import BuildCard from './ui/BuildCard'
import { IconType } from 'react-icons'
import { CiSearch } from 'react-icons/ci'
import { IoMapOutline } from 'react-icons/io5'
import { HiSquare3Stack3D } from 'react-icons/hi2'
import { LiaToolsSolid } from 'react-icons/lia'
import { LuChartNoAxesCombined, LuShieldCheck } from 'react-icons/lu'
import { GrPowerCycle } from 'react-icons/gr'
import { PiRocketLaunch } from 'react-icons/pi'
import { motion } from 'framer-motion'


interface HowWeBuildArrayType{
  icon: IconType;
  title: string;
  subTitle: string;
}
const HowWeBuild = () => {
  const howWeBuildArray: HowWeBuildArrayType[] = [
    {
      icon: CiSearch,
      title: "Discovery",
      subTitle: "We learn about your business, users, and goals to fully understand the problem before building a solution."
    },
     {
      icon: IoMapOutline,
      title: "Strategy & Road-mapping",
      subTitle: "We translate insights into a clear execution plan — defining scope, milestones, timelines, and success metrics."
    },
     {
      icon: HiSquare3Stack3D,
      title: "Design & System Architecture",
      subTitle: "We craft intuitive user experiences and robust system architectures built for performance and scalability."
    },
     {
      icon: LiaToolsSolid,
      title: "Engineering & Execution",
      subTitle: "Our team builds using modern technologies, clean code, and industry best practices to deliver reliable solutions."
    },
     {
      icon: LuShieldCheck,
      title: "Testing & Optimization",
      subTitle: "We rigorously test and optimize to ensure security, speed, and a seamless user experience"
    },
     {
      icon: GrPowerCycle,
      title: "Review & Iteration",
      subTitle: "We collaborate closely with you to refine the product through feedback-driven iterations."
    },
     {
      icon: PiRocketLaunch,
      title: "Launch & Deployment",
      subTitle: "We deploy with precision, ensuring a smooth, stable, and production-ready release"
    },
     {
      icon: LuChartNoAxesCombined,
      title: "Growth & Support",
      subTitle: "Post-launch, we provide ongoing support, improvements, and scaling as your product evolves"
    },

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12 flex flex-col items-center gap-12 sm:gap-14 md:gap-16 lg:gap-17.5'>
         <motion.div 
            className='w-full sm:w-[85%] md:w-[75%] lg:w-[65%]'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
         >
            <SectionPill 
                text='How We Build'
                title='Our Proven Product Development Process.'
                subTitle='A structured, end-to-end approach that takes your idea from discovery to launch — and supports you as your product scales.'
            />
        </motion.div>

        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full gap-2 sm:gap-2.5'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {
            howWeBuildArray.map((item: HowWeBuildArrayType, index:number) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <BuildCard
                  title={item.title}
                  subTitle={item.subTitle}
                  Icon={item.icon}
                  index={index + 1}
                />
              </motion.div>
            ))
          }
        </motion.div>
    </div>
  )
}

export default HowWeBuild