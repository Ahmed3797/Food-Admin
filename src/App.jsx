import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './Pages/RootLayout'
import AddItems from './Pages/AddItems'
import OrdersPage from './Pages/OrdersPage'
import ListItemPage from './Pages/ListItemPage'
import EditingPage from './Pages/EditingPage'
import { EditingLoader } from './Pages/EditingPage'
import ErrorPage from './Pages/ErrorPage'
import LoginPage from './Pages/LoginPage'
import MainLoader from './lib/MainLoader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const routes= createBrowserRouter([
  {
    path:"/",
    element:<RootLayout />,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"login",
        element:<LoginPage/>
       },

    {
      index:"",
      loader:MainLoader,
      children:[
        {
          path:'add',
          element:<AddItems/>
         },
         {
          path:"orders",
          element:<OrdersPage/>
         },
         {
          path:"list",
          element:<ListItemPage/>
         },
         {
          path:"edit/:itemId",
          element:<EditingPage/>,
          loader:EditingLoader
         },

      ]
    }


    
     
    ]
    
  }
])
function App() {
  return (
    <div>
    <ToastContainer />
    <RouterProvider router={routes} />
    </div>
  )
}

export default App
