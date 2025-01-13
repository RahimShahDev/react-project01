import React, { useState } from "react";

function CreateStory({ toggleStoryModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // State for storing the uploaded image

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation check
    if (!title || !description || !image) {
      alert("Please fill in all fields and upload an image!");
      return;
    }

    // Reset the form after submission
    setTitle("");
    setDescription("");
    setImage(null);
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Set image preview
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[480px] max-w-[90%] relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-2xl text-black hover:text-gray-700 cursor-pointer transition0"
          onClick={toggleStoryModal}
        >
          &times;
        </button>

        <h2 className="text-center mb-4 text-xl font-semibold text-black">Create Story</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          {/* Title Input */}
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              id="title"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter Story Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description Input */}
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              id="description"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter Story Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Image Upload */}
          <div className="flex items-center gap-4">
            <div className="w-52 h-40 flex justify-center items-center border-2 border-gray-300 rounded-lg bg-gray-100 relative cursor-pointer">
              <label htmlFor="image" className="absolute inset-0 flex justify-center items-center text-4xl text-gray-400">
                +
              </label>
              <input
                type="file"
                id="image"
                className="opacity-0 w-full h-full"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {image && (
              <div className="w-52 h-40 flex justify-center items-center border-2 border-yellow-500 rounded-lg overflow-hidden">
                <img src={image} alt="Story" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mx-auto px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-orange-500 transition-colors"
          >
            Create Story
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateStory;
