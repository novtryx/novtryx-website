import React from 'react'
import SectionPill from './ui/sectionPill'
import ProjectsContainer from './ui/ProjectsContainer'

const BuiltSolutions = () => {
  return (
    <div className='py-12 px-24 flex flex-col items-center gap-17.5 '>
        <div className='w-[55%]'>
         <SectionPill 
                text='Built Solutions'
                title='Solutions We Bring to Life'
                subTitle='From customer-facing platforms to internal systems, we create scalable digital products tailored to your business goals.'
            />

        </div>
        <ProjectsContainer/>
    </div>
  )
}

export default BuiltSolutions