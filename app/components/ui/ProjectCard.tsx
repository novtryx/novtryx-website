import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
  return (
    <div className='h-144.25 w-full rounded-2xl  border-2 border-[#008080] shadow-lg grid grid-cols-2 shadow-[#008080] px-6 py-2'>
        <div className='flex flex-col justify-between py-6 pr-24'> 
            <div className='p-2 rounded-full bg-[#EDFAFA] border border-[#E2E0E0] w-fit' >
                <p className='text-[20px]'>SAAS Platform</p>
            </div>

            <div className='flex flex-col gap-4'>
                <span>
                    <h3 className='font-semibold text-[24px]'>David Michael</h3>
                    <p className='font-medium text-[#6F6F6F]'>CEO -  Glorywrist watch</p>
                </span>

                <p className='text-[20px] text-[#6F6F6F]'>{`Novtryx is just the last bus stop. Very fast in delivery projects and I love their working team. They delivered even more than expected. I’m glad I met with your team`}</p>
            </div>
        </div>
        <div className='w-full h-full relative rounded-2xl'>
            <Image src={"/project.svg"} alt='project' fill className='object-cover rounded-2xl' />
        </div>
    </div>
  )
}

export default ProjectCard