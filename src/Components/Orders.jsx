import React from 'react'
import DropdownMenu from './DropdownMenu';
import { FaBoxOpen } from "react-icons/fa";

const Orders = ({item}) => {
  function items_name()
  {
      let str="";
      for(let product of item.items)
      {
       str+=product.productId.name;
      }
      return str;
  }

  return (
    <div className='my-3 flex flex-wrap justify-between p-1 md:p-3 border-2 border-[#d56b6e] items-center'>
      <p className='text-center'><FaBoxOpen color="#FFCDB2" size="3em"/></p>

      <div className='flex flex-wrap justify-between items-center w-full md:w-[90%]' >
     <div>
        <p className='mb-2'>{items_name()} </p>
        <p className='my-2'>{item.deliveryInfo.email}</p>
        <p className='mt-2'>{item.deliveryInfo.street} {item.deliveryInfo.state}</p>
     </div>
     <div>{item.items_no}</div>
     <div>${item.totalAmount}</div>
     <DropdownMenu orderId={item._id} status={item.status}/>

      </div>
    </div>
  )
}

export default Orders
