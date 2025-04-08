import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./reusable/SectionWrapper";
import LineDesign from "../assets/LineDesign.svg";
import GradientDesign from "../assets/TrustedGradient.svg";
import TrustedImage from "../assets/TrustedImage.png";

const WhyTrusted = ({ id }) => {
  return (
    <div className="relative text-white overflow-hidden">
      {/* Line Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src={LineDesign}
          alt="Background pattern"
          className="w-full h-full object-cover opacity-60"
          loading="lazy" // Lazy load for performance improvement
        />
      </div>

      {/* Main Section Content */}
      <SectionWrapper id={id} className="relative z-10">
        <div className="flex flex-col items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial animation state: invisible and slightly offset
            whileInView={{ opacity: 1, y: 0 }} // Final animation state: fully visible and in place
            viewport={{ once: true }} // Triggers animation once when the element comes into view
            transition={{ duration: 1 }} // Duration of animation
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }} // Start with scale and opacity transition
                animate={{ opacity: 1, scale: 1 }} // End with normal size and full opacity
                transition={{ duration: 1 }} // Duration for the transition
              >
                Why we are your Trusted Consultant
              </motion.span>
            </h2>
            <h3 className="text-md md:text-lg lg:text-xl text-[#D2D2D2] mb-6">
              Empowering Businesses with Cutting-edge Technology
            </h3>
            <p className="text-lg md:text-xl text-[#D2D2D2] mb-6">
              Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
              excellence is the driving force behind our success. Excellence is
              our legacy, and we are proud to carry it forward.
            </p>
            <p className="text-sm md:text-base text-gray-400">
              Watch the video to see how we are innovating to keep businesses on
              top of their games.
            </p>
          </motion.div>

          {/* Image + Wider Gradient */}
          <div className="relative w-full mx-auto">
            {/* Wider Gradient behind image */}
            <img
              src={GradientDesign}
              alt="Decorative gradient"
              className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 lg:w-[130%] xl:w-[80%] z-0 xl:opacity-80"
              loading="lazy" // Lazy load for performance improvement
            />

            {/* Image above gradient */}
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }} // Duration of animation with delay
              src={TrustedImage}
              alt="Group of professionals collaborating"
              className="w-full rounded-xl shadow-xl relative z-10 max-w-4xl mx-auto"
              loading="lazy" // Lazy load for performance improvement
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default WhyTrusted;
