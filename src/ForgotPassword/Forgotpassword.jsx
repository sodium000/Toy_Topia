import React, { use } from 'react';
import { useLocation, useNavigate } from 'react-router';
import AuthContext from '../AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Forgotpassword = () => {
    const location = useLocation();
    const received = location.state?.myValue; 

    const {resetPassword } = use(AuthContext)

    let navigate = useNavigate();


    const newRestpass = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        if (received) {
            resetPassword(received).then(() => {
            Swal.fire({
                title: "Please Check Your Mail",
                icon: "success",
                draggable: true
            });
        })
        .catch((error) => {
            console.log(error)
        });
        }
        else{
            resetPassword(email).then(() => {
            Swal.fire({
                title: "Please Check Your Mail",
                icon: "success",
                draggable: true
            });
        })
        .catch((error) => {
            console.log(error)
        });
        }

        navigate(-1);
    }

    return (
        <div>
            <div className=" h-[846px] bg-gradient-to-br from-amber-400 via-fuchsia-500 to-violet-800  w-full flex items-center justify-center  p-4 backdrop-blur-sm transition-opacity duration-300">
                <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm transform scale-100 transition-transform duration-300 relative border-t-8 border-blue-500">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Reset Your Password</h3>

                    <form onSubmit={newRestpass} >
                        <div className="mb-4">
                            <label  className="block text-sm font-medium text-gray-700 text-left mb-1">Email</label>
                            <input
                                value={received}
                                name='email'
                                type="email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="Enter new Email"
                            />
                        </div>
                        <div className="flex justify-between gap-3">
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forgotpassword;