import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <div className=''>
            <div className="  navbar bg-linear-to-r from-indigo-300 via-sky-400  to-pink-400 shadow-sm justify-around">
                <div className="flex">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/myprofile'>MyProfile</Link></li>
                    </ul>
                </div>
                    <Link to='/' className='text-black text-2xl '>ToyTopia</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold text-blue-700'><Link to='/'>Home</Link></li>
                        <li className='font-bold text-blue-700'><Link to='/about'>About</Link></li>
                        <li className='font-bold text-blue-700'><Link to='/myprofile'>MyProfile</Link></li>
                    </ul>
                </div>
                <div className="flex gap-5">
                    <Link to="/login" className="btn btn-soft btn-primary px-10">Login</Link>
                    <Link to='/myprofile' className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom tooltip-success" data-tip={"tonmoy"}>
                            <div className="w-10 rounded-full">
                                    <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default NavBar;

