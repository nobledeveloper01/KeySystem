import React from 'react';
import LineDesign from '../../assets/LineDesign.svg'; // Adjust the path as necessary
import GradientDesign from '../../assets/GradientDesign.svg'; // Adjust the path as necessary

const SharedBackgroundWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Line SVG as a background overlay */}
      <img
        src={LineDesign}
        alt="Background line pattern"
        className="absolute inset-0 w-full h-full object-cover xl:opacity-80"
      />
      {/* Gradient SVG positioned at the top-right */}
      <img
        src={GradientDesign}
        alt="Gradient design"
        className="absolute  md:top-[-100px] lg:top-[-200px] xl:top-[-300px] right-0 w-2/3 "
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SharedBackgroundWrapper;