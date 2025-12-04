import React, { use } from 'react';
import { Link } from 'react-router';
import AuthContext from '../AuthContext/AuthContext';
import Swal from 'sweetalert2';

const NavBar = () => {
    const { user, Logout, } = use(AuthContext);

    const singout = () => {
        Logout().then(() => {
            Swal.fire({
                title: "LogOut your Account",
                icon: "success",
                draggable: true

            });
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-[#FFE3F2] bg-opacity-95 justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40">
                {/* Logo and Mobile Menu */}
                <div className="flex items-center gap-4">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black hover:bg-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-white rounded-xl z-50 mt-3 w-52 p-3 shadow-2xl border border-gray-200">
                            <li>
                                <Link to='/' className="hover:bg-indigo-50 text-black rounded-lg transition-colors duration-200 font-medium">Home</Link>
                            </li>
                            <li>
                                <Link to='/about' className="hover:bg-indigo-50 text-black rounded-lg transition-colors duration-200 font-medium">About</Link>
                            </li>
                            <li>
                                <Link to='/alltoy/All' className="hover:bg-indigo-50 text-black rounded-lg transition-colors duration-200 font-medium">All Toy</Link>
                            </li>
                            <li>
                                <Link to='/ContactUsToy' className="hover:bg-indigo-50 text-black rounded-lg transition-colors duration-200 font-medium">ContactUsToy</Link>
                            </li>
                            <li>
                                <Link to='/coverage' className="hover:bg-indigo-50 text-black rounded-lg transition-colors duration-200 font-medium">Location</Link>
                            </li>

                            {
                                user && <li>
                                    <Link to='/myprofile' className="hover:bg-indigo-50 text-black rounded-lg transition-colors duration-200 font-medium">MyProfile</Link>
                                </li>
                            }
                        </ul>
                    </div>
                    <Link to='/' className='text-xl sm:text-2xl md:text-3xl text-indigo-600 font-bold tracking-tight hover:scale-105 transition-transform duration-200 drop-shadow-lg'>
                        Toy_<span className='italic text-pink-600'>Topia</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2">
                        <li>
                            <Link
                                to='/'
                                className="text-black font-semibold hover:bg-white/20 rounded-lg px-4 py-2 transition-all duration-200 hover:scale-105"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about'
                                className="text-black font-semibold hover:bg-white/20 rounded-lg px-4 py-2 transition-all duration-200 hover:scale-105"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/alltoy/All'
                                className="text-black font-semibold hover:bg-white/20 rounded-lg px-4 py-2 transition-all duration-200 hover:scale-105"
                            >
                                All Toy
                            </Link>
                        </li>
                        <li>
                            <Link to='/ContactUsToy' className="hover:bg-white/20 px-4  text-black py-2 rounded-lg transition-colors duration-200 font-medium">ContactUsToy</Link>
                        </li>
                        <li>
                            <Link to='/coverage' className="hover:bg-white/20 px-4 text-black py-2 rounded-lg transition-colors duration-200 font-medium">Location</Link>
                        </li>

                        {
                            user && <li>
                                <Link
                                    to='/myprofile'
                                    className="text-black font-semibold hover:bg-white/20 rounded-lg px-4 py-2 transition-all duration-200 hover:scale-105"
                                >
                                    MyProfile
                                </Link>
                            </li>
                        }
                    </ul>
                </div>

                {/* Auth Buttons and Avatar */}
                <div className="flex items-center gap-3">
                    {
                        user ? (
                            <Link
                                to="/login"
                                onClick={singout}
                                className="btn bg-white text-indigo-600 hover:bg-gray-100 border-none font-semibold px-3 sm:px-4 md:px-6 text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                            >
                                LogOut
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                className="btn bg-white text-indigo-600 hover:bg-gray-100 border-none font-semibold px-3 sm:px-4 md:px-6 text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                            >
                                Login
                            </Link>
                        )
                    }
                    {
                        user && (
                            <Link to='/myprofile' className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom tooltip-success hover:ring-2 hover:ring-white/50 transition-all duration-200"
                                    data-tip={user.displayName}
                                >
                                    <div className=" rounded-full ring-2 ring-blue-800 shadow-lg">
                                        <img
                                            alt="User avatar"
                                            src={user.photoURL}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;

