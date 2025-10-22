import React from "react";

const ToyCard = ({ toy }) => {
    const { thumbnail, toyName, rating, availableQuantity, price } = toy;

    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-sky-300 p-4">
            {/* Thumbnail */}
            <img
                src={thumbnail}
                alt={toyName}
                className="w-full h-48 object-cover rounded-xl"
            />

            {/* Content */}
            <div className="mt-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">{toyName}</h2>

                <div className="flex justify-between text-sm text-gray-600">
                    <p>
                        ⭐ <span className="font-medium">{rating}</span>
                    </p>
                    <p>
                        Available: <span className="font-medium">{availableQuantity}</span>
                    </p>
                </div>

                <p className="text-lg font-bold text-blue-600">${price}</p>

                <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">
                    View More
                </button>
            </div>
        </div>
    );
};

export default ToyCard;