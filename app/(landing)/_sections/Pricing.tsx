import React from "react";

const PricingSection = () => {
  return (
    <section className="py-16 bg-[#110926] text-center" id="pricing">
      <h2 className="text-4xl font-bold text-white mb-12">Pricing</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Free Plan */}
        <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-lg shadow-lg w-64 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-white mb-2">Free Plan</h3>
          <p className="text-gray-300 mb-4">Basic features for personal use</p>
          <p className="font-bold text-3xl text-white mb-6">$0/month</p>
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300">
            Select
          </button>
          <span className="absolute top-2 right-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
            Popular
          </span>
        </div>

        {/* Pro Plan */}
        <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-lg shadow-lg w-64 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-white mb-2">Pro Plan</h3>
          <p className="text-gray-300 mb-4">Advanced features for businesses</p>
          <p className="font-bold text-3xl text-white mb-6">$9.99/month</p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300">
            Select
          </button>
          <span className="absolute top-2 right-2 text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
            Best Value
          </span>
        </div>

        {/* Premium Plan */}
        <div className="relative bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-lg shadow-lg w-64 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-white mb-2">
            Premium Plan
          </h3>
          <p className="text-gray-300 mb-4">All features for large teams</p>
          <p className="font-bold text-3xl text-white mb-6">$29.99/month</p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">
            Select
          </button>
          <span className="absolute top-2 right-2 text-xs bg-pink-500 text-white px-2 py-1 rounded-full">
            New
          </span>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
