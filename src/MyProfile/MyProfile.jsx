import React from "react";

    // const safeArray = Array.isArray(data) ? data : []
    // const highData = [...safeArray].sort((a,b)=>b.ratingAvg - a.ratingAvg);
    // const ratingData = highData.slice(0,8);

const MyProfile = ({ user }) => {
  const { name, email, photo, phone, address } = user || {};

  return (
    <div className="max-w-md mx-auto bg-white border rounded-2xl shadow-md p-6 mt-10 text-center">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={
            photo ||
            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          }
          alt="User Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
        />
      </div>

      {/* User Info */}
      <h2 className="text-xl font-semibold text-gray-800">{name || "Guest User"}</h2>
      <p className="text-gray-600">{email || "example@email.com"}</p>

      {/* Optional Details */}
      {phone && <p className="text-sm text-gray-500 mt-2">📞 {phone}</p>}
      {address && <p className="text-sm text-gray-500">{address}</p>}

      {/* Actions */}
      <div className="mt-5 flex justify-center gap-3">
        <button className="btn btn-primary btn-sm px-6"> UpdateProfile</button>
        <button className="btn btn-outline btn-error btn-sm px-6">Logout</button>
      </div>
    </div>
  );
};

export default MyProfile;
