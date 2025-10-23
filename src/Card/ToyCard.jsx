import React from "react";
import { Link } from "react-router";
import AuthContext from "../AuthContext/AuthContext";

const ToyCard = ({ ratingData }) => {
    return (
        <div  className="max-w-sm mb-10 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-sky-300 p-4">
            {/* Thumbnail */}
            <img
                src={ratingData.pictureURL}
                alt=''
                className="w-full h-48 object-cover rounded-xl"
            />

            {/* Content */}
            <div className="mt-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">{ratingData.toyName}</h2>

                <div className="flex justify-between text-sm text-gray-600">
                    <p>
                        ⭐ <span className="font-medium">{ratingData.rating}</span>
                    </p>
                    <p>
                        Available: <span className="font-medium">{ratingData.availableQuantity}</span>
                    </p>
                </div>

                <p className="text-lg font-bold text-blue-600">${ratingData.price}</p>

                <Link to={`/toydetails/${ratingData.toyId}`}>
                    <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors" >
                    View More
                </button>
                </Link>
            </div>
        </div>
    );
};

export default ToyCard;