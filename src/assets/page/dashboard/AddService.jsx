import React, { useContext } from 'react';
import { AuthContext } from '../Provider/ContextProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddService = () => {
  const navigate = useNavigate();

    const {user} = useContext(AuthContext);

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
        console.log(service)
        axios.post('https://fixpro-server.vercel.app/services',service)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Successfully Booking Done',
                    'success'
                  )
                  navigate('/')
                // form.reset();
                  
            }
        })

    }
    return (
        <div className="py-10 shadow-lg ">
          <Helmet>
         <title>FixPro | Add-Service</title>
        </Helmet>
            <h1 className='text-3xl md:text-5xl  font-bold text-center py-5'>Add <span className='text-emerald-400'> Service</span> </h1>
           <div className="md:w-2/3 mx-auto border rounded-lg p-10 bg-[url('/13.jpg')] mt-5">
           <form onSubmit={handleCart} >
            <div className="grid md:grid-cols-2 py-2 gap-5">
              <div>
                <label className="font-semibold block">
                  Service Name
                </label>
                <input
                  className="input  input-bordered w-full"
                  placeholder="Enter Service Name"
                  type="text"
                  name="sname"
                 
                />
              </div>
              <div>
                <label className="font-semibold block">
                  Service Image
                </label>
                <input
                  className="input input-bordered w-full"
                  placeholder="image Url"
                  type="text"
                  name="simage"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 mb-2 gap-5">
              <div>
                <label className="font-semibold block">
                  Provider Name
                </label>
                <input
                  className="input input-bordered w-full font-bold"
                  defaultValue={user.displayName}
                  type="text"
                  name="pname"
                  disabled
                />
              </div>
              <div>
                <label className="font-semibold block">
                  Provider Email
                </label>
                <input
                  className="input input-bordered w-full font-bold"
                  defaultValue={user?.email}
                  name="pemail"
                  type="email"
                  disabled
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 mb-2 gap-5">
              <div>
                <label className="font-semibold block">
                  Provider Image
                </label>
				        <input className="input input-bordered w-full font-bold" type="text" name="pimage" defaultValue={user?.photoURL ? user.photoURL : ""}/>
              </div>
              <div>
                <label className="font-semibold block">
                  Provider Description
                </label>
                <input
                  className="input input-bordered w-full"
                  name="pdesc"
                  type="text"
                  
                />
              </div>
            </div>
            <div class="w-full pr-4 mb-2">
				        <label className="font-semibold block" >Description</label>
				        <textarea className="textarea textarea-bordered w-full" type="text" name="desc" required/>
			      </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-semibold block">
                  Service Area
                </label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Service Area"
                  type="text"
                  name="area"
                  required
                 
                />
              </div>
              <div>
                <label className="font-semibold block">
                Price
                </label>
                <input
                  className="input input-solid input-bordered w-full"
                  type="number"
                  placeholder="Price"
                  name="price"
                  required
                
                />
              </div>
            </div>
           <div className="py-3 modal-action">
              <button  className="btn w-full bg-emerald-400 normal-case" type="submit">Add Services</button>
           </div>
          </form>
           </div>
        </div>
    );
};

export default AddService;