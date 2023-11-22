import React, { useContext, useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import Service from './Service';
// import { useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Services = () => {
 
    // const services = useLoaderData();
    //try
    const [services,setServices] = useState([]);
    useEffect(()=>{
      axios.get('https://fixpro-server.vercel.app/services')
    .then(res=>setServices(res.data))
    },[])

    const [value,setValue] = useState([]);
    const [button,setButton] = useState([]);//if needed click button search
    const [isShow,setIsShow] = useState(false);

    
   
    const handleInputChange = e =>{
      const search = e.target.value;
     
      console.log(search);
      setValue(search);
    }

    const handleButton = ()=>{
    //  setButton(value)if needed
     
    }
    const searchValue = services.filter(service=>{if(value == ''){
      return service;
    }
    else if(service.service_name.toLowerCase() == value.toLowerCase()){
      return service;
    }
  })

    
    return (
      
   
      <div className='mb-10'>
        <Helmet>
         <title>FixPro | Services</title>
        </Helmet>
        <div className="relative bg-[url('/donation.png')]">
          <div className="text-center md:py-32 pt-10 bg-white bg-opacity-90">
            <h1 className="text-2xl md:text-5xl font-bold py-3">
              Your Health,<span className="text-emerald-400">Our Priority</span>
            </h1>
            <div className="pt-7">
              <input
                type="search"
                name="search"
                className="rounded-l-lg border-slate-400 outline-none w-[30vh] py-3"
                placeholder="search here..."
                onChange={handleInputChange}
              />
              <button
                className="bg-red-500 text-white p-[13px] rounded-r-lg"
                onClick={handleButton}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-center text-3xl md:text-5xl font-bold py-10 md:py-10">
          All <span className="text-emerald-400">Services</span>
        </h1>
        {/* <div className='flex justify-end pb-6'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Price</span>
            </label>
            <select className='input input-bordered' onChange={(e)=>setPrice(e.target.value)}>
                <option disabled selected>Choose One</option>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>

          </div>
        </div> */}
        <div className="grid md:grid-cols-3 gap-5 pb-10">
            {
                isShow ? searchValue.map((service) =><Service service={service} ></Service>)
                :
                searchValue.slice(0,3).map((service) =><Service service={service}></Service>)

            }

          
        </div>
            {
                (searchValue.length > 3 && !isShow) && (
                    <button  className ="block bg-green-400 mx-auto px-6 py-2 rounded font-bold text-white mt-10" onClick={()=>setIsShow(!isShow)}>See All</button>
                )
            }
      </div>
    );
};

export default Services;