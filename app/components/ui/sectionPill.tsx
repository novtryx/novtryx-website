"use client"
import { GoDotFill } from 'react-icons/go'
import { motion } from 'framer-motion'

interface pillType {
    text?: string;
    position?: "left" | "right";
    title: string;
    subTitle: string
    subTitleColor?: string
}

const SectionPill = ({ text, position, title, subTitle, subTitleColor }: pillType) => {
    return (
        <motion.div 
            className={`flex flex-col gap-3 ${position ? `items-${position} text-${position}` : "items-center text-center"} `}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            {
                text?.trim() &&
                <motion.div 
                    className='text-[#008080] bg-[#E8FFFF] w-fit px-4 py-2 border-2 border-[#008080] rounded-full flex gap-1 items-center justify-center'
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <GoDotFill size={24} className="sm:w-6 sm:h-6" />
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium">
                        {text}
                    </p>
                </motion.div>
            }
            <div className='space-y-2 sm:space-y-3'>
                <motion.h2 
                    className="text-[28px]  md:text-[36px] lg:text-[40px] font-medium leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {title}
                </motion.h2>
                <motion.p
                    style={{color: subTitleColor ?? "#6F6F6F" }}
                    className={`text-[16px] sm:text-[18px] md:text-[20px] font-normal px-2`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {subTitle}
                </motion.p>
            </div>
        </motion.div>

    )
}

export default SectionPill