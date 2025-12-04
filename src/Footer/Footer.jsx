import React from "react";

const Footer = () => {
    return (
        <footer className=" bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)]  text-sm rounded pb-5">
            <div className=" container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 border-b border-gray-700">
                <div>
                    <img
                        src="https://i.ibb.co.com/8Lgr5Xmn/logo9.jpg"
                        alt="RFL Logo"
                        className="w-16 mb-3"
                    />
                    <p className="leading-relaxed">
                        <span className="font-semibold">Toy-Topia Center,</span> <br />
                        105 Pragati Sarani, Middle Badda, Dhaka-1212, <br />
                        Bangladesh
                    </p>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="text-white font-semibold mb-3">About Us</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-red-500">Inception</a></li>
                        <li><a href="#" className="hover:text-red-500">Milestones</a></li>
                        <li><a href="#" className="hover:text-red-500">Factories</a></li>
                    </ul>
                </div>

                {/* Businesses */}
                <div>
                    <h3 className="text-white font-semibold mb-3">BUSINESSES</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-red-500">CATEGORY & PRODUCT</a></li>
                        <li><a href="#" className="hover:text-red-500">Brands</a></li>
                        <li><a href="#" className="hover:text-red-500">Export</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-red-500">Privacy</a></li>
                        <li><a href="#" className="hover:text-red-500">Terms and Conditions</a></li>
                        <li><a href="#" className="hover:text-red-500">FAQ</a></li>
                    </ul>
                </div>
            </div>

            {/* ======= Bottom Bar ======= */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
                <div className="space-x-4 mb-2 sm:mb-0">
                    <a href="#" className="hover:text-red-500">Terms of Use</a>
                    <a href="#" className="hover:text-red-500">Privacy</a>
                    <a href="#" className="hover:text-red-500">Sitemap</a>
                    <a href="#" className="hover:text-red-500">Contact</a>
                </div>
                <p>© 2025 RFL | All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;