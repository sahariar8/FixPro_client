import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = ({service}) => {
    const {_id,service_img,service_name,service_provider_name,provider_img,service_price,service_description,service_location} = service;

    const handleDetails = id =>{
        console.log(id)
    }
    
    return (
     <div data-aos="zoom-in">
         <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={service_img} alt="Shoes" className='h-[250px] w-full' />
        </figure>
        <div className="card-body">
          <div className='flex justify-between'>
          <h2 className="card-title">{service_name}</h2>
          <h2 className='text-xl font-bold'>${service_price}</h2>
          </div>
          {/* <div className='flex items-center gap-2 pt-2'>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={provider_img} />
              </div>
            </div>
            <div>
                <h1 className='font-semibold'>{service_provider_name}</h1>
            </div>
          </div> */}
          <div className='flex items-center gap-2 pt-2 justify-between'>
           <div className='flex items-center gap-2'>
           <div className="avatar">
             <div className="w-12 rounded-full">
               <img src={provider_img? provider_img : user?.photoURL} />
             </div>
           </div>
           <div>
               <h1 className='font-semibold'>{service_provider_name}</h1>
           </div>
           </div>
           <div className='flex justify-end'>
                <h1><span className='font-semibold'>Area</span> : {service_location}</h1>
           </div>
         </div>
          <p className='py-4 text-slate-600 font-semibold'>{service_description.slice(0,100)}</p>
          <div className="card-actions justify-end">
            <NavLink to={`/details/${_id}`}><button className="btn bg-emerald-400 normal-case hover:bg-emerald-600 text-white" onClick={()=>handleDetails(_id)}>View Details</button></NavLink>
          </div>
        </div>
      </div>
     </div>
    );
};

export default Service;