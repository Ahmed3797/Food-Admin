import React from 'react'
import  Links from './Link'

const MainNavigation = () => {
  return (
    <div className='cols-span-1 border-r-4  bg-[#EEEEEE] border-[#EEEEEE]'>
      <div className=' flex flex-col justify-end items-end mt-8'>
      <Links text="Login" href="login"/>
      <Links text="Add items" href="add"/>
      <Links text="List items" href="list"/>
      <Links text="Orders" href="orders"/>
      </div>
    </div>
  )
}

export default MainNavigation


