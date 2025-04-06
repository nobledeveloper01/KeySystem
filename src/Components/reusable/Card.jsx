import React from 'react';
import { motion } from 'framer-motion';
import { RxCursorArrow } from "react-icons/rx";

const Card = ({ title, gradient }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
      className={`p-6 rounded-full shadow-lg border border-gray-700 text-center transition-all duration-300 ${gradient || 'bg-gradient-to-b from-[#0c0c0f] to-[#24242e]'}`}
    >
      <div className="flex flex-col items-center justify-center space-y-3">
        <h3 className="text-xl md:text-xl font-medium text-white capitalize">{title}</h3>
        <RxCursorArrow className="text-blue-600" size={24} />
      </div>
    </motion.div>
  );
};

export default Card;