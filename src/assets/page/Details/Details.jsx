import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/ContextProvider";
import axios from "axios";
import Swal from "sweetalert2";
import ProviderAllServices from "./ProviderAllServices";
import { Helmet } from "react-helmet";

const Details = () => {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const {
    service_img,
    service_name,
    service_provider_name,
    provider_img,
    service_price,
    service_description,
    service_location,
    provider_desc,
    provider_email,
  } = useLoaderData();

  const handleCart = (e) => {
    e.preventDefault();
    const form = e.target;
    const sname = form.sname.value;
    const simage = form.simage.value;
    const uemail = form.uemail.value;
    const uname = form.uname.value;
    const pname = form.pname.value;
    const instruction = form.instruction.value;
    const pemail = form.pemail.value;
    console.log(instruction);
    const date = form.date.value;
    const price = form.price.value;

    const cart = {
      sname,
      simage,
      uemail,
      uname,
      pname,
      date,
      price,
      pemail,
      instruction,
    };
    console.log(cart);
    axios.post("https://fixpro-server.vercel.app/bookings", cart).then((res) => {
      document.getElementById("my_modal_1").removeAttribute("open");
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire("Good job!", "Successfully Booking Done", "success");
        navigate("/");
      }
    });
  };

  return (
    <div className="py-10 bg-[url('/13.jpg')] mb-10 shadow-xl">
      <Helmet>
         <title>FixPro | Details</title>
        </Helmet>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center py-4 text-emerald-400">
            Purchase Service <hr className="mt-2" />
          </h3>
          <form onSubmit={handleCart} method="dialog">
            <div className="grid md:grid-cols-2 py-2 gap-5">
              <div>
                <label className="font-semibold block">Service Name</label>
                <input
                  className="input  input-bordered w-full"
                  defaultValue={service_name}
                  placeholder="Email address"
                  type="text"
                  name="sname"
                  disabled
                />
              </div>
              <div>
                <label className="font-semibold block">Service Image</label>
                <input
                  className="input input-bordered  w-full"
                  defaultValue={service_img}
                  placeholder="Email address"
                  type="email"
                  name="simage"
                  disabled
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 mb-2 gap-5">
              <div>
                <label className="font-semibold block">Provider Name</label>
                <input
                  className="input input-bordered  w-full"
                  defaultValue={service_provider_name}
                  type="email"
                  name="pname"
                  disabled
                />
              </div>
              <div>
                <label className="font-semibold block">Provider Email</label>
                <input
                  className="input input-bordered  w-full"
                  defaultValue={provider_email}
                  name="pemail"
                  type="email"
                  disabled
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 mb-2 gap-5">
              <div>
                <label className="font-semibold block  w-full">
                  User Email
                </label>
                <input
                  className="input input-bordered"
                  defaultValue={user?.email}
                  type="email"
                  name="uemail"
                  disabled
                />
              </div>
              <div>
                <label className="font-semibold block">User Name</label>
                <input
                  className="input input-bordered  w-full"
                  name="uname"
                  defaultValue={user?.displayName}
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="font-semibold block">Special Instruction</label>
              <input
                className="input input-bordered  w-full"
                name="instruction"
                type="text"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-semibold block">Service Date</label>
                <input
                  className="input input-bordered  w-full"
                  placeholder="Email address"
                  type="date"
                  name="date"
                  required
                />
              </div>
              <div>
                <label className="font-semibold block">Price</label>
                <input
                  className="input input-solid input-bordered  w-full"
                  type="text"
                  defaultValue={service_price}
                  name="price"
                  disabled
                />
              </div>
            </div>
            <div className="py-3 modal-action">
              <button
                className="btn w-full bg-emerald-400 normal-case"
                type="submit"
              >
                Purchase Services
              </button>
            </div>
          </form>
        </div>
      </dialog>
      {/* {
        openModal && 
      
      <Modal show={true} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <div className="space-y-6">

          <h3 className="font-bold text-2xl text-center py-4 text-emerald-400">
            Purchase
          </h3>
          <form onClick={handleCart}>
            <div className="grid md:grid-cols-2 py-2">
              <div>
                <label className="font-semibold">
                  Service Name
                </label>
                <input
                  className="input  input-bordered"
                  defaultValue={service_name}
                  placeholder="Email address"
                  type="text"
                  name="sname"
                  disabled
                />
              </div>
              <div>
                <label className="font-semibold">
                  Service Image
                </label>
                <input
                  className="input input-bordered"
                  defaultValue={service_img}
                  placeholder="Email address"
                  type="email"
                  name="simage"
                  disabled
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 mb-2">
              <div>
                <label className="font-semibold">
                  Provider Name
                </label>
                <input
                  className="input input-bordered"
                  defaultValue={service_provider_name}
                  type="email"
                  name="pname"
                  disabled
                />
              </div>
             
              <div>
                <label className="font-semibold block">
                  User Email
                </label>
                <input
                  className="input input-bordered"
                  defaultValue={user?.email}
                  name="uemail"
                  type="email"
                  disabled
                />
              </div>
            </div>
            <div class="w-full pr-4 mb-2">
				        <label className="font-semibold" >Special Instruction</label>
				          <input className="input  input-bordered w-full" type="text" name="instruction" required/>
			      </div>
            <div className="grid md:grid-cols-2">
              <div>
                <label className="font-semibold block">
                  Service Date
                </label>
                <input
                  className="input input-bordered"
                  type="date"
                  name="date"
                  required
                 
                />
              </div>
              <div>
                <label className="font-semibold block" >
                Price
                </label>
                <input
                  className="input input-solid input-bordered"
                  type="text"
                  defaultValue={service_price}
                  name="price"
                  disabled
                />
              </div>
            </div>
           <div className="py-3 modal-action">
              <button  className="btn w-full bg-emerald-400 normal-case" type="submit" onClick={() => setOpenModal(false)}>Purchase Services</button>
           </div>
          </form>
          </div>
        </Modal.Body>
      </Modal>
      } */}

      {/* provider Details */}

      <h1 className="text-center text-5xl font-bold py-5">
        Provider <span className="text-emerald-400"> Details</span>
      </h1>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className=" md:w-3/5 rounded-xl bg-clip-border mx-auto py-10">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-full">
              <img src={provider_img} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="font-semibold">
                {" "}
                <span className="font-semibold text-xl">Name : </span>
                {service_provider_name}
              </h2>
              <h1 className="font-semibold">
                <span className="font-semibold text-xl">Location : </span>
                {service_location}
              </h1>
              <h1 className="font-semibold text-xl">Details</h1>
              <p className="text-slate-700 text-sm">{provider_desc}</p>
            </div>
          </div>
        </div>
      </div>
      {/* provider details end */}

      {/* Service Details */}
      <h1 className="text-center text-5xl font-bold py-10">
        Service <span className="text-emerald-400"> Details</span>
      </h1>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md  md:w-3/5 rounded-xl bg-clip-border mx-auto">
          <div className="relative  overflow-hidden text-gray-700 bg-white  rounded-xl bg-clip-border">
            <img src={service_img} className="object-cover w-full h-full" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-slobo text-2xl antialiased font-semibold leading-relaxed text-blue-gray-900">
                {service_name}
              </p>
              <p className="block font-slobo text-2xl antialiased font-semibold leading-relaxed text-blue-gray-900">
                $ {service_price}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={provider_img} />
                </div>
              </div>
              <div>
                <h1 className="font-semibold">{service_provider_name}</h1>
              </div>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 pt-5">
              {service_description}
            </p>
          </div>
          <div className="p-6 pt-0 flex justify-end">
            <button
              className="btn bg-emerald-400 normal-case"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* service details End */}

      <ProviderAllServices></ProviderAllServices>
    </div>
  );
};

export default Details;
