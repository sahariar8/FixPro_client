import React from 'react';
import new1 from '../../images/doctor4.jpg'

const About = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-6xl font-bold text-center py-10'>About <span className='text-emerald-400'>Us</span></h1>
            <div className="bg-[url('/doctor7.jpg')] bg-cover bg-center rounded-lg">
        <div className="hero bg-black bg-opacity-60 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
                <img src={new1} className="md:max-w-sm rounded-lg shadow-2xl" />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
            <div className="md:py-40 text-white">
              <h1 className="text-3xl md:text-5xl font-rancho font-bold text-center ">Dedicated to Your Health,<span className='text-emerald-600'> Committed to Your Care!</span></h1>
              <p className="py-6 px-8 text-sm md:text-base md:px-20">
              The expertise, care, and kindness <span className='text-orange-500 font-bold text-lg'>FixPro</span> provide comforting environment for patients and their families.Always Ready to give our incredible services.
              </p>
              <div data-aos="fade-up"data-aos-duration="3000">
              <h3 className='text-2xl md:text-3xl font-semibold font-rancho text-center'>Every Life, Every Moment, <span className='text-emerald-600'>Every Care</span></h3>
              </div>
            </div>
            </div>
           
          </div>
        </div>
      </div>
        </div>
    );
};

export default About;