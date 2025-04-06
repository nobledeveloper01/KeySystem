import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ text, variant, onClick, icon }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 15px rgba(57, 57, 194, 0.5)', // Intensified glow on hover
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`px-6 py-3 font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
        variant === 'secondary'
          ? 'bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full'
          : 'border border-blue-400 bg-gradient-to-r from-[#3939c2] via-[#969696] to-[#3939c2] text-white rounded-3xl shadow-[0_0_10px_rgba(57,57,194,0.3)]'
      }`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </motion.button>
  );
};

export default Button;