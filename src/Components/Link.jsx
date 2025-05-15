import React from 'react'
import {Link} from 'react-router-dom'

const Links = ({text,href}) => {
  return (
    <div className='border-2 w-20 md:w-40 my-4 p-2 bg-white hover:text-white hover:bg-[#FFCDB2]'>
      <Link to={href}>{text}</Link> 
    </div>
  )
}

export default Links
