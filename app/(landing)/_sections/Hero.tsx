import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-[#110926] text-white text-center py-20 overflow-hidden"
      id="hero"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-10 px-4 tracking-tight">
        Effortlessly Shorten and Manage Links
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-8 px-4">
        Linkly makes it easy to create, share, and track your links.
      </p>
      <button className="bg-white text-[#0F0626] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200 text-sm md:text-lg">
        Get Started
      </button>

      {/* Banner Image */}
      <div className="w-full flex justify-center">
        <img
          src="/appBanner.png"
          alt="Banner"
          className="w-full lg:w-[120%] max-w-7xl lg:-mt-32 "
        />
      </div>
    </section>
  );
};

export default HeroSection;
