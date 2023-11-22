import React, { useContext } from "react";
import { AuthContext } from "../provider/ContextProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateService = () => {
    
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const {_id,service_name,provider_desc,provider_img,service_img,provider_email,service_provider_name,service_location,service_price,service_description} = useLoaderData();

    const handleCart = e =>{
        e.preventDefault();
        const form = e.target;
        const service_name = form.sname.value;
        const service_img = form.simage.value;
        const provider_email = form.pemail.value;
        const service_provider_name = form.pname.value;
        const service_location = form.area.value;
        const service_price = form.price.value;
        const provider_img = form.pimage.value;
        const provider_desc = form.pdesc.value;
        const service_description = form.desc.value;

        const service = {service_name,provider_desc,provider_img,service_img,provider_email,service_provider_name,service_location,service_price,service_description}
        console.log(service);

        axios.put(`https://fixpro-server.vercel.app/services/${_id}`,service)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0 ){
                Swal.fire(
                    'Good job!',
                    'Service Updated Successfully',
                    'success'
                  )
                  navigate('/');
            }
           
        })
 
    }
    
  return (
    <div className="py-10 shadow-lg ">
      <Helmet>
         <title>FixPro | Update-Service</title>
        </Helmet>
      <h1 className="text-3xl md:text-5xl  font-bold text-center py-5">
       Update<span className="text-emerald-400"> Service</span>{" "}
      </h1>
      <div className="md:w-2/3 mx-auto border rounded-lg p-10 bg-[url('/13.jpg')] mt-5">
        <form onSubmit={handleCart}>
          <div className="grid md:grid-cols-2 py-2 gap-5">
            <div>
              <label className="font-semibold block">Service Name</label>
              <input
                className="input  input-bordered w-full"
                placeholder="Enter Service Name"
                type="text"
                defaultValue={service_name}
                name="sname"
              />
            </div>
            <div>
              <label className="font-semibold block">Service Image</label>
              <input
                className="input input-bordered w-full"
                defaultValue={service_img}
                type="text"
                name="simage"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 mb-2 gap-5">
            <div>
              <label className="font-semibold block">Provider Name</label>
              <input
                className="input input-bordered w-full"
                defaultValue={service_provider_name}
                type="text"
                name="pname"
              />
            </div>
            <div>
              <label className="font-semibold block">Provider Email</label>
              <input
                className="input input-bordered w-full"
                defaultValue={provider_email}
                name="pemail"
                type="email"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 mb-2 gap-5">
            <div>
              <label className="font-semibold block">Provider Image</label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="pimage"
                defaultValue={provider_img}
              />
            </div>
            <div>
              <label className="font-semibold block">
                Provider Description
              </label>
              <input
                className="input input-bordered w-full"
                name="pdesc"
                type="text"
                defaultValue={provider_desc}
              />
            </div>
          </div>
          <div class="w-full pr-4 mb-2">
            <label className="font-semibold block">Description</label>
            <textarea
              className="textarea textarea-bordered w-full"
              type="text"
              name="desc"
              defaultValue={service_description}
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="font-semibold block">Service Area</label>
              <input
                className="input input-bordered w-full"
                defaultValue={service_location}
                type="text"
                name="area"
                required
              />
            </div>
            <div>
              <label className="font-semibold block">Price</label>
              <input
                className="input input-solid input-bordered w-full"
                type="number"
               defaultValue={service_price}
                name="price"
                required
              />
            </div>
          </div>
          <div className="py-3 modal-action">
            <button
              className="btn w-full bg-emerald-400 normal-case"
              type="submit"
            >
             Update Services
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
