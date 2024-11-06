"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked in mobile view
  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 pt-2 left-0 w-full px-5 bg-gradient-to-r bg-[#100826]/50 backdrop-blur-md flex justify-between items-center z-50">
      <a
        href={"#"}
        className="text-4xl cursor-pointer  
        font-extrabold text-transparent bg-clip-text bg-gradient-to-r
         from-[#CECBFF] via-[#A9A6FF] to-[#7270FF] animate-gradient 
         uppercase tracking-wide hover:rotate-2 transition-transform duration-500"
      >
        Linkly
      </a>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#CECBFF] focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-8 absolute md:relative bg-[#100826] text-center md:bg-transparent w-full md:w-auto top-full left-0 md:top-auto md:left-auto transition-all duration-500`}
      >
        <li>
          <a
            href="#features"
            onClick={closeMenu} // Close menu when clicked
            className="text-[#CECBFF] relative group transition duration-200 block md:inline-block p-4"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#testimonial"
            onClick={closeMenu} // Close menu when clicked
            className="text-[#CECBFF] relative group transition duration-200 block md:inline-block p-4"
          >
            Testimonials
          </a>
        </li>

        <li>
          <a
            href="#pricing"
            onClick={closeMenu} // Close menu when clicked
            className="text-[#CECBFF] relative group transition duration-200 block md:inline-block p-4"
          >
            Pricing
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
