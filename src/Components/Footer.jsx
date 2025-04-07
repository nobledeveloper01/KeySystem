import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";
import Logo from "../assets/Logo.svg"; // Adjust the path as necessary
import { motion } from "framer-motion"; // For animations

// Animation variants for fade-in effect
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation for hover effects
const hoverEffect = {
  scale: 1.1,
  color: "#3B82F6", // Blue color on hover
  transition: { duration: 0.3 },
};

// Memoize the Footer component to prevent unnecessary re-renders
const Footer = React.memo(() => {
  return (
    <footer
      className="bg-[#0D0D15] text-[#E0E0E0] px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 text-sm"
      role="contentinfo" // Semantic role for accessibility
      aria-label="Footer"
    >
      {/* Logo and Services Section */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Animate only once when in view
        variants={fadeIn}
      >
        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <img
            src={Logo}
            alt="KeySystem Technology Limited Logo"
            className="w-36 sm:w-40 lg:w-44 mb-2"
            loading="lazy" // Lazy-load the image for performance
          />
          <p className="text-xs text-gray-400">
            © 2025 KeySystem Technology Limited. All rights reserved.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:col-span-2">
          <div>
            <h3 className="font-bold text-white mb-3 uppercase">Services</h3>
            <ul className="space-y-2">
              <li>Core refresh</li>
              <li>Application management services</li>
              <li>Evolution & enhancement services</li>
              <li>Solution Assurance & validation</li>
              <li>Digital Banking & financial inclusion</li>
              <li>Online/mobile lending solution</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 sm:mt-0 lg:mt-10">
              <li>Staff augmentation solutions</li>
              <li>Risk management & Internal audit solutions</li>
              <li>Data Warehouse & Business Intelligence (BI)</li>
              <li>Enterprise Document Management Solutions</li>
              <li>KeySystem software testing</li>
              <li>Cybersecurity Solutions</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Quick Links and Contact Section */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 lg:mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Quick Links */}
        <div className="mb-6 sm:mb-0">
          <h3 className="font-bold text-white mb-3 uppercase">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <motion.a
                href="#"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileHover={hoverEffect}
                tabIndex={0} // Ensure keyboard accessibility
              >
                About U
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileHover={hoverEffect}
                tabIndex={0}
              >
                Sitemap;
              </motion.a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-2">
          <h3 className="font-bold text-white mb-3 uppercase">Contact</h3>
          <div className="space-y-6 sm:space-y-4 text-sm">
            {/* Nigeria and United Kingdom Addresses */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-4">
              <div className="sm:w-1/2 lg:w-[300px]">
                <p className="font-semibold text-white">Nigeria</p>
                <p>
                  55G Adebisi Omotola Close, Off Samuel Adedoyin Street, <br />
                  Victoria Island
                </p>
              </div>
              <div className="sm:w-1/2 lg:w-[300px]">
                <p className="font-semibold text-white">United Kingdom</p>
                <p>
                  39 Kenyon Lane, Off Moston Lane, Moston, Manchester, <br />
                  United Kingdom, M40 9JG
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-6 sm:gap-4">
              <div className="sm:w-[calc(50%-1rem)] lg:w-[200px]">
                <p className="font-semibold text-white">United Kingdom</p>
                <p>Tel: +44 161 948 1444</p>
              </div>
              <div className="sm:w-[calc(50%-1rem)] lg:w-[200px]">
                <p className="font-semibold text-white">United Arab Emirates</p>
                <p>Tel: +971 50 423 8817</p>
              </div>
              <div className="sm:w-[calc(50%-1rem)] lg:w-[200px]">
                <p className="font-semibold text-white">Canada</p>
                <p>Tel: +1 647 977 1435</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Additional Contact Section */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 lg:mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Empty div for layout on desktop */}
        <div className="hidden lg:block"></div>

        {/* Additional Contact */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-4 lg:col-span-2">
          <div className="sm:w-1/2 lg:w-[200px]">
            <p className="font-semibold text-white">Nigeria</p>
            <p>Tel: +234 818 444 1404</p>
          </div>
          <div className="sm:w-1/2 lg:w-[200px]">
            <p className="font-semibold text-white">Email</p>
            <motion.a
              href="mailto:enquiries@keysystemtlc.com"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileHover={hoverEffect}
              tabIndex={0}
            >
              enquiries@keysystemtlc.com
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Social Media Icons Section */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 lg:mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Social Media Icons */}
        <div className="flex gap-4 text-lg sm:text-xl text-white lg:col-start-1">
          <motion.a
            href="#"
            aria-label="Instagram"
            whileHover={{ scale: 1.2, color: "#3B82F6" }}
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="#"
            aria-label="X (Twitter)"
            whileHover={{ scale: 1.2, color: "#3B82F6" }}
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaXTwitter />
          </motion.a>
          <motion.a
            href="#"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, color: "#3B82F6" }}
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            href="#"
            aria-label="Facebook"
            whileHover={{ scale: 1.2, color: "#3B82F6" }}
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaFacebookF />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
});

export default Footer;