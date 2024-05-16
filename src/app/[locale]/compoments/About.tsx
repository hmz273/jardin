"use client"

import React, { useEffect, useState } from "react";
import AboutModel from "../Models/AboutModel";
import Image from "next/image";
import { about, tradEn, tradFr, tradAr, siteinfo } from "@/constants"

import { useTranslation } from "react-i18next";


import img from "../../../../public/about.png";

const About = () => {

  const { t } = useTranslation("common");
    const [loading, setLoading] = useState(true); // Introduce loading state

    useEffect(() => {
      // Simulating fetching social links
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulating a 2-second delay
    }, []);


  return (
    <>
    
    {loading ? (
        <div role="status" className="align-middle text-center">
        <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div> // Display loading indicator
      ) : (
    
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
          </section><AboutModel about={about.description} souTitle={about.souTitle} title={about.title} /></>

      )}
    </>
  );
};

export default About;
