import React, { useState } from 'react';
import { use } from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../AuthContext/AuthContext';
import Swal from 'sweetalert2';


const Login = () => {
    const [toggle, settoggle] = useState(false)
    const [Emails, setEmail] = useState()
    let navigate = useNavigate();

    const { Login, setUser, SignByGoogle } = use(AuthContext)

    const location = useLocation();

    const GoogleSingIn = () => {
        SignByGoogle().then((result) => {
            setUser(result.user);
            Swal.fire({
                title: "LogIn Sunccess",
                icon: "success",
                draggable: true
            });
            navigate(`${location.state ? location.state : "/"}`);

        }).catch((error) => {
            console.log(error)
        });
    }

    const SignIn = (event) => { 
        event.preventDefault()
        const Email = event.target.email.value;
        const Password = event.target.password.value;
        Login(Email, Password).then((result) => {
            setUser(result.user)
            Swal.fire({
                title: "LogIn Success",
                icon: "success",
                draggable: true
            });
            navigate(`${location.state ? location.state : "/"}`);
        })
            .catch((error) => {
                if (error.code === "auth/invalid-credential") {
                    Swal.fire({
                        title: "User Not Found",
                        icon: "error",
                        draggable: true
                    });
                }
                if (error.code === "auth/missing-password") {
                    Swal.fire({
                        title: "Please Input Password",
                        icon: "error",
                        draggable: true
                    });
                }
                if (error.code === "auth/invalid-email") {
                    Swal.fire({
                        title: "Give Your Email ",
                        icon: "error",
                        draggable: true
                    });
                }
            });
    }
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
                        <form onSubmit={SignIn} className="space-y-5">
                            <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                                Sign In
                            </h2>

                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={null}
                                    onChange={(e) => setEmail(e.target.value)}
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

                                }} >{toggle ? <IoIosEyeOff className="btn btn-xs rounded-full border-0  absolute right-1.5 bottom-2 z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" /> : <IoIosEye className="btn border-0 btn-xs rounded-full absolute right-1.5 bottom-2 z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" />}</button>
                            </div>

                            <button type="submit" className="my-btn mb-5">
                                Login
                            </button>
                        </form>
                        <button onClick={GoogleSingIn} className="my-btn border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <Link to='/forgotpassword' state={{ myValue: Emails }} className="text-sm text-pink-300/90 mt-3 hover:text-white underline cursor-pointer">
                                Forgot Password
                            </Link>

                            <p className="text-center text-sm text-white/80 mt-3">
                                Don’t have an account?{" "}
                                <Link to="/registration"
                                    className="text-pink-300 hover:text-white underline"
                                >
                                    Sign up
                                </Link>
                            </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;