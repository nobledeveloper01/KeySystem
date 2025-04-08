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
            initial={{ opacity: 0, y: -50 }} // Initial position (above and invisible)
            whileInView={{ opacity: 1, y: 0 }} // Final position (in place and visible) when in view
            viewport={{ once: true }} // Trigger animation only once when the component comes into view
            transition={{ duration: 1 }} // Duration for smooth transition
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              What we Represent
            </motion.h2>

            <motion.h3
              className="text-xl md:text-2xl lg:text-2xl font-normal mb-4 text-[#D2D2D2]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our relentless pursuit of excellence is the driving force behind
              our success
            </motion.h3>

            <motion.p
              className="text-xl mb-12 max-w-4xl mx-auto text-[#D2D2D2]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Triggers animation on viewport entry
              viewport={{ once: true }} // Triggers animation only once when the component comes into view
              transition={{ duration: 1, delay: 0.5 }}
            >
              Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
              excellence is the driving force behind our success. Excellence,
              legacy, and we are proud to carry it forward. Watch the video to
              see how we are innovating to keep businesses on top of their
              games.
            </motion.p>
          </motion.div>

          {/* Boxes */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }} // Trigger on viewport entry
              viewport={{ once: true }} // Only trigger once
              transition={{ duration: 1, delay: 0.2 }}
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }} // Trigger on viewport entry
              viewport={{ once: true }} // Only trigger once
              transition={{ duration: 1, delay: 0.4 }}
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
