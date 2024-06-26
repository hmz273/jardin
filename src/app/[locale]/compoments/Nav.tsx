"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
import BookingModel from "../Models/BookingModel";
import LocaleSwitcher from "./LocaleSwitcher";

import { useRouter } from "next/router";


const Nav = ({ onTemplateChange }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('jardin');


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible( currentScrollTop < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTemplateChange = (event) => {
    // Call the callback function passed from the parent component
    setSelectedTemplate(event.target.value);
    onTemplateChange(event.target.value);
  };

  

  return (
    <>
    <div className={`${
            isVisible ? "md:grid md:grid-cols-2 md:h-[150px] md:pl-[70px] fixed w-full z-20 top-0 start-0 bg-opacity-30" : "md:grid md:grid-cols-2 md:h-[6rem] md:pl-[70px] fixed w-full z-20 top-0 start-0 bg-opacity-30 bg-white"
          }`}>
        <div className="md:pt-4">
          {isVisible ? (<Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className="md:h-[116px] h-[57px] w-[87px] md:w-[176px]"
              alt=""
            />
          </Link>) : (
            <div className="mt-[10px]">
            <a
              href="#"
              
              data-modal-target="extralarge-modal"
              data-modal-toggle="extralarge-modal"
              className={`${isDropdownOpen ? (isVisible ? 'text-gray-900' : 'text-gray-50') : ''} font-quicksand border border-transparent hover:border-gray-300 px-4 py-2 font-semibold md:text-2xl text-center `}
            >
              Réservez maintenant
            </a></div>) }
          
        </div>
        <div
          className={`${
            isDropdownOpen ? "bg-white h-dvh md:w-[46rem]" : ""
          } pt-4 pr-7`}
        >
          <div className="md:flex hidden mx-auto text-center md:pr-14 justify-end  mt-4 md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-4">
            {isVisible ? (
               <>
               <LocaleSwitcher />
      {/* <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-transparent border-none text-red-400 font-extrabold text-center font-quicksand text-[18px] leading-[28.8px]"
          >
            <option value="fr">French</option>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select> */}

              <select onChange={handleTemplateChange} value={selectedTemplate} className="bg-transparent border-none text-gray-50 font-extrabold text-center font-quicksand text-[18px] leading-[28.8px]">
                <option className="text-black" value="jardin">Jardin</option>
                <option className="text-black" value="sirayane">Sirayane</option>
                <option className="text-black" value="tempX">Temp X</option>
                <option className="text-black" value="tempY">Temp Y</option>
                {/* Add more options as needed */}
              </select>
                <a
                  href="#"
                  data-modal-target="extralarge-modal"
                  data-modal-toggle="extralarge-modal"
                  className={`${isDropdownOpen
                      ? "hover:bg-orange-800 hover:text-gray-50"
                      : "text-gray-50"} md:ml-0 ml-0 border border-transparent hover:border-gray-300 font-quicksand px-4 py-4 font-semibold md:text-[22px] md:leading-[20px] text-center`}
                >
                  Réservez maintenant
                </a>
                <button
                  
                  className={`${isDropdownOpen ? "text-gray-900" : "text-gray-50"} font-quicksand md:flex items-center justify-between w-full py-2 px-3 md:p-0 md:w-auto hidden font-normal text-lg`}
                  onClick={toggleDropdown}
                >
                  <span className={`${isDropdownOpen ? "text-[#13191D]" : "text-white opacity-75"} font-quicksand`}>{isDropdownOpen ? "Fermer" : "Menu"}</span>
                  {isDropdownOpen ? (
                    <svg
                      className="ml-2"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 0.0117205L10 10.9883L-3.83841e-06 10.9883L5 0.0117205Z"
                        fill="#13191D" />
                    </svg>
                  ) : (
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
                  )}
                </button></>
            ) : (
              
            <button
            
            className={`${isDropdownOpen ? (isVisible ? 'text-gray-900' : '') : ''} md:flex font-quicksand items-center justify-self-end  justify-between w-full py-2 px-3 md:p-0 md:w-auto hidden font-normal text-lg`}
            onClick={toggleDropdown}
          >
            {isDropdownOpen ? "Fermer" : "Menu"}
            {isDropdownOpen  ? (
              <svg
                className="ml-2"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0.0117205L10 10.9883L-3.83841e-06 10.9883L5 0.0117205Z"
                  fill="#13191D"
                />
              </svg>
            ) : (
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
                  fill="#13191D"
                />
              </svg>
            )}
          </button>
            )}
            
          </div>

          {isDropdownOpen && (
            <ul
              className="text-center md:mt-10 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <a href="#" className="block px-4 py-4">
                  <h2 className="md:text-2xl hover:text-red-900 hover:ml-10 font-normal text-4xl">
                    Accueil
                  </h2>
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4">
                  <h2 className="md:text-2xl hover:text-red-900 hover:ml-10 font-normal text-4xl">
                    Chambres et Suites
                  </h2>
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4">
                  <h2 className="md:text-2xl hover:text-red-900 hover:ml-10 font-normal text-4xl">
                    Offres Spécials
                  </h2>
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4">
                  <h2 className="md:text-2xl hover:text-red-900 hover:ml-10 font-normal text-4xl">
                    Commentaires
                  </h2>
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4">
                  <h2 className="md:text-2xl hover:text-red-900 hover:ml-10 font-normal text-4xl">
                    Nos Services
                  </h2>
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4">
                  <h2 className="md:text-2xl hover:text-red-900 hover:ml-10 font-normal text-4xl">
                    équipements
                  </h2>
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4">
                  <h2 className="md:text-2xl hover:text-red-900 hover:ml-10 font-normal text-4xl">
                    Environs de l’établissement
                  </h2>
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4">
                  <h2 className="md:text-2xl hover:text-red-900 hover:ml-10 font-normal text-4xl">
                    Galerie
                  </h2>
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4">
                  <h2 className="md:text-2xl hover:text-red-900 hover:ml-10 font-normal text-4xl">
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
      <BookingModel />
    </>
  );
};

export default Nav;
