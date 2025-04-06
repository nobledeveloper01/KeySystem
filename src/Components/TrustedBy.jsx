import React from "react";
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
    TrustedSterling,
    TrustedCSterling,
    TrustedCNAFC,
    TrustedMillitary,
    Trustednbf,
    TrustedStanbic,
    TrustedBankMUS,
  ];

  // Double the array to create a seamless loop
  const loopingLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-12 w-max"
          animate={{ x: ["0%", "-40%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {loopingLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="max-h-full max-w-full object-contain grayscale  hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedBy;
