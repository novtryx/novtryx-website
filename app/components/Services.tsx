"use client"
import SectionPill from './ui/sectionPill'
import ServiceCard from './ui/ServiceCard'
import { motion } from 'framer-motion'

interface serviceArrayType{
    title: string;
    subTitle: string;
    image: string
}
const Services = () => {
    const serviceArray: serviceArrayType[] = [
        {
            title: "Software Development",
            subTitle: "We design and build reliable, scalable web and mobile applications tailored to solve real business problems.",
            image: "/service-img1.svg"
        },
         {
            title: "Digital Transformation & Consultancy",
            subTitle: "We help organizations modernize their processes, systems, and technology to improve efficiency, innovation, and growth.",
            image: "/service-img2.svg"
        },
         {
            title: "Branding & Design Services",
            subTitle: "We craft strong brand identities and visual systems that communicate your value clearly and consistently.",
            image: "/service-img3.svg"
        },
        {
            title: "UX/UI Design",
            subTitle: "We create intuitive, user-centered digital experiences that are easy to use, visually engaging, and built for performance.",
            image: "/service-img4.svg"
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

  return (
    <div className='flex flex-col items-center py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 gap-12 sm:gap-14 md:gap-16 lg:gap-17.5'>
        <motion.div 
            className='w-full sm:w-[85%] md:w-[75%] lg:w-[65%]'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
        >
            <SectionPill 
                text='Our Services'
                title='Built for Performance. Designed for Growth.'
                subTitle='Novtryx brings together product strategy, user experience, software engineering, and system architecture to power modern digital products.'
            />
        </motion.div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5 relative'>
            <motion.div 
                className='absolute flex items-center justify-center w-full h-full -z-20 pb-0 sm:pb-40 md:pb-60 px-0 sm:px-20 md:px-40'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <motion.div 
                    className='h-[80%] w-[80%] bg-[#7BFFFF] blur-3xl'
                    animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 0.8, 0.6]
                    }}
                    transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            <motion.div
                className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5 col-span-full'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {
                    serviceArray.map((item: serviceArrayType) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                        >
                            <ServiceCard 
                                title={item.title} 
                                subTitle={item.subTitle} 
                                image={item.image}
                            />
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    </div>
  )
}

export default Services