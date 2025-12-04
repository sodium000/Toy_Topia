import React, { use, useRef, useState } from 'react';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router';
import AuthContext from '../AuthContext/AuthContext';
import Swal from 'sweetalert2'
import { updateProfile } from 'firebase/auth';
import { useTitle } from "../CustomeHook/Hook";

const Registration = () => {
    useTitle("Regiestion")

    const newErrors = {};
    const formRef = useRef(null);


    // regular expresion 
    const nameRegex = /^[A-Za-z\s]+$/;
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const [errors, setErrors] = useState({});


    const [toggle, settoggle] = useState(false)
    const [Ctoggle, setCtoggle] = useState(false)
    let navigate = useNavigate();

    const { RegWithEmail, setUser, SignByGoogle } = use(AuthContext);

    const NewUser = (event) => {
        event.preventDefault()
        const Email = event.target.email.value;
        const Name = event.target.name.value;
        const Photo_URl = event.target.image.value;
        const Password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value


        if (!nameRegex.test(Name)) {
            newErrors.name = "Name can only contain letters and spaces";
            setErrors(newErrors)
        }
        else if (!emailRegex.test(Email)) {
            newErrors.email = "Enter a valid email address";
            setErrors(newErrors)
        }
        else if (!passwordRegex.test(Password)) {
            newErrors.password = "Password must be 8+ chars, include upper, lower, number & symbol";
            setErrors(newErrors)
        }

        else if (confirmPassword !== Password) {
            newErrors.confirmPassword = "Passwords do not match";
            setErrors(newErrors)
        }

        else {

            RegWithEmail(Email, Password).then((result) => {
                const newUser = result.user
                updateProfile(newUser, {
                    displayName: Name, photoURL: Photo_URl
                }).then(() => {
                    setUser(newUser)
                })
                Swal.fire({
                    title: "Create Account Successfully",
                    icon: "success",
                    draggable: true

                });
                navigate(`${location.state ? location.state : "/"}`);
            })
                .catch((error) => {
                    if (error.code === "auth/email-already-in-use") {
                        Swal.fire({
                            title: "Allready have a account",
                            icon: "info",
                            draggable: true
                        });
                        formRef.current.reset()
                    }
                });
        }

    }

    const GoogleSingIn = () => {
        SignByGoogle().then((result) => {
            setUser(result.user);
            Swal.fire({
                title: "Create Account Successfully",
                icon: "success",
                draggable: true
            });
            navigate(`${location.state ? location.state : "/"}`);

        }).catch((error) => {
            console.log(error)
        });
    }


    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-400 via-purple-400 to-pink-300 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
                    <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
                </div>


                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-10 text-white">
                    <div className="max-w-lg text-center lg:text-left px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                            Create Your Account
                        </h1>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
                            Join our community and unlock exclusive features. Your journey
                            begins here!
                        </p>
                    </div>

                    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-white">
                            Sign Up
                        </h2>

                        <form ref={formRef} onSubmit={NewUser} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">User Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="UserName"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    required
                                />
                                {
                                    errors.name && <p className="text-red-500 text-sm">{errors.name}</p>
                                }
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
                                    required
                                />
                                {
                                    errors.email && <p className="text-red-500 text-sm">{errors.email}</p>
                                }
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
                                    required
                                />
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    settoggle(!toggle)

                                }} >{toggle ? <IoIosEyeOff className="btn btn-xs border-0 rounded-full  absolute right-1.5 top-8 z-10 bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)] bg-opacity-95" /> : <IoIosEye className="btn btn-xs border-0 rounded-full absolute right-1.5 top-8  z-10 bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)] bg-opacity-95" />}
                                </button>
                                {
                                    errors.password && <p className="text-red-500 text-sm">{errors.password}</p>
                                }
                            </div>


                            <div className="relative">
                                <label className="block text-sm font-medium mb-1">
                                    Confirm  Password
                                </label>
                                <input
                                    type={Ctoggle ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Re-enter password"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    required
                                />
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    setCtoggle(!Ctoggle)

                                }} >{Ctoggle ? <IoIosEyeOff className="btn btn-xs border-0 rounded-full  absolute right-1.5 top-8  z-10 bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)] bg-opacity-95" /> : <IoIosEye className="btn btn-xs border-0 rounded-full absolute right-1.5 top-8  z-10 bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)] bg-opacity-95" />}</button>
                                {
                                    errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                                }
                            </div>
                            <button type="submit" className="my-btn">
                                Resgistration
                            </button>
                            <button onClick={GoogleSingIn} className="my-btn border-[#e5e5e5]">
                                <svg  className='rounded-full' aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>

                            <div className="text-center mt-3">
                                <p className="text-sm text-white/80">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="text-pink-900 hover:text-white font-medium underline"
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