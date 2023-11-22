import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/ContextProvider';
import { useLoaderData } from 'react-router-dom';
import MyBooking from './MyBooking';
import PendingWorks from './PendingWorks';
import axios from 'axios';
import PendingWork from './PendingWork';

const MyBookings = () => {

    const {user} = useContext(AuthContext);
    const [Bookings,setBookings] = useState([]); 
    const MyBookings = Bookings.filter(booking=>booking.uemail === user.email);
    const pendingWorks = Bookings.filter(booking=>booking.pemail === user.email);
   
    const url = `https://fixpro-server.vercel.app/bookings?email=${user?.email}`

    useEffect(()=>{
      axios.get(url,{ withCredentials : true })
      .then(res=>{
          setBookings(res.data)
      })
    },[])
  
    return (
        <div className="py-10 bg-[url('/13.jpg')]">
            <h1 className='text-3xl md:text-6xl text-center mx-auto font-bold py-5'>My <span className='text-emerald-400'>Bookings</span></h1>
            {
        MyBookings.length > 0 ?
        <div className="overflow-x-auto pt-10 px-5">
        <table className="table bg-base-100">
          {/* head */}
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>Service Name</th>
              <th>Provider Name</th>
              <th>price</th>
              <th>Date</th>
              <th>Instruction</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
             MyBookings.map(booking=><MyBooking booking={booking} card={Bookings} setCard={setBookings}></MyBooking>)
           }
          </tbody>
        </table>
      </div>
      :
        <h1 className="text-red-600 font-bold font-slobo text-5xl md:pt-10 text-center md:py-56 ">
            Your Booking Is Empty
        </h1>
        
       }
         <div className='py-10'>
            <PendingWorks pending={pendingWorks}></PendingWorks>
           
         </div>
        </div>
      
        
    );
};

export default MyBookings;