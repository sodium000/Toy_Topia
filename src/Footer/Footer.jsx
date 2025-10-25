import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-gray-300 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700">
                <div>
                    <img
                        src="https://i.ibb.co/JstDJzM/rfl-logo.png"
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
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs">
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