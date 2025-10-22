import React, { useState } from 'react';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

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

                        <form  className="space-y-4">
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
                                    name = 'image'
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 pt-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
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

                                }} >{toggle ? <IoIosEyeOff className="btn btn-xs border-0 rounded-full  absolute right-1.5 bottom-[8px] z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" /> : <IoIosEye className="btn btn-xs border-0 rounded-full absolute right-1.5 bottom-[8px] z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" />}</button>
                            </div>
                            <button type="submit" className="my-btn">
                                Sign Up
                            </button>

                            <div className="text-center mt-3">
                                <p className="text-sm text-white/80">
                                    Already have an account?{" "}
                                    <a
                                        to="/auth"
                                        className="text-pink-300 hover:text-white font-medium underline"
                                    >
                                        Sign in
                                    </a>
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