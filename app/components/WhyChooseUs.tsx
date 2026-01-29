"use client"
import SectionPill from './ui/sectionPill'
import GridSection from './ui/GridSection'
import QuoteButton from './ui/QuoteButton'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  return (
    <div className='py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 bg-[#113F3F]/5 space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-18'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
            <motion.div 
              className='col-span-1 lg:col-span-2'
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
                <SectionPill
                    text='Why Choose Us'
                    title='The Novtryx difference'
                    subTitle='We combine product thinking, scalable engineering, and long-term partnership to deliver technology that actually moves your business forward.'
                    position='left'
                />
            </motion.div>
            <motion.div 
              className='w-full flex items-start lg:items-end justify-start lg:justify-end'
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
                <QuoteButton/>
            </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <GridSection/>
        </motion.div>
    </div>
  )
}

export default WhyChooseUs