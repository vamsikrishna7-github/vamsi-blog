'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="position-fixed bottom-0 end-0 mb-3 me-3" style={{ zIndex: 1000 }}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="btn btn-dark rounded-circle p-2 shadow-sm"
          style={{ width: '40px', height: '40px' }}
        >
          <FaArrowUp className="m-auto" />
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;