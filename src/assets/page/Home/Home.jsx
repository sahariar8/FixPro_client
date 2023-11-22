import React from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router-dom';
import Services from './Services';
import Testimonials from './Testimonials';
import About from './About';
import Awards from './Awards';
import Partnership from './Partnership';
import Location from './Location';
import { Helmet } from 'react-helmet';

const Home = () => {
    const services = useLoaderData();
  
    return (
        <div>
            <Helmet>
                <title>FixPro | Home</title>
            </Helmet>
            <Slider></Slider>
            <Services services={services}></Services>
            <Testimonials></Testimonials>
            <Awards></Awards>
            <About></About>
            <Partnership></Partnership>
            <Location></Location>
            
        </div>
    );
};

export default Home;