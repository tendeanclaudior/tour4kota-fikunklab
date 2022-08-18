import React from 'react'

const Button = ({title}) => {
  return (
    <div className='h-[24px] w-[80px] px-[10px] bg-[#4B4C51] rounded-[7px] flex justify-center items-center cursor-pointer' >
        <h1 className='text-[13px] font-poppins font-medium text-white'>{title}</h1>
    </div>
  )
}

export default Button