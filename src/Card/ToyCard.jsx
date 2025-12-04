import React from "react";
import { Link } from "react-router";

const ToyCard = ({ ratingData }) => {
    return (
        <div  className="w-full max-w-full mb-2 bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)] bg-opacity-95 text-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-3 sm:p-4">
            <img
                src={ratingData.pictureURL}
                alt=''
                className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-xl"
            />
            <div className="mt-3 sm:mt-4 space-y-2">
                <h2 className="text-base sm:text-lg font-semibold line-clamp-2">{ratingData.toyName}</h2>

                <div className="flex justify-between text-sm">
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