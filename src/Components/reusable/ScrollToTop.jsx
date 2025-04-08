import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa'; // Import the arrow icon from react-icons

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the page is scrolled down
  const handleScroll = () => {
    if (window.scrollY > 0) {  // Immediately show the button after scrolling down
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none w-12 h-12 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <FaArrowAltCircleUp size={24} />
      </button>
    )
  );
};

export default ScrollToTop;
