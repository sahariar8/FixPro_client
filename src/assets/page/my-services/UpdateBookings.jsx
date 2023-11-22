import axios from 'axios';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateBookings = () => {
    const bookings = useLoaderData();
    const navigate = useNavigate();
    const {_id,simage,sname,pname,date,price,instruction,pemail} = bookings;
    const handleCart = e =>{
        e.preventDefault();
        const form = e.target;
        const sname = form.sname.value;
        const simage = form.simage.value;
        const pname = form.pname.value;
        const instruction = form.instruction.value;
        const date = form.date.value;
        const price = form.price.value;

    const cart = {
      sname,
      simage,
      pname,
      date,
      price,
      instruction,
    };
    console.log(cart);

    axios.put(`https://fixpro-server.vercel.app/bookings/${_id}`,cart)
    .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount > 0 ){
            Swal.fire(
                'Good job!',
                'Booking Updated Successfully',
                'success'
              )

              navigate('/my-schedule')

        }
    })

    }


    return (
        <div className="py-10 shadow-lg ">
        <h1 className='text-3xl md:text-5xl  font-bold text-center py-5'>Update <span className='text-emerald-400'> Booking</span> </h1>
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
              defaultValue={sname}
              disabled
             
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
            defaultValue={simage}
            disabled
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
              defaultValue={pname}
              type="text"
              name="pname"
              disabled
            />
          </div>
          <div>
            <label className="font-semibold block">
             Date
            </label>
            <input
              className="input input-bordered w-full "
              defaultValue={date}
              name="date"
              type="date"
              
            />
          </div>
        </div>
        {/* <div className="grid md:grid-cols-2 mb-2 gap-5">
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
        </div> */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="font-semibold block">
              instruction
            </label>
            <input
              className="input input-bordered w-full"
              placeholder="write instruction"
              type="text"
              name="instruction"
             defaultValue={instruction}
             
            />
          </div>
          <div>
            <label className="font-semibold block">
            Price
            </label>
            <input
              className="input input-solid font-bold w-full"
              type="number"
              placeholder="Price"
              name="price"
            defaultValue={price}
            disabled
            
            />
          </div>
        </div>
       <div className="py-3 modal-action">
          <button  className="btn w-full bg-emerald-400 normal-case" type="submit">Update</button>
       </div>
      </form>
       </div>
    </div>
    );
};

export default UpdateBookings;