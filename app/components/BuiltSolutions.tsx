"use client"
import SectionPill from './ui/sectionPill'
import ProjectsContainer from './ui/ProjectsContainer'
import { motion } from 'framer-motion'

const BuiltSolutions = () => {
  return (
    <div id='work' className='py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col items-center gap-12 sm:gap-14 md:gap-16 lg:gap-17.5'>
        <motion.div 
          className='w-full sm:w-[80%] md:w-[70%] lg:w-[55%]'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
         <SectionPill 
                text='Built Solutions'
                title='Solutions We Bring to Life'
                subTitle='From customer-facing platforms to internal systems, we create scalable digital products tailored to your business goals.'
            />
        </motion.div>

        <motion.div
          className='w-full'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ProjectsContainer/>
        </motion.div>
    </div>
  )
}

export default BuiltSolutions