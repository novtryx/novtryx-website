import React from 'react'


interface GridTextProp{
    title: string;
    subTitle: string
}
const GridText = ({title, subTitle}: GridTextProp) => {
  return (
    <div className='space-y-2'>
        <h3 className='font-medium text-[24px]'>{title}</h3>
        <p>{subTitle}</p>
    </div>
  )
}

export default GridText