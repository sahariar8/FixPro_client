import React from 'react';
import Navbar from '../../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/Footer';

const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;