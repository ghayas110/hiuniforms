import React from "react";

const Banner2 = ({ title }) => {
  return (
    <div className="relative w-full h-48 md:h-64 bg-black flex items-center justify-center text-white text-center">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('/images/dark-texture.png')" }}></div>

      {/* Overlay to ensure text visibility */}
      <div className="relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold uppercase">{title}</h1>
        <p className="text-sm md:text-base text-gray-400 mt-2">Home / {title}</p>
      </div>
    </div>
  );
};

export default Banner2;
