import React from 'react';

const Partnership = () => {
    return (
      <div>
         {/* <div className='rounded-xl bg-gradient-to-r from-black to-blue-500 '> */}
        <h1 className="text-3xl md:text-6xl font-bold text-center text-emerald-400 py-10">
          Our <span className="text-black">P</span>artners
        </h1>
       {/* </div> */}
        <div className="grid md:grid-cols-5 gap-5 py-10 shadow-lg px-5 rounded-lg">
            
        <div className="card bg-base-100" data-aos="zoom-in-down">
            <figure className="pt-10">
              <img
                src="https://i.postimg.cc/Pq3RyHF4/svg.png"
                alt="nogod"
                className='h-[100px]'
               
              />
            </figure>
        </div>
        <div className="card bg-base-100" data-aos="zoom-in-down">
            <figure className=" pt-10">
              <img
                src="https://i.postimg.cc/PrVjvf3y/download-20.jpg"
                alt="nogod"
                className='h-[100px]'
               
              />
            </figure>
        </div>
        <div className="card bg-base-100" data-aos="zoom-in-down">
            <figure className=" pt-10">
              <img
                src="https://i.postimg.cc/sxD4Wv5m/download-2.png"
                alt="nogod"
                className='h-[100px]'
               
              />
            </figure>
        </div>
        <div className="card  bg-base-100" data-aos="zoom-in-down">
            <figure className="pt-10">
              <img
                src="https://i.postimg.cc/1t3P2g4k/download-1.png"
                alt="nogod"
                className='h-[100px]'
               
              />
            </figure>
        </div>
        <div className="card bg-base-100" data-aos="zoom-in-down">
            <figure className="pt-10">
              <img
                src="https://i.postimg.cc/xTXKSr5X/main-qimg-560c7b71e552a60913b53513ec6b9a7d-lq.jpg"
                alt="nogod"
                className='h-[100px]'
               
              />
            </figure>
        </div>
        </div>
      </div>
    );
};

export default Partnership;