import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const navArray = ["Home", "About", "Our Work", "Contact"]

  return (
    <div className='py-6 backdrop-blur-md bg-linear-to-b from-[#A1FFFF]/60 via-[#A1FFFF]/40  to-white flex px-16 justify-between  '>
        
        {/* logos */}
        <div className='flex items-center gap-2 '>
            <div className='bg-[#008080] w-12 h-12 flex items-center justify-center rounded-md'>
                <Image src={"/logo.svg"} alt='novtryx' height={26} width={31}/>
            </div>
            <p className='text-[30px] tracking-tighter'>NOVTRYX</p>
        </div>

        <div className='bg-[#008080] flex gap-4 w-fit items-center px-6 rounded-full text-white'>
            {
                navArray.map((item:string) => (
                    <Link key={item} href={"#"}>{item}</Link>
                ))
            }
        </div>

         <div className=' relative w-12 h-12 flex items-center justify-center rounded-md'>
                <Image src={"/whatsapp.svg"} alt='whatsapp' fill className='object-contain' />
        </div>
    </div>
  )
}

export default Header