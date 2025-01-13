import React, { useState } from "react";

function ProfileUpdateModal({ onClose }) {
    const [profilePicture, setProfilePicture] = useState(null);
    const [coverPicture, setCoverPicture] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const handleImageUpload = (e, setImage) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedProfile = {
            profilePicture,
            coverPicture,
            name,
            email,
            description,
        };

        console.log("Updated Profile:", updatedProfile);
        alert("Profile updated successfully!");
        onClose();
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[480px] max-w-[90%] relative">
                <button
                    className="absolute top-3 right-3 text-2xl text-black hover:text-gray-700 cursor-pointer transition"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-center mb-4 text-xl font-semibold text-black">Update Profile</h2>
                <form onSubmit={handleSubmit}>
                    {/* Row 1: Profile and Cover Pictures */}
                    <div className="flex justify-between mb-4">
                        <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition">
                            <label htmlFor="profilePicture" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
                                {profilePicture ? (
                                    <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <span>Upload Profile</span>
                                )}
                            </label>
                            <input
                                id="profilePicture"
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, setProfilePicture)}
                                hidden
                            />
                        </div>
                        <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition">
                            <label htmlFor="coverPicture" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
                                {coverPicture ? (
                                    <img src={coverPicture} alt="Cover" className="w-full h-full object-cover" />
                                ) : (
                                    <span>Upload Cover</span>
                                )}
                            </label>
                            <input
                                id="coverPicture"
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, setCoverPicture)}
                                hidden
                            />
                        </div>
                    </div>

                    {/* Row 2: Name and Email */}
                    <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4 sm:gap-8">
                        <div className="flex-1">
                            <label className="block font-semibold mb-1 text-black">Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                                className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block font-semibold mb-1 text-black">Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Row 3: About/Description */}
                    <div className="mb-4">
                        <label className="block font-semibold mb-1 text-black">About/Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Tell us about yourself"
                            rows="3"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Row 4: Update Profile Button */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileUpdateModal;
