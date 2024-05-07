"use client";
import React, { useState, useEffect } from "react";

const BottomNav = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(currentScrollTop < lastScrollTop || currentScrollTop < 100);
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 ${
        isVisible ? "hidden" : ""
      }`}
    >
      <div className="max-w-lg mx-auto font-medium">
        <div className="h-auto lg:mt-0 lg:col-span-5 lg:flex">
          <a
            href="#"
            className="md:hidden bg-gray-100 w-full inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-gray-800  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Promotion Jusqu’à 30%
          </a>
          <a
            href="#"
            className="md:hidden bg-[#3D505A] w-full inline-flex items-center justify-center px-5 py-5 mr-3 text-base font-medium text-center text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Réservez maintenant
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
