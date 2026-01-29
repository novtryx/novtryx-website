import React from 'react'
import SectionPill from './ui/sectionPill'
import QuoteButton from './ui/QuoteButton'
import Image from 'next/image'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { FaWhatsapp } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { FiFacebook, FiLinkedin } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'

interface SocialLinkArrayType{
    link: string;
    icon: IconType
    title?: string
}
const Footer = () => {
    const linkArray = [
        {
            title: "Home",
            link: "#"
        },
        {
            title: "About",
            link: "#about"
        },
        {
            title: "Our Work",
            link: "#our-work"
        },
       
    ]
    const socialLinkArray: SocialLinkArrayType[] =[
        {
            link: "/",
            icon: FaWhatsapp,
            title:"whatsapp"
        },
         {
            link: "/",
            icon: BsTwitterX,
        },
         {
            link: "/",
            icon: FiFacebook,
        },
         {
            link: "/",
            icon: FiLinkedin,
        },
         {
            link: "/",
            icon: AiOutlineInstagram,
        },
    ]



    return (
        <div className='bg-black px-24 py-12 text-[#F9F7F4]'>
            <div className='flex flex-col gap-24'>
                <div className=' w-full grid grid-cols-2'>
                    <div>
                        <SectionPill
                            title='Your next product starts here!'
                            subTitle='Partner with Novtryx to transform your vision into a reliable, high-performance digital product built for growth.'
                            position='left'
                            subTitleColor='#B3B3B3'
                        />

                    </div>
                    <div className='flex items-center justify-end'>
                        <QuoteButton />
                    </div>
                </div>

    {/* secnd section */}
                <div className='flex items-center justify-between border-b border-b-[#2A2A2A] pb-12'>
                    <div className='flex items-center gap-2 '>
                        <div className='bg-[#008080] w-12 h-12 flex items-center justify-center rounded-md'>
                            <Image src={"/logo.svg"} alt='novtryx' height={26} width={31} />
                        </div>
                        <p className='text-[30px] tracking-tighter'>NOVTRYX</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        {
                            linkArray.map((item, index) => (
                                <Link href={item.link} key={index}>{item.title}</Link>
                            ))
                        }
                    </div>
                    <div className='flex items-center gap-4'>
                        {
                            socialLinkArray.map((item:SocialLinkArrayType, index: number) => (
                                <Link key={index} href={item.link} className={`h-12 w-12 rounded-full flex items-center justify-center ${item?.title === "whatsapp"? "bg-linear-to-r from-[#1FAF38] to-[#60D669] text-white": "text-[#151515] bg-[#F9F7F4]"} `}>
                                    <item.icon size={24} />
                                </Link>
                            ))
                        }
                    </div>
                </div>

            </div>


            {/* laast section */}
            <div className='py-6'>
                <p className='text-[#B3B3B3]'>© 2026 Novtryx. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer