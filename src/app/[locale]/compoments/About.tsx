"use client"

import React, { useState } from "react";
import AboutModel from "../Models/AboutModel";
import Image from "next/image";
import { about, tradEn, tradFr, tradAr, siteinfo } from "@/constants"

import { useTranslation } from "react-i18next";


import img from "../../../../public/about.png";

const About = () => {

  const { t } = useTranslation("common");
  


  return (
    <><section className="md:mt-28 md:mx-auto md:w-[1075px] md:h-[564px] md:top-[1063px] md:left-[183px]">
      <div className="grid max-w-screen-xl md:w-[70rem] py-8 mx-auto ltr:gap-8 rtl:gap-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      
    <div className="mr-auto place-self-center md:w-[524px] md:h-[445px] md:gap-[50px] lg:col-span-7">
      <h3 className="font-normal md:text-[34px] md:leading-[37.4px] text-[42px] leading-[46.2px] tracking-normal text-gray-800">
      {t("about.title")}<span className="text-red-700"> || Jardin </span>
      </h3>
      <h3 className="uppercase py-12 font-quicksand font-normal text-[24px] leading-[26.4px] tracking-normal text-gray-800">
      {t("about.souTitle")}
      </h3>
      <p className="mb-6 font-quicksand font-normal line-clamp-[7] text-[18px] leading-[28.8px] text-gray-500 lg:mb-8 dark:text-gray-400">
      {t("about.description")}
      </p>
      <a href="#" data-modal-target="about-modal" data-modal-toggle="about-modal" className="hidden text-left tracking-tight uppercase md:inline-flex mr-3 font-quicksand font-normal text-[18px] leading-[19.8px] text-[#AD936D]">
        {t("about.button")}
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
