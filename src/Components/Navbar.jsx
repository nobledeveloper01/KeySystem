import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Button from "./reusable/Button";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle (hamburger)
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to handle dropdown toggle

  const toggleMenu = () => setIsOpen(!isOpen); // Toggles the mobile menu open/close
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // Toggles dropdown menu for services
  const closeAllMenus = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const services = [
    "Core Banking Services",
    "Digital Banking & Financial Inclusion",
    "Online/Mobile Lending",
    "Data Warehouse",
    "Internal Audit Solutions",
    "Business Intelligence",
    "Cybersecurity Solutions",
    "KeySystem Software Testing",
    "Staff augmentation solutions",
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#020412] to-[#133baa] shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img
            src={Logo}
            alt="KeySystem Logo"
            className="h-10"
            loading="lazy" // Lazy load the logo for performance
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"} // Accessibility: descriptive aria-label
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Overlay for Mobile Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}

        {/* Main Navigation */}
        <nav
          className={`fixed top-0 left-0 h-full w-[60%] bg-[#1a1a2e] z-50 transform transition-transform duration-300 lg:static lg:w-auto lg:bg-transparent lg:flex lg:flex-row lg:space-x-8 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 p-6 space-y-6 lg:space-y-0 flex flex-col lg:items-center lg:flex-1 lg:justify-center`}
        >
          {/* Mobile Logo */}
          <div className="lg:hidden mb-6">
            <img
              src={Logo}
              alt="KeySystem Logo"
              className="h-10"
              loading="lazy" // Lazy load the logo for performance
            />
          </div>

          {/* Navigation Links */}
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-400"
            onClick={closeAllMenus}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-400"
            onClick={closeAllMenus}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
  <button
    className="flex items-center space-x-1 hover:text-blue-400 focus:outline-none"
    onClick={toggleDropdown}
    aria-expanded={dropdownOpen}
  >
    <span>Services</span>
    <FaChevronDown
      size={14}
      className={`${dropdownOpen ? "rotate-180" : ""} transition-transform`}
    />
  </button>

  {dropdownOpen && (
    <div className="absolute top-full mt-2 w-64 bg-[#1a1a2e] border border-gray-700 shadow-xl rounded-lg z-50 p-4 space-y-2">
      {services.map((service, idx) => (
        <Link
          key={idx}
          to="services" // this should match the id of your Offerings section
          smooth
          duration={500}
          onClick={closeAllMenus}
          className="block text-sm text-white hover:text-blue-400 cursor-pointer transition"
        >
          {service}
        </Link>
      ))}
    </div>
  )}
</div>

          {/* Contact Link */}
          <Link
            to="contact"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-400"
            onClick={closeAllMenus}
          >
            Contact
          </Link>
        </nav>

        {/* Contact Button (Visible on Desktop) */}
        <div className="hidden lg:flex items-center">
          <Button
            text="+234 818 444 1404"
            variant="contact"
            icon={<FaPhoneAlt />}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
