import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./reusable/SectionWrapper";
import Button from "./reusable/Button";
import StrokeDesign from "../assets/StrokDesign.svg";
import HeroImage from "../assets/HeroImage.png";

// Typing animation component
const TypingEffect = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index)); // Add one character at a time
        setIndex((prevIndex) => prevIndex + 1); // Move to next character
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

const Hero = ({ id }) => {
  const typingText = "Forward-thinking Businesses"; // Store the typing text here

  return (
    <div className="relative overflow-hidden">
      {/* Stroke Design as background, placed absolutely */}
      <img
        src={StrokeDesign}
        alt="Decorative stroke"
        className="absolute bottom-[50px] xl:bottom-0 2xl:bottom-0 lg:bottom-0 left-0 w-full z-0 pointer-events-none"
        loading="lazy" // Lazy load for performance
      />

      <SectionWrapper id={id} className="relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly offset
            animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in position
            transition={{ duration: 1 }} // Smooth transition effect
            className="text-center mb-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="inline-block px-4 py-1 border border-white rounded-full text-white bg-[#2E6D9C] mb-6"
            >
              Welcome to KeySystem
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl md:text-4xl lg:text-8xl font-bold mb-4 leading-tight"
            >
              IT Consulting for{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="inline-block"
              >
                <TypingEffect text={typingText} />
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-2xl mb-8"
            >
              Driving Digital Transformation, One Solution at a Time
            </motion.p>

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              <Button text="Get Started" />
              <Button text="Learn More" variant="secondary" />
            </div>
          </motion.div>

          {/* Image */}
          <div className="relative w-full max-w-4xl z-10">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }} // Initial state: slightly scaled down and invisible
              animate={{ opacity: 1, scale: 1 }} // Final state: fully visible and in normal size
              transition={{
                duration: 1,
                delay: 0.5, 
                ease: "easeInOut", 
              }}
              src={HeroImage}
              alt="Business professional with data charts"
              className="w-full rounded-lg shadow-lg"
              loading="lazy" // Lazy load for performance
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
