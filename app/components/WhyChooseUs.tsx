import React from 'react'
import SectionPill from './ui/sectionPill'
import GridSection from './ui/GridSection'

const WhyChooseUs = () => {
  return (
    <div className='py-12 px-24 bg-[#113F3F]/5 space-y-18 '>
        <div>
            <div className='w-[60%]'>
                <SectionPill
                    text='Why Choose Us'
                    title='The Novtryx difference'
                    subTitle='We combine product thinking, scalable engineering, and long-term partnership to deliver technology that actually moves your business forward.'
                    position='left'
                />
            </div>

        </div>

        <GridSection/>
    </div>
  )
}

export default WhyChooseUs