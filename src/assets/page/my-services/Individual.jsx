import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Individual = ({service,card,setCard}) => {
    const {_id,service_img,service_name,service_provider_name,provider_img,service_price,service_description,service_location} = service;

   
        const handleDelete = (id) =>{
            console.log(id);
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`https://fixpro-server.vercel.app/services/${id}`)
                    .then(res=>{
                        console.log(res.data);
                        if(res.data.deletedCount > 0){
                                    Swal.fire(
                                        'Deleted!',
                                        'Your Service deleted Successfylly.',
                                        'success'
                                      )
        
                                      const remaining = card.filter(serv=> serv._id !== id);
                                      setCard(remaining);
                                }
                    })
                 
                }
              })
    }

    return (
      
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={service_img} alt="Shoes" className="h-[250px] w-full" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">{service_name}</h2>
              <h2 className="text-xl font-bold">${service_price}</h2>
            </div>
            <div className="flex items-center gap-2 pt-2 justify-between">
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={provider_img ? provider_img : user?.photoURL} />
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold">{service_provider_name}</h1>
                </div>
              </div>
              <div className="flex justify-end">
                <h1>
                  <span className="font-semibold">Area</span> :{" "}
                  {service_location}
                </h1>
              </div>
            </div>
            <p className="py-4 text-slate-600 font-semibold">
              {service_description.slice(0, 100)}
            </p>
            <div className="card-actions justify-between">
              <NavLink to={`/update-service/${_id}`}>
                <button className="btn bg-yellow-400 normal-case hover:bg-yellow-500 text-white">
                  Update Service
                </button>
              </NavLink>
              <button
                className="btn btn-error normal-case hover:bg-red-600 text-white"
                onClick={() => handleDelete(_id)}
              >
                Delete Service
              </button>
            </div>
          </div>
        </div>
     
    );
};

export default Individual;