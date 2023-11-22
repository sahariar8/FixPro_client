import React from 'react';
import { NavLink } from 'react-router-dom';
const Error = () => {
    return (

        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

        <div className="bg-[url('/404.gif')] md:h-[600px] md:w-[800px] mt-20 h-[300px] md:mt-40 bg-cover bg-center max-w-screen-xl mx-auto">
            <NavLink to="/">
                <button className='font-rancho text-orange-700 text-2xl mx-auto block px-4 py-2 rounded-lg font-bold bg-green-300'>Go To home</button>
            </NavLink>
        </div>
        </div>
    );
};

export default Error;