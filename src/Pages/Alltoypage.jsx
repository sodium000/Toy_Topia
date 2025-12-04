import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet} from 'react-router';
import LeftHome from '../Home/LeftHome';
import Footer from '../Footer/Footer';
import { useTitle } from "../CustomeHook/Hook";


const Alltoypage = () => {
    useTitle("Alltoy")
    return (
        <div>
            <nav className=''>
                <NavBar></NavBar>
            </nav>
             <div className='bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)]'>
                   <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6'>
                    <aside className='lg:col-span-2 lg:sticky lg:top-20 h-auto lg:h-fit' >
                        <LeftHome></LeftHome>
                    </aside>
                    <div className='lg:col-span-10'>
                        <Outlet></Outlet>
                    </div>
                </main>
             </div>
             <Footer></Footer>
        </div>
    );
};

export default Alltoypage;