import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./reusable/SectionWrapper";
import VisionImage from "../assets/Representation1.svg";
import MissionImage from "../assets/Representation2.svg";
import CornerGradient from "../assets/GradientDesign.svg";

const WhatWeRepresent = ({ id }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Content */}
      <SectionWrapper id={id}>
        <div className="text-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} // Initial animation state
            animate={{ opacity: 1, scale: 1 }} // Final animation state
            transition={{ duration: 1 }} // Transition duration
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What we Represent
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-2xl font-normal mb-4 text-[#D2D2D2]">
              Our relentless pursuit of excellence is the driving force behind
              our success
            </h3>
            <p className="text-xl mb-12 max-w-4xl mx-auto text-[#D2D2D2]">
              Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
              excellence is the driving force behind our success. Excellence,
              legacy, and we are proud to carry it forward. Watch the video to
              see how we are innovating to keep businesses on top of their
              games.
            </p>
          </motion.div>

          {/* Boxes */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} // Initial animation state
              animate={{ opacity: 1, scale: 1 }} // Final animation state
              transition={{ duration: 1, delay: 0.2 }} // Delay added for staggered effect
              className="relative flex-1 p-6 rounded-lg shadow-lg border-t border-b border-[#4A90E2] hover:border hover:border-[#4A90E2] transition-all duration-300"
            >
              {/* Gradient SVG in top-right */}
              <img
                src={CornerGradient}
                alt="Corner gradient decoration"
                className="absolute top-0 w-[350px] right-0"
                loading="lazy" // Lazy loading for performance
              />
              <img
                src={VisionImage}
                alt="Target with arrow representing our vision"
                className="w-72 h-72 mx-auto mb-4"
                loading="lazy" // Lazy loading for performance
              />
              <h4 className="text-2xl font-bold mb-4 text-left">Our Vision</h4>
              <p className="text-lg text-left">
                To be the trusted technology partner for businesses seeking to
                leverage technology to improve decision-making, unlock new
                opportunities, and achieve transformative growth
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} // Initial animation state
              animate={{ opacity: 1, scale: 1 }} // Final animation state
              transition={{ duration: 1, delay: 0.4 }} // Delay added for staggered effect
              className="relative flex-1 p-6 rounded-lg shadow-lg border-t border-b border-[#4A90E2] hover:border hover:border-[#4A90E2] transition-all duration-300"
            >
              {/* Gradient SVG in top-right */}
              <img
                src={CornerGradient}
                alt="Corner gradient decoration"
                className="absolute top-0 w-[350px] right-0"
                loading="lazy" // Lazy loading for performance
              />
              <img
                src={MissionImage}
                alt="Magnifying glass representing our mission"
                className="w-72 h-72 mx-auto mb-4"
                loading="lazy" // Lazy loading for performance
              />
              <h4 className="text-2xl font-bold mb-4 text-left">Our Mission</h4>
              <p className="text-lg text-left">
                We bridge the gap between technology and business, delivering
                customized ICT solutions that drive efficiency, growth, and
                competitive advantage.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default WhatWeRepresent;
