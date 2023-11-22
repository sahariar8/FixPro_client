import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Another from './Another';

const ProviderAllServices = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://fixpro-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='px-10'>
            <h1 className='text-3xl md:text-6xl font-bold text-center py-20'>Providers All <span className='text-emerald-400'>Services</span></h1>
            <div className='grid md:grid-cols-3 gap-10 py-10'>
                {
                    services.slice(0,3).map(service=><Another service={service}></Another>)
                }
            </div>
        </div>
    );
};

export default ProviderAllServices;