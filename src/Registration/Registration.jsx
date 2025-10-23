import React, { useState } from 'react';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from 'react-router';

const Registration = () => {
    const [toggle, settoggle] = useState(false)
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
                {/* Animated floating circles */}
                <div className="absolute inset-0">
                    <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
                    <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
                </div>


                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
                    <div className="max-w-lg text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold drop-shadow-lg">
                            Create Your Account
                        </h1>
                        <p className="mt-4 text-lg text-white/80 leading-relaxed">
                            Join our community and unlock exclusive features. Your journey
                            begins here!
                        </p>
                    </div>

                    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                            Sign Up
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">User Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="UserName"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Image</label>
                                <input
                                    type="text"
                                    name='image'
                                    placeholder="Photo URL"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 pt-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium mb-1">
                                    Password
                                </label>
                                <input
                                    type={toggle ? "text" : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    settoggle(!toggle)

                                }} >{toggle ? <IoIosEyeOff className="btn btn-xs border-0 rounded-full  absolute right-1.5 bottom-2 z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" /> : <IoIosEye className="btn btn-xs border-0 rounded-full absolute right-1.5 bottom-2 z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" />}</button>
                            </div>
                            <button type="submit" className="my-btn">
                                Resgistration
                            </button>
                            <button className="my-btn border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>

                            <div className="text-center mt-3">
                                <p className="text-sm text-white/80">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="text-pink-300 hover:text-white font-medium underline"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;