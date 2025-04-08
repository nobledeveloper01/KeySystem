import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TrustedSterling from "../assets/TrustedSterling.png";
import TrustedCSterling from "../assets/TrustedCSterling.png";
import TrustedCNAFC from "../assets/TrustedNAFC.png";
import Trustednbf from "../assets/Trustednbf.png";
import TrustedMillitary from "../assets/TrustedMillitary.png";
import TrustedStanbic from "../assets/TrustedStanbic.png";
import TrustedBankMUS from "../assets/TrustedBankmus.png";

const TrustedBy = () => {
  const logos = [
    { src: TrustedSterling, alt: "Sterling Bank" },
    { src: TrustedCSterling, alt: "C Sterling" },
    { src: TrustedCNAFC, alt: "CNAFC" },
    { src: TrustedMillitary, alt: "Military Bank" },
    { src: Trustednbf, alt: "NBF" },
    { src: TrustedStanbic, alt: "Stanbic Bank" },
    { src: TrustedBankMUS, alt: "Bank MUS" },
  ];

  // Double the array to create a seamless loop
  const loopingLogos = [...logos, ...logos, ...logos, ...logos];

  // State for hover control to pause animation
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Set up intersection observer or any other logic if needed for further animations
    return () => {
      // Cleanup logic
    };
  }, []);

  return (
    <section
      id="trusted-by"
      aria-labelledby="trusted-heading"
      className="relative w-full overflow-hidden"
    >
      <h2 id="trusted-heading" className="sr-only">
        Trusted by Leading Institutions
      </h2>

      <motion.div
        className="flex space-x-12 w-max"
        animate={{
          x: isHovered ? 0 : ["0%", "-40%"],
        }}
        transition={{
          repeat: Infinity,
          duration: isHovered ? 0 : 20,
          ease: "linear",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {loopingLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
          >
            <img
              loading="lazy"
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 hover:opacity-100 transition"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TrustedBy;
