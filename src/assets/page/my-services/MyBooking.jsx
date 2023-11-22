import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyBooking = ({booking,card,setCard}) => {
    const {_id,simage,sname,pname,date,price,instruction} = booking;


    const handleDelete = (id) =>{
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
            axios.delete(`https://fixpro-server.vercel.app/bookings/${id}`)
            .then(res=>{
                console.log(res.data);
                if(res.data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Your Booking deleted Successfylly.',
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
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={simage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            {/* <div>
              <div className="font-bold">{name}</div>
            </div> */}
          </div>
        </td>
        <td>{sname}</td>
        <td>{pname}</td>
        <td>{price}</td>
        <td>{date}</td>
        <td>{instruction}</td>
        <th className='grid md:grid-cols-2 gap-2'>
            <NavLink to={`/update-booking/${_id}`}><button className="btn btn-sm btn-warning ">Edit</button></NavLink>
            <button className="btn btn-sm btn-error" onClick={()=>handleDelete(_id)} >Delete</button>
        </th>
      </tr>
  
    );
};

export default MyBooking;