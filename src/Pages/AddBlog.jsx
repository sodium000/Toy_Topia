import React from 'react';
import { useNavigate } from 'react-router';
import { useTitle } from "../CustomeHook/Hook";

const AddBlog = () => {
    useTitle("AddBlog")
      let navigate = useNavigate();
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-100 to-purple-100">
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-6 text-purple-700">Add a New Blog Comment</h1>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Toy Name"
                            className="input input-bordered w-full"
                            // required
                        />
                        <input
                            type="number"
                            placeholder="Topic"
                            className="input input-bordered w-full"
                            // required
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            className="input input-bordered w-full"
                        />
                        <textarea
                            placeholder="Description"
                            className="textarea textarea-bordered w-full"
                            rows="3"
                        ></textarea>
                        <button onClick={() => navigate(-1)} type="submit" className="btn btn-primary w-full">Add Blog</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;