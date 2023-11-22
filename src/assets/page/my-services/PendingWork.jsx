import axios from 'axios';
import React, { useState } from 'react';

const PendingWork = ({pbooking}) => {
  const [status,setStatus] = useState();
  
    const {simage,sname,uemail,pname,uname,date,price,instruction} = pbooking;
    
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
        <td>{uname}</td>
        <td>{uemail}</td>
        <td>{price}</td>
        <td>{date}</td>
        <td>{instruction}</td>
        <th>
          {
            status ? 
            <>
            {
              status === 'Inprogress' ? <button className='btn btn-sm btn-warning'>Inprogress</button>
              :
              // <button className='btn btn-sm btn-error'>Pending</button>
              ""
            }
            {
              status === 'completed' ? <button className='btn btn-sm btn-success'>completed</button>
              :
              // "<button className='btn btn-sm btn-error'>Pending</button>"
              ""
            }
            </>
            :
            <button className='btn btn-sm btn-error'>Pending</button>
          }
          
        
            
        </th>
        <th>
            <select onChange={(e)=>setStatus(e.target.value)}>
                <option selected disabled>Pending</option>
                <option value="Inprogress">Inprogress</option>
                <option value="completed">Completed</option>
            </select>
        </th>
      </tr>
     
    );
};

export default PendingWork;