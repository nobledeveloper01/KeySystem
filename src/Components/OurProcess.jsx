import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./reusable/SectionWrapper";

// Import illustrations (adjust paths as necessary)
import StrategicConsultationImg from "../assets/partner-top-1.svg";
import CollaborationImg from "../assets/partner-top-2.svg";
import DeliveryImg from "../assets/partner-top-3.svg";

const processes = [
  {
    title: "Strategic Consultation",
    description:
      "We kick off with a strategic consultation to understand your brand, goals, and audience",
    imgSrc: StrategicConsultationImg,
    imgAlt: "Puzzle pieces representing strategic consultation",
  },
  {
    title: "Collaboration",
    description:
      "At KeySystem, we collaborate closely to ensure the end result meets your expectations and makes you happy",
    imgSrc: CollaborationImg,
    imgAlt: "Hand holding a trophy representing collaboration",
  },
  {
    title: "Delivery",
    description: "Our delivery rate is 100%; our clients deserve nothing less",
    imgSrc: DeliveryImg,
    imgAlt: "Checkmark representing delivery",
  },
];

const OurProcess = ({ id }) => {
  return (
    <div className="relative bg-black min-h-screen py-16">
      {/* Main Content */}
      <SectionWrapper id={id}>
        <div className="text-center w-full mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase text-white">
              Our Process
            </h2>
            <h3 className="text-xl font-normal mb-16 text-[#D2D2D2]">
              At KeySystem, we leave you with a lasting impression
            </h3>
          </motion.div>

          {/* Cards */}
          <div className="space-y-8">
            {/* Top Card (Strategic Consultation) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#121831] hover:bg-[#1A2340] transition-colors duration-300 ease-in-out rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 text-left pr-8 p-8">
                  <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-[#4A90E2] transition-colors duration-300">
                    {processes[0].title}
                  </h4>
                  <p className="text-lg text-white">{processes[0].description}</p>
                </div>
                <div className="md:w-full flex justify-end md:bottom-[-70px] lg:bottom-[-5px] right-0 relative mt-6 md:mt-0">
                  <div className="relative transition-all duration-500 ease-in-out hover:transform hover:translate-y-[-5px]">
                    <motion.img
                      src={processes[0].imgSrc}
                      alt={processes[0].imgAlt}
                      className="w-full h-48 object-contain relative z-10 lg:bottom-0 lg:right-0"
                      loading="lazy"
                      whileHover={{
                        y: -10,
                        transition: {
                          duration: 0.3,
                          type: "spring",
                          stiffness: 300,
                        },
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#4A90E2]/30 blur-sm to-transparent rounded-b-lg z-0 transition-opacity duration-300 hover:opacity-70"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Cards (Collaboration and Delivery) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Collaboration Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#121831] hover:bg-[#1A2340] transition-colors duration-300 ease-in-out rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl"
              >
                <div className="lg:flex">
                  <div className="text-left p-8">
                    <h4 className="text-2xl font-bold mb-4 text-white hover:text-[#4A90E2] transition-colors duration-300">
                      {processes[1].title}
                    </h4>
                    <p className="text-lg text-white">{processes[1].description}</p>
                  </div>
                  <div className="md:w-full flex justify-end">
                    <div className="relative transition-all duration-500 ease-in-out">
                      <motion.img
                        src={processes[1].imgSrc}
                        alt={processes[1].imgAlt}
                        className="w-full h-full relative z-10 lg:bottom-[-20px] right-0"
                        loading="lazy"
                        whileHover={{
                          y: -8,
                          rotate: 5,
                          transition: { duration: 0.4, type: "spring" },
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t blur-sm from-[#4A90E2]/30 to-transparent rounded-b-lg z-0 transition-all duration-300 hover:blur-lg hover:h-20"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Delivery Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-[#121831] hover:bg-[#1A2340] transition-colors duration-300 ease-in-out rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl"
              >
                <div className="lg:flex">
                  <div className="text-left mb-6 p-8">
                    <h4 className="text-2xl font-bold mb-4 text-white hover:text-[#4A90E2] transition-colors duration-300">
                      {processes[2].title}
                    </h4>
                    <p className="text-lg text-white">{processes[2].description}</p>
                  </div>
                  <div className="md:w-full flex justify-end bottom-[-5px] right-0">
                    <div className="relative transition-all duration-500 ease-in-out">
                      <motion.img
                        src={processes[2].imgSrc}
                        alt={processes[2].imgAlt}
                        className="w-full h-full relative z-10 md:bottom-[-150px] lg:bottom-[-20px] right-0"
                        loading="lazy"
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            duration: 0.3,
                            yoyo: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 0.2,
                          },
                        }}
                      />
                      <motion.div
                        className="absolute bottom-0 md:bottom-[-150px] lg:bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#4A90E2]/30 to-transparent rounded-b-lg z-0"
                        whileHover={{
                          opacity: [0.3, 0.7, 0.3],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          },
                        }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default OurProcess;
