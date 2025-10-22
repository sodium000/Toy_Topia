import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link } from 'react-router';


const Login = () => {
    const [toggle, settoggle] = useState(false)
    
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
                {/* Animated glow orbs */}
                <div className="absolute inset-0">
                    <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
                    <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
                    {/* Left section */}
                    <div className="max-w-lg text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold drop-shadow-lg">
                            Welcome Back
                        </h1>
                        <p className="mt-4 text-lg text-white/80 leading-relaxed">
                            Sign in to continue your journey. Manage your account, explore new
                            features, and more.
                        </p>
                    </div>

                    {/* Login card */}
                    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
                        <form onSubmit={Login} className="space-y-5">
                            <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                                Sign In
                            </h2>

                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-sm mb-1">Password</label>
                                <input
                                    type={toggle ? "text" : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    settoggle(!toggle)

                                }} >{toggle ? <IoIosEyeOff className="btn btn-xs rounded-full border-0  absolute right-1.5 bottom-[8px] z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" /> : <IoIosEye className="btn border-0 btn-xs rounded-full absolute right-1.5 bottom-[8px] z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" />}</button>
                            </div>

                            <button  type="submit" className="my-btn">
                                Login
                            </button>
                            <button className="text-sm text-pink-300/90 mt-3 hover:text-white underline cursor-pointer">
                                Forgot Password
                            </button>

                            <p className="text-center text-sm text-white/80 mt-3">
                                Don’t have an account?{" "}
                                <a to="/auth/regestration"
                                    className="text-pink-300 hover:text-white underline"
                                >
                                    Sign up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;