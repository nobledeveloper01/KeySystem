import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./reusable/SectionWrapper";
import Button from "./reusable/Button";
import { Link } from "react-scroll";  // Importing Link from react-scroll

// Import certification logos (adjust paths as necessary)
import PciDss from "../assets/certifications/pci-dss.svg";
import Iso27001 from "../assets/certifications/iso-27001.svg";
import Cybersecurity from "../assets/certifications/cybersecurity.svg";
import Gdpr from "../assets/certifications/gdpr.svg";
import NdprAudit from "../assets/certifications/ndpr-audit-2022.svg";
import Iso22301 from "../assets/certifications/iso-22301.svg";
import Sarbanes from "../assets/certifications/Sarbanes.svg";
import Togaf from "../assets/certifications/togaf.svg";
import Iso20000 from "../assets/certifications/iso-20000.svg";
import AicpaSoc1 from "../assets/certifications/aicpa-soc.svg";
import AicpaSoc2 from "../assets/certifications/aicpa-soc-2.svg";
import Cobit2019 from "../assets/certifications/cobit-2019.svg";
import Ssae18Soc2 from "../assets/certifications/ssae-18-soc-2.svg";
import Pcaob from "../assets/certifications/pcaob.svg";
import Coso from "../assets/certifications/coso.svg";
import Ssae16Type2 from "../assets/certifications/ssae-16-type-2.svg";
import Iaasb from "../assets/certifications/iaasb.svg";
import Iso3402 from "../assets/certifications/iso-3402.svg";

const certifications = [
  { src: PciDss, alt: "PCI DSS Compliant" },
  { src: Iso27001, alt: "ISO 27001 Certified" },
  { src: Cybersecurity, alt: "Cybersecurity" },
  { src: Gdpr, alt: "GDPR Compliant" },
  { src: NdprAudit, alt: "NDPR Audit Compliant 2022" },
  { src: Iso22301, alt: "ISO 22301 Certified" },
  { src: Sarbanes, alt: "Sarbanes" },
  { src: Togaf, alt: "TOGAF Certified" },
  { src: Iso20000, alt: "ISO 20000 Certified" },
  { src: AicpaSoc1, alt: "AICPA SOC Certified" },
  { src: AicpaSoc2, alt: "AICPA SOC Certified" },
  { src: Cobit2019, alt: "COBIT 2019 Certified" },
  { src: Ssae18Soc2, alt: "SSAE 18 SOC 2 Certified" },
  { src: Pcaob, alt: "PCAOB Certified" },
  { src: Coso, alt: "COSO Certified" },
  { src: Ssae16Type2, alt: "SSAE 16 Type II Certified" },
  { src: Iaasb, alt: "IAASB Certified" },
  { src: Iso3402, alt: "ISO 3402 Certified" },
];

const ComplianceCertifications = ({ id }) => {
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
              Compliance Certifications/
              <br />
              Standards We Specialize In
            </h2>
            <h3 className="text-xl md:text-xl lg:text-xl font-medium mb-6 text-[#D2D2D2]">
              Elevate Your Organization’s Security Posture with Our <br />
              Compliance/Standards Consulting Services
            </h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mx-auto flex justify-center"
            >
              <Link to="contact" smooth duration={500}>  {/* Add the smooth scroll behavior */}
                <Button text="Contact Us" variant="" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-white p-6 rounded-lg mt-12 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1, // Stagger the animation for each certification
                  }}
                  className="flex justify-center items-center"
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-24 object-contain"
                    loading="lazy" // Lazy load images for performance
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

export default ComplianceCertifications;
