import { features } from "@/constants";
import { Feature } from "@/types";

import React from "react";

const FeaturesSection = () => {
  return (
    <section
      className="bg-[#110926] py-16 text-white text-center px-2"
      id="features"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Explore Our Amazing Features
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto">
        Linkly offers a suite of powerful features designed to help you shorten,
        track, and manage your links effortlessly. Discover how we can enhance
        your link sharing experience!
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature: Feature, index) => (
          <div
            key={index}
            className="bg-[#161427] p-4 sm:p-6 rounded-lg shadow-md w-56 sm:w-64 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
