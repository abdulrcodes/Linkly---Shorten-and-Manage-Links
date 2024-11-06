import { testimonials } from "@/constants";
import { Testimonial } from "@/types";
import React from "react";
import TestimonialCard from "../_components/TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section className="bg-[#110926] py-16 text-center px-5" id="testimonial">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial: Testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
