import React from "react";
import Image from "next/image";

import img from "../../../public/about.png";

const About = () => {
  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-800">
            Les Jardins De Zyriab Resort & Spa
          </h1>

          <h1
            className="max-w-2xl py-6 mb-4 text-lg font-normal tracking-tight leading-none md:text-4xl xl:text-3xl text-gray-800"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            B&B / Chambre d'hôtes à Marrakech
          </h1>
          <p
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            La charmante résidence hôtelière Les Jardins De Zyriab Resort & Spa
            propose une grande piscine extérieure, un hammam et des massages
            d'aromathérapie. Elle est située à seulement 15 minutes en voiture
            de la médina de Marrakech.
          </p>

          <p
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            Les suites confortables comprennent une cuisine entièrement équipée.
            Une connexion Wi-Fi est disponible gratuitement dans le hall. Chaque
            suite dispose d'une télévision à écran....
          </p>
          <a
            href="#"
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className="hidden md:inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-yellow-700 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
        <div className="h-auto lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={img} className="md:flex hidden" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default About;
