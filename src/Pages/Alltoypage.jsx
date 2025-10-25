import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet} from 'react-router';
import LeftHome from '../Home/LeftHome';
import Footer from '../Footer/Footer';


const Alltoypage = () => {
    return (
        <div>
            <nav className=''>
                <NavBar></NavBar>
            </nav>
             <div className='bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)]'>
                   <main className='container mx-auto py-5 grid grid-cols-12 '>
                    <aside className='col-span-2 sticky top-0 h-0' >
                        <LeftHome></LeftHome>
                    </aside>
                    <Outlet></Outlet>  
                </main>
             </div>
             <Footer></Footer>
        </div>
    );
};

export default Alltoypage;