import React from "react";
import Image from "next/image";

import img from "../../../public/about.png";

const About = () => {
  return (
    <section className="md:mt-56 md:mx-auto md:w-[1075px] md:h-[564px] md:top-[1063px] md:left-[183px]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center md:w-[524px] md:gap-[50px] lg:col-span-7">
          <h3 className=" md:text-left mb-4 font-normal md:text-[34px] md:leading-[37.4px] text-[42px] leading-[46.2px] tracking-tight text-gray-800">
            Les Jardins De Zyriab Resort & Spa
          </h3>

          <h3
            className="md:text-left uppercase py-12 mb-4 font-normal text-[24px] leading-[26.4px] tracking-tight text-gray-800"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            B&B / Chambre d'hôtes à Marrakech
          </h3>
          <p
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className=" md:text-left mb-6 font-normal text-[18px] leading-[28.8px] text-gray-500 lg:mb-8 dark:text-gray-400"
          >
            La charmante résidence hôtelière Les Jardins De Zyriab Resort & Spa
            propose une grande piscine extérieure, un hammam et des massages
            d'aromathérapie. Elle est située à seulement 15 minutes en voiture
            de la médina de Marrakech.
          </p>

          <p
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className=" md:text-left mb-6 font-normal text-[18px] leading-[28.8px] text-gray-500 lg:mb-8 dark:text-gray-400"
          >
            Les suites confortables comprennent une cuisine entièrement équipée.
            Une connexion Wi-Fi est disponible gratuitement dans le hall. Chaque
            suite dispose d'une télévision à écran....
          </p>
          <a
            href="#"
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className="hidden text-left md:inline-flex mr-3 font-normal text-[18px] leading-[19.8px] text-yellow-700"
          >
            En savoir plus
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="md:h-[564px] md:w-[413px] lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={img} className="md:flex hidden" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default About;
