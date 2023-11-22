import React from 'react';
import Service from './Service';
import { NavLink } from 'react-router-dom';


const Services = ({services}) => {
  
    const popularServices = services.filter(service=>service.service_type === 'popular')
   
    return (
        
        <div>
           
            <h1 className='text-center text-3xl md:text-6xl font-bold py-14'>Our Popular <span className='text-emerald-400 '>Services</span></h1>
           
            <div className='grid md:grid-cols-3 gap-5 py-5'>
                {
                    popularServices.map(service=><Service service={service} key={service._id}></Service>)
                }
            </div>
            <div className='py-5'>
                <NavLink to='/service'><button className='btn mx-auto block normal-case bg-emerald-400 text-white hover:bg-emerald-600'>See More</button></NavLink>
            </div>
        </div>
    );
};

export default Services;