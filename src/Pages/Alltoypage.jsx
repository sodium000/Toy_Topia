import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet} from 'react-router';
import LeftHome from '../Home/LeftHome';


const Alltoypage = () => {
    return (
        <div>
            <nav className='container mx-auto'>
                <NavBar></NavBar>
            </nav>
                <main className='container mx-auto my-5 grid grid-cols-12 '>
                    <aside className='col-span-2 sticky top-0 h-0' >
                        <LeftHome></LeftHome>
                    </aside>
                    <Outlet></Outlet>  
                </main>
        </div>
    );
};

export default Alltoypage;