import React from 'react'
import { GoDotFill } from 'react-icons/go'

interface pillType {
    text?: string;
    position?: "left" | "right";
    title: string;
    subTitle: string
    subTitleColor?: string
}
const SectionPill = ({ text, position, title, subTitle, subTitleColor }: pillType) => {
    return (
        <div className={`flex flex-col gap-3 ${position ? `items-${position} text-${position}` : "items-center text-center"} `}>
            {
                text?.trim() &&
            <div className='text-[#008080] bg-[#E8FFFF] w-fit px-3 py-2 border-2 border-[#008080] rounded-full flex gap-1 items-center justify-center'>
                <GoDotFill size={24} />
                <p className="text-[20px] font-medium">{text}</p>
            </div>
            }
            <div className='space-y-3'>
                <h2 className="text-[40px] font-medium">{title}</h2>
                <p
                style={{color: subTitleColor ?? "#6F6F6F" }}
                 className={` text-[20px] font-normal px-2`}>{subTitle}</p>
            </div>
        </div>

    )
}

export default SectionPill