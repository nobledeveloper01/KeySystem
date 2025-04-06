import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./reusable/SectionWrapper";
import Card from "./reusable/Card";
import Button from "./reusable/Button";

const Offerings = ({ id }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Create the observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible
          observer.unobserve(sectionRef.current);
        }
      },
      {
        root: null, // viewport
        threshold: 0.2, // trigger when 20% visible
      }
    );

    // Start observing
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Core Banking Services",
      gradient: "bg-gradient-to-b from-[#0c0c0f] to-[#24242e]",
    },
    {
      title: "Digital Banking & Financial Inclusion",
      gradient: "bg-gradient-to-b from-[#0c0c0f] to-[#24242e]",
    },
    {
      title: "Online/Mobile Lending",
      gradient: "bg-gradient-to-b from-[#0c0c0f] to-[#24242e]",
    },
    {
      title: "Data Warehouse",
      gradient: "bg-gradient-to-b from-[#0c0c0f] to-[#24242e]",
    },
    {
      title: "Internal Audit Solutions",
      gradient: "bg-gradient-to-b from-[#0c0c0f] to-[#24242e]",
    },
    {
      title: "Business Intelligence",
      gradient: "bg-gradient-to-b from-[#0c0c0f] to-[#24242e]",
    },
    {
      title: "Cybersecurity Solutions",
      gradient: "bg-gradient-to-b from-[#0c0c0f] to-[#24242e]",
    },
    {
      title: "KeySystem Software Testing",
      gradient: "bg-gradient-to-b from-[#0c0c0f] to-[#24242e]",
    },
    {
      title: "Staff augmentation solutions",
      gradient: "bg-gradient-to-b from-[#0c0c0f] to-[#24242e]",
    },
  ];

  return (
    <div className="relative">
      {/* Main Content */}
      <SectionWrapper id={id}>
        <div ref={sectionRef} className="text-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 uppercase">
              Our Offerings
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Leverage KeySystem's cutting-edge expertise to transform your
              business. Our tailored software and cybersecurity solutions drive
              efficiency, security, and growth. We empower businesses to thrive
              in the digital age.
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12 flex mx-auto justify-center"
          >
            <Button text="Learn More" />
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((columnIndex) => (
              <div
                key={`column-${columnIndex}`}
                className={`${columnIndex === 1 ? "lg:mt-12" : ""}`}
              >
                {services
                  .filter((_, index) => index % 3 === columnIndex)
                  .map((service, serviceIndex) => {
                    const originalIndex = columnIndex + serviceIndex * 3;
                    return (
                      <motion.div
                        key={originalIndex}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{
                          duration: 1,
                          delay: isVisible ? originalIndex * 0.1 + 0.4 : 0,
                        }}
                        className="mb-8"
                      >
                        <Card
                          title={service.title}
                          gradient={service.gradient}
                        />
                      </motion.div>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Offerings;