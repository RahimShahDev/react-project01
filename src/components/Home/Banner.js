import React from "react";
// import Card from "../Cards/Card"; // Import Card component

const Home = () => {
  return (
    <>
      <div
        className="relative flex justify-center items-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/public/assets/images/banner.webp')" }}

      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative text-center px-4 md:px-8 py-16 min-h-[400px] md:min-h-[500px] lg:min-h-[450px]">
          <div className="max-w-2xl mx-auto bg-black bg-opacity-50 p-8 rounded-lg">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              A space where stories come to life!
            </h1>
            <p className="text-white text-lg md:text-xl font-light leading-relaxed">
              Dive into a world of captivating narratives. Join our community of
              avid readers and storytellers. Share your thoughts, engage with the
              stories, and become part of a vibrant literary community. Each post is
              more than just words on a screen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
