import React from 'react';
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer'

const HomeLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;