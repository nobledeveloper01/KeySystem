import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "./reusable/Button";

import GradientLeft from "../assets/GradientDesign-2.svg";
import PatternRight from "../assets/GetStartedRightGradient.svg";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ReadyToGetStarted = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 overflow-hidden"
      ref={sectionRef}
    >
      {/* Left Gradient SVG */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.9 } : {}}
        transition={{ duration: 1.2 }}
        src={GradientLeft}
        alt="Decorative gradient"
        aria-hidden="true"
        className="absolute left-0 top-[-150px] h-full w-auto pointer-events-none rotate-90 hidden sm:block"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative bg-[#0D0D15] text-white rounded-2xl px-6 md:px-12 py-12 shadow-xl max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        {/* Text Block */}
        <div className="flex-1 z-10 text-center lg:text-left">
          <motion.h2
            custom={0}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
          >
            Ready to get started?
          </motion.h2>

          <motion.p
            custom={1}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            className="text-sm text-[#B0B0B0] mb-3"
          >
            Shoot us a mail
          </motion.p>

          <motion.p
            custom={2}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            className="text-sm sm:text-base mb-4 leading-relaxed text-[#E0E0E0]"
          >
            Join numerous corporations, organizations, and businesses as they
            scale their teams, tap into new market opportunities and build
            innovative products with KeySystem Technology.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            className="text-sm sm:text-base mb-6 leading-relaxed text-[#E0E0E0]"
          >
            Join thousands of students who are ready to learn new skills or take
            their career to the next level by enrolling in one of our training
            programs today.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className="w-fit mx-auto lg:mx-0"
          >
            <Button text="Send Us a Mail Now" />
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex-shrink-0 z-0"
        >
          <img
            src={PatternRight}
            alt="Decorative right graphic"
            aria-hidden="true"
            className="w-36 sm:w-48 md:w-52 lg:w-52 h-auto hidden lg:block"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ReadyToGetStarted;
