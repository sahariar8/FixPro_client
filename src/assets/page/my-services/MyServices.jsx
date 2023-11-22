import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/ContextProvider";
import { useLoaderData } from "react-router-dom";
import Individual from "./Individual";
import axios from "axios";
import { Helmet } from "react-helmet";




const MyServices = () => {
  const {user,loadng} = useContext(AuthContext);
  const services = useLoaderData();
  const MyServices = services.filter(service=>service.provider_email === user.email);
  const [card,setCard] = useState(MyServices);
  console.log(MyServices.length);


    return (
      
    <div className="min-h-screen py-10">
      <Helmet>
         <title>FixPro | Manage-Services</title>
        </Helmet>
       <h1 className='text-3xl md:text-5xl  font-bold text-center py-5'>My<span className='text-emerald-400'> Services</span> </h1>


       {
        card.length > 0 ?
            <div>
               {
                  loadng && <span className="loading loading-dots loading-lg"></span>
               }
      
        <div className="grid md:grid-cols-3 gap-5">
            {
              card.map(service=><Individual service={service} card={card} setCard={setCard}></Individual>)
            }
        </div>

            </div>
            :
            <h1 className="text-red-600 font-bold font-slobo text-5xl md:pt-10 text-center md:py-56 ">
            You Have No Service.
           </h1>

       }
      
    </div>
    );
};

export default MyServices;