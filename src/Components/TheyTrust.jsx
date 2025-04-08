import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./reusable/SectionWrapper";
// Import partner logos (adjust paths as necessary)
import Lapo from "../assets/Lapo.png";
import Npf from "../assets/Npf.png";
import Sterling from "../assets/TrustedSterling.png";
import CrusaderSterling from "../assets/TrustedCSterling.png";
import Nafc from "../assets/TrustedNAFC.png";
import Nbf from "../assets/Trustednbf.png";
import MilitaryPensions from "../assets/TrustedMillitary.png";
import StanbicBank from "../assets/TrustedStanbic.png";
import BankMuscat from "../assets/TrustedBankmus.png";
import BankOfSomalia from "../assets/Banadda.png";
import Santander from "../assets/santander.png";

const TheyTrust = ({ id }) => {
  // First two rows (4 partners per row)
  const topPartners = [
    { src: Lapo, alt: "LAPO Microfinance Bank" },
    { src: Npf, alt: "NPF Microfinance Bank Plc" },
    { src: Sterling, alt: "Sterling" },
    { src: CrusaderSterling, alt: "CrusaderSterling Pensions" },
    { src: Nafc, alt: "NAFC" },
    { src: Nbf, alt: "NBF" },
    { src: MilitaryPensions, alt: "Military Pensions Board" },
    { src: StanbicBank, alt: "Stanbic Bank" },
  ];

  // Last row (3 partners only)
  const bottomPartners = [
    { src: BankMuscat, alt: "Bank Muscat" },
    { src: BankOfSomalia, alt: "Bank of Somalia" },
    { src: Santander, alt: "Santander" },
  ];

  return (
    <div className="relative">
      {/* Main Content */}
      <SectionWrapper id={id}>
        <div className="text-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase">
              They Trust Us
            </h2>
            <h3 className="text-xl md:text-xl lg:text-xl font-normal mb-12 text-[#D2D2D2]">
              And so can you
            </h3>
          </motion.div>

          {/* Partners Grid - Top 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {topPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className=" rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex justify-center items-center mx-auto "
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="w-full h-24 object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            {/* Partners Grid - Bottom row centered */}
            <div className="flex justify-center">
              <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full lg:w-9/12">
                {bottomPartners.map((partner, index) => (
                  <motion.div
                    key={`bottom-${index}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + (index + topPartners.length) * 0.1,
                    }}
                    className="lg:py-4 pt-4 lg:pt-0 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex justify-center items-center mx-auto "
                  >
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="w-full h-24 object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default TheyTrust;
