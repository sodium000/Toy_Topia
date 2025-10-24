import React from 'react';
import { useNavigate } from 'react-router';



const Error = () => {
      let navigate = useNavigate();
    return (
             <>
            <div className="min-h-screen flex items-center justify-center p-4 errorBody">
                <div className="max-w-xl w-full mx-auto text-center p-8 md:p-12 bg-gray-800 rounded-2xl card-shadow">
                    <h1 className="gradient-text text-8xl md:text-9xl font-extrabold mb-4 transition duration-500 ease-in-out transform hover:scale-105">
                        404
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        LOST IN THE BLACK-HOLE
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        It looks like the page you were trying to find has been disintegrated, or maybe it never existed. Don't worry, even astronauts get lost sometimes.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        
                        <a href="/" className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:-translate-y-0.5 shadow-lg">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0v-6a1 1 0 011-1h2a1 1 0 011 1v6"></path></svg>
                            Return to Homepage
                        </a>

                        <button onClick={() => navigate(-1)} className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-xl text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out transform hover:-translate-y-0.5 shadow-lg">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
                            Go Back
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Error;