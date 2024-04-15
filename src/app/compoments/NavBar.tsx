"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import BottomNav from "./BottomNav"
import BookingModel from "../Models/BookingModel";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
    <><nav
      className="fixed w-full h-[150px] z-20 top-0 start-0 bg-opacity-30"
      style={{ fontFamily: "Quicksand, sans-serif" }}
    >
      {isVisible ? (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className={`${isDropdownOpen ? "hidden" : ""} h-[150px] w-[176px] ml-8`}
              alt="" />
          </a>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden "
            aria-expanded={isDropdownOpen ? "true" : "false"}
          >
            <span className="text-white font-normal text-lg">
              {isDropdownOpen ? "Ferme" : " Menu"}
            </span>
          </button>
          <div
            className={`${isDropdownOpen ? "block" : "hidden"} w-[42rem] md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <div
              className={`${isDropdownOpen ? "bg-white md:h-[50rem] md:w-[45rem]" : "p-8"}`}
            >
              <div className="flex flex-col  mx-auto  text-center md:pl-28 mt-4 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-4 ">
                <a
                  href="#"
                  className={`${isDropdownOpen ? "text-gray-700" : "text-gray-50"} text-center font-normal text-lg`}
                >
                  FR
                </a>
                <a
                  href="#"
                  className={`${isDropdownOpen ? "text-gray-700" : "text-gray-50"} text-center font-normal text-lg`}
                >
                  EUR
                </a>
                <a
                  href="#"
                  data-modal-target="extralarge-modal" data-modal-toggle="extralarge-modal"
                  className={`${isDropdownOpen
                      ? "hover:bg-orange-800 hover:text-gray-50"
                      : "text-gray-50"} hover:border hover:px-4 hover:py-1 font-semibold md:text-xl text-center px-10`}
                >
                  Réservez maintenant
                </a>
                <button
                  className={`${isDropdownOpen ? "text-gray-900" : "text-gray-50"} md:flex items-center justify-between w-full py-2 px-3 md:p-0 md:w-auto hidden`}
                  onClick={toggleDropdown}
                >
                  {isDropdownOpen ? "Fermer" : "Menu"}
                  <svg
                    className="ml-2"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 12.99L2 2.00999L12 2.00999L7 12.99Z"
                      fill="white" />
                  </svg>
                </button>
              </div>
              {isDropdownOpen && (
                <ul
                  className="text-center md:mt-16 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Accueil
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Chambres et Suites
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Offres Spécials
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Commentaires
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Nos Services
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        équipements
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Environs de l’établissement
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Galerie
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Contact
                      </h2>
                    </a>
                  </li>
                  <li>
                    {/* <a href="#" > */}
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
                    {/* </a> */}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${isDropdownOpen ? "" : "bg-white"} max-w-screen-4xl flex flex-wrap items-center justify-between mx-auto`}
        >
          <a
            href="#"
            className="flex items-center bg-gray-950 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className={`${isDropdownOpen ? "hidden" : ""} h-20 w-24`}
              alt="" />
          </a>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isDropdownOpen ? "true" : "false"}
          >
            <span className="text-gray-700">
              {isDropdownOpen ? "Ferme" : " Menu"}
            </span>
          </button>
          <div
            className={`${isDropdownOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <div
              className={`${isDropdownOpen ? "bg-white md:h-[50rem] md:w-[45rem]" : ""} p-8`}
            >
              <div className="flex flex-col mx-auto max-w-screen-sm text-center md:pl-28 mt-4 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 ">
                <a
                  href="#"
                  className={`${isDropdownOpen ? "text-gray-700" : "text-white"} text-center`}
                >
                  FR
                </a>
                <a
                  href="#"
                  className={`${isDropdownOpen ? "text-gray-700" : "text-white"} text-center`}
                >
                  EUR
                </a>
                <a
                  href="#"
                  className={`${isDropdownOpen
                      ? "hover:bg-orange-800 hover:text-white"
                      : "text-white"} hover:border hover:px-4 hover:py-1 text-center mx-16`}
                >
                  Réservez maintenant
                </a>
                <button
                  className={`${isDropdownOpen ? "text-gray-900" : "text-gray-900"} flex items-center justify-between w-full py-2 px-3 md:p-0 md:w-auto`}
                  onClick={toggleDropdown}
                >
                  {isDropdownOpen ? "Fermer" : "Menu"}
                  <svg
                    className="ml-2 text-gray-900"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 12.99L2 2.00999L12 2.00999L7 12.99Z"
                      fill="white" />
                  </svg>
                </button>
              </div>
              {isDropdownOpen && (
                <ul
                  className="text-center md:mt-16 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Accueil
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Chambres et Suites
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Offres Spécials
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Commentaires
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Nos Services
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        équipements
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Environs de l’établissement
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Galerie
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4">
                      <h2 className="md:text-2xl hover:text-red-900 hover:ml-10">
                        Contact
                      </h2>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </nav><BookingModel /></>
  );
};

export default NavBar;
