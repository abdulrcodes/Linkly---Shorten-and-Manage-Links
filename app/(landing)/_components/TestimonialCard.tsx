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
