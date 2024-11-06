import React from "react";
import Navbar from "./_components/Navbar";
import HeroSection from "./_sections/Hero";
import FeaturesSection from "./_sections/Features";
import TestimonialsSection from "./_sections/Testimonials";
import PricingSection from "./_sections/Pricing";
import Footer from "./_components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
