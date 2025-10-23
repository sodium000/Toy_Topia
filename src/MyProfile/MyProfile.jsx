import React from "react";

    

const MyProfile = ({ user }) => {
  const { name, email, photo, address } = user || {};

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100  to-indigo-900 flex items-center justify-center py-10 px-4">
      <div className="relative max-w-md w-full bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl overflow-hidden p-8 text-center">

        <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-blue-900 via-pink-100 to-transparent"></div>


        <div className="flex justify-center mb-5">
          <div className="relative">
            <img
              src={
                photo ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="User Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg ring-4 ring-blue-200 transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800">{name || "Guest User"}</h2>
        <p className="text-gray-500 mb-4">{email || "example@email.com"}</p>

  
        <div className="space-y-1 text-sm text-gray-600">
          {address && <p>📍 {address}</p>}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-5"></div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button className="btn btn-primary px-6 font-semibold shadow-md hover:shadow-lg transition-all">
            ✏️ Update Profile
          </button>
          <button className="btn btn-outline btn-error px-6 font-semibold hover:scale-105 transition-all">
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
