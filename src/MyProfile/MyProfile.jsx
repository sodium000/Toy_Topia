import React, { useState } from "react";
import { use } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";



const MyProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { user, setUser, loading, Logout } = use(AuthContext)
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "guest user");
  const [currentPhotoURL, setCurrentPhotoURL] = useState(user?.photoURL);


  if (loading) {
    return <Loader />;
  }

       const singout = () => {
            Logout().then(() => {
                Swal.fire({
                    title: "LogOut your Account",
                    icon: "success",
                    draggable: true
    
                });
            }).catch((error) => {
                console.log(error)
            });
        }

  const handleUpdate = () => {

    updateProfile(auth.currentUser, {
      displayName: newDisplayName, photoURL: currentPhotoURL
    }).then(() => {
      setUser(auth.currentUser)
      setIsUpdating(false)
    })
  };

  return (

    <div className="min-h-screen bg-linear-to-br from-blue-100 to-indigo-900 flex items-center justify-center py-10 px-4 relative">
      <div className="relative max-w-md w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-2xl overflow-hidden p-8 text-center transition-all duration-500 transform hover:shadow-3xl">

        <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-blue-900 via-pink-100 to-transparent"></div>


        <div className="flex justify-center mb-5">
          <div className="relative">
            <img
              src={
                currentPhotoURL ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="User Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg ring-4 ring-blue-300 transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white animate-pulse"></div>
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900">{newDisplayName}</h2>
        <p className="text-lg text-gray-600 mb-4">{user?.email}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setIsUpdating(true)} // Open the update form
            className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold shadow-md hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <span className="mr-2">✏️</span> Update Profile
          </button>
          <button onClick={singout} className="bg-transparent border-2 border-red-500 text-red-500 py-3 px-8 rounded-full font-bold hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            <span className="mr-2">🚪</span> Logout
          </button>
        </div>
      </div>

      {isUpdating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm transform scale-100 transition-transform duration-300 relative border-t-8 border-blue-500">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Update Your Profile</h3>

            <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
              <div className="mb-4">
                <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 text-left mb-1">Display Name</label>
                <input
                  id="displayName"
                  type="text"
                  onChange={(e) => setNewDisplayName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter new display name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 text-left mb-1">New Photo URL</label>
                <input
                  id="photoURL"
                  type="url"
                  onChange={(e) => setCurrentPhotoURL(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Paste image URL"
                />
                <p className="text-xs text-gray-500 mt-1 text-left">💡 Changing this will update your profile picture.</p>
              </div>

              <div className="flex justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setIsUpdating(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
