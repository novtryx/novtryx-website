import React from 'react'
import SectionPill from './ui/sectionPill'
import ServiceCard from './ui/ServiceCard'

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


  return (
    <div className='flex flex-col items-center py-12 px-24 gap-17.5 '>
        <div className='w-[65%] '>
            <SectionPill 
                text='Our Services'
                title='Built for Performance. Designed for Growth.'
                subTitle='Novtryx brings together product strategy, user experience, software engineering, and system architecture to power modern digital products.'
            />

        </div>

        <div className='w-full grid grid-cols-2 gap-3.5 relative'>
            <div className=' absolute flex items-center justify-center w-full h-full -z-20 pb-60 px-40'>
                <div className='h-[80%] w-[80%] bg-[#7BFFFF] blur-3xl '>

                </div>
            </div>
            {
                serviceArray.map((item:serviceArrayType) => (
                 <ServiceCard key={item.title} title={item.title} subTitle={item.subTitle} image={item.image}/>

                ))
            }
        </div>
    </div>
  )
}

export default Services