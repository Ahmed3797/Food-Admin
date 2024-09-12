import React from 'react'
import OrdersComponent from '../Components/OrdersComponent'

const OrdersPage = () => {
  return (
    <div className=' bg-white'>
      <div className='p-2 md:p-8 mx-4'>
      <h1>Orders Page</h1>
      <OrdersComponent />
      </div>
    </div>
  )
}

export default OrdersPage
