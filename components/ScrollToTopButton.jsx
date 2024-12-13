"use client";
import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll position to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    isVisible && (
      <div className="fixed bottom-10 right-6 z-50">
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full shadow-lg bg-black text-white transition-transform transform hover:scale-105 hover:bg-gray-700"
          title="Scroll to Top"
        >
          <FiArrowUp size={24} />
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
