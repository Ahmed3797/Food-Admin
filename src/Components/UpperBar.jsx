import React from 'react'
import { MdOutlinePerson } from "react-icons/md";

const UpperBar = () => {
  return (
    <div className='bg-white border-b-4 border-[#EEEEEE] p-2 ps-6 pe-6 flex justify-between items-center'>
    <div>
    <h1 className='text-6xl text-[#134B70] font-semibold'>AAM</h1>
    <p className='font-semibold text-base'>Admin Panel</p>
    </div>
    <div>
    <MdOutlinePerson size="40px"/>
    </div>
    </div>
  )
}

export default UpperBar
