import React from 'react';
import { motion } from 'framer-motion';

const LogoGrid = ({ logos }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
        >
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="max-h-12 max-w-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default LogoGrid;