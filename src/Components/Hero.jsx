import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './reusable/SectionWrapper';
import Button from './reusable/Button';
import StrokeDesign from '../assets/Strokdesign.svg';
import HeroImage from '../assets/HeroImage.png';

const Hero = ({ id }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Stroke Design as background, placed absolutely */}
      <img
        src={StrokeDesign}
        alt="Decorative stroke"
        className="absolute bottom-[50px] xl:bottom-0 2xl:bottom-0 lg:bottom-0 left-0 w-full z-0 pointer-events-none"
      />

      <SectionWrapper id={id} className="relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <p className="inline-block px-4 py-1 border border-white rounded-full text-white bg-[#2E6D9C] mb-6">
              Welcome to KeySystem
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-8xl font-bold mb-4 leading-tight">
              IT Consulting for Forward-thinking Businesses
            </h1>
            <p className="text-2xl mb-8">
              Driving Digital Transformation, One Solution at a Time
            </p>
            <div className="flex justify-center space-x-4">
              <Button text="Get Started" />
              <Button text="Learn More" variant="secondary" />
            </div>
          </motion.div>

          {/* Image */}
          <div className="relative w-full max-w-4xl z-10">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={HeroImage}
              alt="Business professional with data charts"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
