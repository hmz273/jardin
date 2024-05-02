"use client"

import React, { useState } from "react";
import AboutModel from "../Models/AboutModel";
import Image from "next/image";
import { about, tradEn, tradFr, tradAr, siteinfo } from "@/constants"

import img from "../../../public/about.png";

const About = () => {
  const [language, setLanguage] = useState('fr'); // Default language is French

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Translation data for each language
  const translations = {
    fr: tradFr,
    en: tradEn,
    ar: tradAr,
    // Add translations for other languages here
  };  

  const aboutDetails = translations[language];

  const etabTypeLabel = aboutDetails.etabTypeLabel[siteinfo.etabType];

  return (
    <><section className="md:mt-28 md:mx-auto md:w-[1075px] md:h-[564px] md:top-[1063px] md:left-[183px]">

      <select value={language} onChange={handleLanguageChange}>
        <option value="fr">French</option>
        <option value="en">English</option>
        <option value="ar">Arabe</option>
        {/* Add options for other languages here */}
      </select>

      <div className="grid max-w-screen-xl md:w-[70rem] py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center md:w-[524px] md:h-[445px] md:gap-[50px]  lg:col-span-7">
          <h3 className=" md:text-lef font-normal md:text-[34px] md:leading-[37.4px] text-[42px] leading-[46.2px] tracking-normal text-gray-800">
            {aboutDetails.title}
          </h3>

          <h3
            className="md:text-left uppercase py-12 font-quicksand font-normal text-[24px] leading-[26.4px] tracking-normal text-gray-800"

          >
            {etabTypeLabel} {aboutDetails.souTitle}
          </h3>
          <p

            className=" md:text-left mb-6 font-quicksand font-normal line-clamp-[7] text-[18px] leading-[28.8px] text-gray-500 lg:mb-8 dark:text-gray-400"
          >
            {aboutDetails.description}
          </p>
          <a
            href="#"
            data-modal-target="about-modal" data-modal-toggle="about-modal"
            className="hidden text-left tracking-tight uppercase md:inline-flex mr-3 font-quicksand font-normal text-[18px] leading-[19.8px] text-[#AD936D]"
          >
            En savoir plus
          </a>
        </div>
        <div className="md:h-[564px] pl-[12px] md:w-[413px] lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={img} className="md:flex hidden md:w-[413px]" alt="mockup" />
        </div>
      </div>
    </section>
    <AboutModel about={about.description} souTitle={about.souTitle} title={about.title}/>
    </>
  );
};

export default About;
