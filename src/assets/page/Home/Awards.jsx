import React from 'react';

const Awards = () => {
    return (
      <div>
        <div className='rounded-xl bg-gradient-to-r from-black to-blue-500 '>
        <h1 className="text-3xl md:text-6xl font-bold text-center text-emerald-400 py-4 md:py-10">
          A<span className="text-white">w</span>ards
        </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-5 py-10">
          <div className="card w-96 bg-base-100 shadow-xl" data-aos="flip-down">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/ydwWsYFL/Flag-of-the-Red-Cross-svg.png"
                alt="Shoes"
                className="rounded-xl w-full h-[200px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-emerald-400">Red Cross Awards</h2>
              <p className='text-xs text-slate-500'>The International Federation of Red Cross and Red Crescent Societies presents various awards to individuals and organizations for their contributions to humanitarian services, including blood donation and emergency relief efforts.</p>
             
            </div>
          </div>

          {/* akta */}
          <div className="card w-96 bg-base-100 shadow-xl" data-aos="flip-down">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/SswHyjD1/download-19.jpg"
                alt="Shoes"
                className="rounded-xl w-full h-[200px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-emerald-400">Covid Unsung Heroes Award</h2>
              <p className='text-xs text-slate-500'>The "COVID Unsung Hero Award" is not a specific, widely recognized award, but it represents a category of recognition that has emerged during the COVID-19 pandemic to honor individuals that have made significant contributions and sacrifices in the fight against the virus</p>
              
            </div>
          </div>

          {/* akta */}
          <div className="card w-96 bg-base-100 shadow-xl" data-aos="flip-down">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/2ytdpBG3/images-12.jpg"
                alt="Shoes"
                className="rounded-xl w-full h-[200px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-emerald-400">Public Health Champion Awards</h2>
              <p className='text-xs text-slate-500'>The "Public Health Champion Awards" are a category of recognitions that acknowledge individuals, organizations, or initiatives that have made significant contributions to the field of public health. These awards are meant to and impact in promoting and protecting public health. Various institutions and public health organizations may offer such awards.</p>
            </div>
          </div>

          {/* akta */}
        </div>
      </div>
    );
};

export default Awards;