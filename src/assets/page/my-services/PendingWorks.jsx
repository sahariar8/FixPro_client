import React from 'react';
import PendingWork from './PendingWork';

const PendingWorks = ({pending}) => {
   
    return (
        <div>
            <h1 className='text-3xl md:text-6xl font-bold text-center'>My Pending <span className='text-emerald-400'>Works</span></h1>
            {
        pending.length > 0 ?
        <div className="overflow-x-auto pt-10 px-5">
        <table className="table bg-base-100">
          {/* head */}
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>Service Name</th>
              <th>Service Provider Name</th>
              <th>Service Taker Name</th>
              <th>Service Taker Email</th>
              <th>price</th>
              <th>Date</th>
              <th>Instruction</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
              pending.map(booking=><PendingWork pbooking={booking}></PendingWork>)
           }
          </tbody>
        </table>
      </div>
      :
        <h1 className="text-red-600 font-bold font-slobo text-5xl md:pt-10 text-center md:py-56 ">
            You Have No Pending Work
        </h1>
        
       }

        </div>
    );
};

export default PendingWorks;