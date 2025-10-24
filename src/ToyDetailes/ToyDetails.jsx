import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ToyDetails = () => {
    const [toy, settoy] = useState({});
    const { id } = useParams();
    const data = useLoaderData();


    useEffect(() => {
        const newsDetails = data.find((singletoy) => singletoy.toyId == id);
        settoy(newsDetails);
    }, [data, id]);

    //     {
    //     "toyId": 1,
    //     "toyName": "Lego Classic Bricks",
    //     "sellerName": "Toys R Us Local",
    //     "sellerEmail": "contact@toysruslocal.com",
    //     "price": 49.99,
    //     "rating": 4.7,
    //     "availableQuantity": 75,
    //     "description": "A timeless set of colorful Lego bricks that encourages creativity and problem-solving.",
    //     "pictureURL": "https://cdn.pixabay.com/photo/2016/03/31/20/11/lego-1297582_1280.png",
    //     "subCategory": "Building & Educational"
    //   }

    const notification = (event) => {
        event.preventDefault()
        Swal.fire({
            title: "You Can try it",
            icon: "success",
            draggable: true
        });
    }


    return (
        <div className="min-h-screen bg-linear-to-br from-blue-600 via-emerald-500 to-violet-600 py-12 px-4 flex justify-center">
            <div className="max-w-4xl w-full bg-white/80 backdrop-blur-md shadow-xl rounded-3xl overflow-hidden border border-gray-100">
                <div className="relative group">
                    <img
                        src={toy.pictureURL}
                        alt={toy.toyName}
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                        ${toy.price}
                    </div>

                    <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                        ⭐ {toy.rating}
                    </div>
                </div>

                <div className="p-8 space-y-5">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">{toy.toyName}</h1>
                            <p className="text-gray-500 text-sm mt-1">
                                Category: <span className="font-medium">{toy.subCategory}</span>
                            </p>
                        </div>
                        <div className="mt-2 md:mt-0 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                        </div>
                    </div>

                    <div className="border-t border-gray-200"></div>

                    <div className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row justify-between md:items-center">
                        <div>
                            <p className="font-semibold text-gray-800">{toy.sellerName}</p>
                            <p className="text-gray-600 text-sm">{toy.sellerEmail}</p>
                        </div>
                        <div className="mt-3 md:mt-0">
                            <button className="btn btn-sm btn-outline btn-info">Contact Seller</button>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Description
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{toy.description}</p>
                    </div>
                    <div className="pt-4 flex justify-center">
                        <button className="btn btn-primary btn-wide text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-md">
                            🛒 Buy Now
                        </button>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-inner space-y-4 border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Enter Your Info</h3>

                        <form onSubmit={notification} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="flex justify-center pt-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary text-white font-semibold px-8 py-2 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
                                >
                                    Try Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
