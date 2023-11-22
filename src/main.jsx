import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './assets/page/Root/Root'
import Error from './assets/page/error/Error'
import Home from './assets/page/Home/Home'
import Login from './assets/page/auth/Login'
import ContextProvider from './assets/page/provider/ContextProvider'
import Register from './assets/page/auth/Register'
import PrivateRoute from './assets/page/PrivateRoute/PrivateRoute'
import Services from './assets/page/services/Services'
import Details from './assets/page/Details/Details'
import MyServices from './assets/page/my-services/MyServices'
import AddService from './assets/page/dashboard/AddService'
import UpdateService from './assets/page/my-services/UpdateService'
import MySchedules from './assets/page/my-services/MySchedules'
import UpdateBookings from './assets/page/my-services/UpdateBookings'

// https://fixpro-server.vercel.app/

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://fixpro-server.vercel.app/services')
      },
      {
        path:'/service',
        element:<Services></Services>,
        // loader:()=>fetch('http://localhost:5173/services')
      },
      {
        path:'/manage-service',
        element:<PrivateRoute><MyServices></MyServices></PrivateRoute>,
        loader:()=>fetch('https://fixpro-server.vercel.app/services') //try kre dekhi
      },
      {
        path:'/add-service',
        element:<PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path:'/my-schedule',
        element:<PrivateRoute><MySchedules></MySchedules></PrivateRoute>,
        // loader:()=>fetch('https://fixpro-server.vercel.app/bookings')
      },
      {
        path:'/update-service/:id',
        element:<UpdateService></UpdateService>,
        loader:({params})=>fetch(`https://fixpro-server.vercel.app/services/${params.id}`)

      },
      {
        path:'/update-booking/:id',
        element:<UpdateBookings></UpdateBookings>,
        loader:({params})=>fetch(`https://fixpro-server.vercel.app/bookings/${params.id}`)

      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`https://fixpro-server.vercel.app/services/${params.id}`)
      

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
   </ContextProvider>
  </React.StrictMode>,
)
