import React from "react";
import { FaArchive, FaHeart } from "react-icons/fa";

const Card = ({ image, title, description }) => {
  // Dummy user data for display purposes
  const user = {
    name: "John Doe",
    image: "Assets/images/user.svg",
    day: Math.floor(Math.random() * 28) + 1 // Random day between 1 and 28
  };

  return (
    <div className="bg-white shadow-lg transition-transform duration-300 ease-in-out transform hover:shadow-xl flex flex-col rounded-lg overflow-hidden">
      {/* User section at the top of the card */}
      <div className="flex items-center p-4 border-b border-gray-300">
        <img src={user.image} alt="User Avatar" className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-gray-200" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800">{user.name}</span>
          <span className="text-xs text-gray-500">{user.day} days ago</span>
        </div>
      </div>
      
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      <div className="flex justify-between items-center p-4 border-t border-gray-300">
        <button className="flex items-center text-sm text-gray-800 hover:text-blue-500">
          <FaArchive className="mr-2 text-lg" /> Archives
        </button>
        <button className="flex items-center text-sm text-gray-800 hover:text-red-500">
          <FaHeart className="mr-2 text-lg" /> Like
        </button>
      </div>
    </div>
  );
};

export default Card;
