import React, { useState } from "react";
import ProfileUpdateModal from "../ProfileUpdateModal/ProfileUpdateModal";
import CreateStory from "../Create-Story/index";

function Profile() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  // Handlers for Profile Modal
  const handleOpenProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  // Handlers for Story Modal
  const handleOpenStoryModal = () => {
    setIsStoryModalOpen(true);
  };

  const handleCloseStoryModal = () => {
    setIsStoryModalOpen(!isStoryModalOpen);
  };

  return (
    <div className="relative flex justify-center items-end h-[55vh] bg-cover bg-center bg-fixed bg-gradient-to-t from-black via-transparent to-transparent"
    style={{ backgroundImage: "url('/Assets/images/banner.webp')" }}
>
      
      <div className="absolute bottom-[-180px] flex flex-col sm:flex-row justify-between items-center w-[95%] sm:w-full px-6 py-4 rounded-xl shadow-lg md:bottom-[-70px]">
        {/* User Details */}
        <div className="flex flex-col items-center text-black mb-4 sm:mb-0">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white mb-2">
            <img src="/assets/images/user.svg" alt="User" className="object-cover w-full h-full" />
          </div>
          <p className="text-xl font-bold">Rahim Shah</p>
        </div>
        {/* Story Count */}
        <div className="text-lg font-semibold text-black md:text-white mb-4 sm:mb-0">
          <p>4 Stories</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-row">
          <button
            className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
            onClick={handleOpenStoryModal}
          >
            Create Story
          </button>
          <button
            className="px-6 py-3 text-sm font-semibold bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
            onClick={handleOpenProfileModal}
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Modals */}
      {isProfileModalOpen && <ProfileUpdateModal onClose={handleCloseProfileModal} />}
      {isStoryModalOpen && <CreateStory toggleStoryModal={handleCloseStoryModal} />}
    </div>
  );
}

export default Profile;
