import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`py-16 px-6 ${className}`}
    >
      <div className="container mx-auto">{children}</div>
    </motion.section>
  );
};

export default SectionWrapper;