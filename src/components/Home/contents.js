import React, { useState } from "react";
import Card from "../Cards/Card"; // Import Card component
import CreateStory from "../Create-Story";

function Contents() {
  const [isStoryModal, setIsStoryModal] = useState(false);

  const cardData = [
    {
      image: "/assets/images/card-1.jpg",
      title: "The Great Adventure",
      description:
        "Join John on his thrilling adventure through uncharted lands...",
    },
    {
      image: "/assets/images/card-2.jpg",
      title: "The Mystery of the Lost Treasure",
      description: "A journey to uncover hidden treasures in the jungle...",
    },
    {
      image: "/assets/images/card-3.jpg",
      title: "The Haunted Forest",
      description:
        "What lurks in the forest? Discover the secrets in this spooky tale...",
    },
    {
      image: "/assets/images/card-4.jpeg",
      title: "A memorable Night",
      description: "A journey to uncover hidden treasures in the jungle...",
    },
  ];

  function toggleStoryModal() {
    setIsStoryModal(!isStoryModal);

    if (!isStoryModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <>
      <div className="first-row flex justify-between items-center p-4 md:p-8">
        <h3 className="text-2xl md:text-3xl font-semibold border-b-4 border-orange-500 pb-2">
          All stories
        </h3>
        {isStoryModal && <CreateStory toggleStoryModal={toggleStoryModal} />}
        <button
          className="create-story-btn bg-orange-400 text-white py-2 px-4 rounded-md text-lg transition-all hover:bg-orange-500"
          onClick={toggleStoryModal}
        >
          Create Story
        </button>
      </div>

      <div className="cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 py-6">
        {cardData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </>
  );
}

export default Contents;
