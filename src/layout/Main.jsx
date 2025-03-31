import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const main = () => {
    return (
        <div className='font-bebas'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default main;