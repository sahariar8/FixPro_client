import React from 'react';
import slider1 from '../../images/doctor1.jpg'
import slider2 from'../../images/doctor2.jpg'
import slider3 from '../../images/doctor3.jpg'
import slider4 from '../../images/doctor4.jpg'
import slider5 from '../../images/doctor5.jpg'
import slider6 from '../../images/doctor6.jpg'


const Slider = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slider1} className="w-full h-[400px] md:h-[600px] rounded-lg" />
          <div className="pt-16 md:pt-24 absolute w-2/3 md:w-1/3 pl-4 md:pl-16 text-white space-y-4 md:space-y-8 rounded-lg bg-gradient-to-r from-[#141414] to-[rgba(21, 21, 21, 0)] h-full">
                <h1 className='text-3xl md:text-5xl font-bold text-emerald-400'>At 24/7 Doctor Support, your health is our priority around the clock</h1>
                <p className='text-sm md:text-base'>Our team of experienced doctors is on call 24/7 to provide immediate medical advice and consultations. Whether it's a pressing health concern or simply the need for reassurance, our doctors are just a call away.</p>
               
          </div>
          <div className="absolute flex bottom-5 right-10 gap-5">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full  h-[400px] md:h-[600px] rounded-lg" />
          <div className="pt-16 md:pt-24 absolute w-2/3 md:w-1/3 pl-4 md:pl-16 text-white space-y-4 md:space-y-8 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                <h1 className='text-3xl md:text-5xl font-bold text-emerald-400'> We offer round-the-clock medicine delivery to your doorstep. </h1>
                <p className='text-sm md:text-base'>Our team is available round the clock to fulfill your medication needs promptly, providing peace of mind in any situation.</p>

          </div>
          <div className="absolute flex bottom-5 right-10 gap-5">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="w-full  h-[400px] md:h-[600px] rounded-lg" />
          <div className="pt-16 md:pt-24 absolute w-2/3 md:w-1/3 pl-4 md:pl-16 text-white space-y-4 md:space-y-8 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                <h1 className='text-3xl md:text-5xl font-bold text-emerald-400'>24/7 Ambulance Service in Dhaka City</h1>
                <p className='text-sm md:text-base'>We understand that medical emergencies can happen at any time, day or night. That's why our dedicated team of trained medical professionals and paramedics is available around the clock to provide swift and reliable ambulance services within Dhaka city.</p>
          </div>
          <div className="absolute flex bottom-5 right-10 gap-5">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slider4} className="w-full  h-[400px] md:h-[600px] rounded-lg" />
          <div className="pt-16 md:pt-24 absolute w-2/3 md:w-1/3 pl-4 md:pl-16 text-white space-y-4 md:space-y-8 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                <h1 className='text-3xl md:text-5xl font-bold text-emerald-400'>At Emergency Service, your safety and well-being are our primary concern</h1>
                <p className='text-sm md:text-base'>We understand that emergencies can happen suddenly and without warning. Our dedicated team of professionals is ready to respond swiftly and effectively</p>
              
          </div>
          <div className="absolute flex bottom-5 right-10 gap-5">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={slider5} className="w-full  h-[400px] md:h-[600px] rounded-lg" />
          <div className="pt-16 md:pt-24 absolute w-2/3 md:w-1/3 pl-4 md:pl-16 text-white space-y-4 md:space-y-8 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                <h1 className='text-3xl md:text-5xl font-bold text-emerald-400'> Health-Centric Food Delivery Service With Medical Report Analysis</h1>
                <p className='text-sm md:text-base'>Our team of nutritionists and dietitians carefully review your medical reports, including information on allergies, dietary restrictions, and medical conditions.</p>
          </div>
          <div className="absolute flex bottom-5 right-10 gap-5">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={slider6} className="w-full  h-[400px] md:h-[600px] rounded-lg"/>
          <div className="pt-16 md:pt-24 absolute w-2/3 md:w-1/3 pl-4 md:pl-16 text-white space-y-4 md:space-y-8 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                <h1 className='text-3xl md:text-5xl font-bold text-emerald-400'>Emergency Blood Donation Service,Safe and Reliable Process</h1>
                <p className='text-sm md:text-base'>We provide a 24/7 hotline for individuals, hospitals, and medical facilities to request urgent blood donations.</p>
          </div>
          <div className="absolute flex bottom-5 right-10 gap-5">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Slider;