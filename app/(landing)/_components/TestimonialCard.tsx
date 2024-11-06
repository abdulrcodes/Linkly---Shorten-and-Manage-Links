import React from "react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative bg-[#1f1d3b] p-8 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-2 hover:shadow-2xl mb-4 overflow-hidden">
      {/* Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur-sm opacity-25"></div>

      {/* Quote Icon (SVG) */}
      <div className="relative z-10 flex justify-center -mt-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-purple-400"
        >
          <path
            d="M9.5 3C6.46 3 4 5.46 4 8.5C4 11.54 6.46 14 9.5 14H10V16H7V21H12V10.5C12 6.91 9.09 4 5.5 4C6.74 4 7.9 4.4 8.91 5.09C9.93 5.79 10.73 6.69 11.24 7.69C11.77 8.7 12 9.83 12 11V12.5H14C17.54 12.5 20 9.54 20 6C20 2.46 17.54 0 14 0H9.5C10.5 0 11.5 0.4 12.5 1.1C13.5 1.8 14.3 2.6 14.9 3.5C15.5 4.5 15.8 5.6 16 6.8C16.2 8 16 9.2 15.5 10.3C14.9 11.5 14 12.5 13 13.5L12.5 13.5L12 13.5"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Image */}
      <img
        src={testimonial.imageUrl}
        alt={testimonial.name}
        className="relative z-10 w-16 h-16 rounded-full mx-auto mt-4 mb-6 object-cover border-2 border-purple-500 shadow-lg"
      />

      {/* Quote */}
      <blockquote className="relative z-10 text-gray-200 text-center italic font-light text-sm md:text-base line-clamp-3 mb-4">
        "{testimonial.quote}"
      </blockquote>

      {/* Name */}
      <cite className="relative z-10 block mt-4 text-center font-semibold text-white text-sm md:text-base">
        - {testimonial.name}
      </cite>
    </div>
  );
};

export default TestimonialCard;
