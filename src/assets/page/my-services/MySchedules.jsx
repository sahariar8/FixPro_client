import React from 'react';
import MyBookings from './MyBookings';
import { Helmet } from 'react-helmet';

const MySchedules = () => {
    return (

        <div className="py-10 bg-[url('/13.jpg')] mb-10">
        <Helmet>
         <title>FixPro | My-Schedule</title>
        </Helmet>
             <MyBookings></MyBookings>
        </div>
           
    );
};

export default MySchedules;