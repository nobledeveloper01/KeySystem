import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import Button from './reusable/Button';
import Logo from "../assets/Logo.svg"; // Adjust the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#020412] to-[#133baa] shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img
            src={Logo}
            alt="KeySystem Logo"
            className="h-10"
          />
        </div>

        {/* Hamburger Menu for Mobile/Tablet */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Sidebar Overlay (Mobile/Tablet) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}

        {/* Navigation Links (Sidebar on Mobile/Tablet, Centered on Desktop) */}
        <nav
          className={`fixed top-0 left-0 h-full w-[40%] gradient bg-[#1a1a2e] z-50 transform transition-transform duration-300 lg:static lg:w-auto lg:bg-transparent lg:flex lg:flex-row lg:p-0 lg:space-y-0 lg:space-x-8 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 p-6 space-y-6 flex flex-col lg:items-center lg:flex-1 lg:justify-center`}
        >
          {/* Sidebar Logo (Mobile/Tablet Only) */}
          <div className="lg:hidden mb-6">
            <img
              src={Logo}
              alt="KeySystem Logo"
              className="h-10"
            />
          </div>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <div className="relative flex items-center space-x-1">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <FaChevronDown className="text-white" size={14} />
            {/* Dropdown placeholder (can be implemented later) */}
          </div>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
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