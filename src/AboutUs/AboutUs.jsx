import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useTitle } from '../CustomeHook/Hook'
import { Link } from 'react-router';


const AboutUs = () => {
    useTitle("AboutUs")
    return (
        <div>
            <NavBar></NavBar>
            <div className=" font-sans">
                <div className="relative bg-red-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Career</h1>
                    </div>
                    <div className="absolute right-0 top-0 h-full hidden md:block">
                        <img
                            src="https://i.ibb.co.com/8Lgr5Xmn/logo9.jpg"
                            alt="Career Illustration"
                            className="h-full object-contain opacity-90"
                        />
                    </div>
                </div>
                <div className="bg-gray-100 text-sm text-gray-500 py-3 px-6">
                    <div className="max-w-7xl mx-auto flex gap-2">
                        <span>Home</span>
                        <span>•</span>
                        <span className="text-red-600 font-semibold">Career</span>
                    </div>
                </div>

                <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-red-600">
                                <i className="fa-solid fa-location-dot text-xl sm:text-2xl"></i>
                                <h2 className="text-xl sm:text-2xl font-semibold">Store Location</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                ToyTopia stores are located throughout Bangladesh to make shopping easier and
                                more convenient for you. Whether you’re searching for home essentials,
                                kitchenware, furniture, or industrial products, there’s always an ToyTopia
                                outlet nearby. Visit your closest showroom and discover our wide
                                selection of quality products — all in one place.
                            </p>
                            <Link to='/coverage' className="btn btn-outline btn-error ">
                                Store Locator
                            </Link>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-red-600">
                                <i className="fa-solid fa-phone text-xl sm:text-2xl"></i>
                                <h2 className="text-xl sm:text-2xl font-semibold">Contact Us</h2>
                            </div>
                            <p className="text-gray-700">
                                Have any questions? We are here to talk!
                            </p>
                            <p className="text-gray-700">
                                Let us know your queries.
                            </p>
                            <Link to='/ContactUsToy' className="btn btn-outline btn-error">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
                <Link to='/coverage'>
                    <button className="fixed right-0 sm:right-3 top-1/2 -translate-y-1/2 bg-red-600 text-white font-semibold py-1.5 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm rounded-l-md rotate-90 origin-right hover:bg-red-700 transition">
                        STORE LOCATOR
                    </button>
                </Link>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;