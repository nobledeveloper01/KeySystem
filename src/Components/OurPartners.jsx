import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./reusable/SectionWrapper";

// Import partner logos (adjust paths as necessary)
import SoftwareGroup from "../assets/partners/software-group.svg";
import Cognizant from "../assets/partners/cognizant.svg";
import Temenos from "../assets/partners/temenos.svg";
import Netinfo from "../assets/partners/netinfo.svg";
import TechMahindra from "../assets/partners/tech-mahindra.svg";

const partners = [
  { src: SoftwareGroup, alt: "Software Group" },
  { src: Cognizant, alt: "Cognizant" },
  { src: Temenos, alt: "Temenos" },
  { src: Netinfo, alt: "Netinfo" },
  { src: TechMahindra, alt: "Tech Mahindra" },
];

const OurPartners = ({ id }) => {
  return (
    <div className="relative w-full">
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
              Our Partners
            </h2>
            <h3 className="text-xl  font-normal mb-12 text-[#D2D2D2]">
              Creating a synergy with global brands
            </h3>
          </motion.div>

          {/* Partners Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className=" p-6 rounded-lg w-full"
          >
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex justify-center items-center hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="w-full h-16 object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default OurPartners;