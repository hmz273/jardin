"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import img from "../../../../public/equipment.png";

import { equipementsData } from "@/constants";
import { useTranslation } from "react-i18next";


const Equipments = () => {
  
  const { t } = useTranslation("common");
  

  return (
    <section className="h-auto md:mt-[29px]">
      <div className="pt-[64px]  mx-auto md:w-[81rem]">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="md:mb-[60px] tracking-normal font-normal text-[58px] leading-[63.8px] text-gray-700">
            Equipements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 md:h-[54rem]">
          <div>
            <Image src={img} alt="mockup" className="hidden md:grid md:h-[54rem]" />
          </div>
          <div className="bg-[#3D505A] relative">
            <div className="h-[211px] w-full absolute top-0 left-0 bg-gradient-to-b from-[#3D505A]">
              </div>
            <div className="overflow-y-auto hide-scroll-bar-eq max-h-[53rem] py-6 text-center ">
            {equipementsData.map((equipement) => (
              <>
              <div className="py-4">
                <p className="text-white font-normal tracking-normal text-[28px] leading-[30.8px] py-3 ">{t(`facilitiesType.${equipement.id}-title`)}</p>
                {equipement.facilities.map((facility) => (
                  <p className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]">{t(`facilities.${facility.fcId}-title`)}</p>
                ))}
              </div>
              </>
            ))}
            </div>
            <div className="h-[211px] w-full absolute bottom-0 left-0 bg-gradient-to-t from-[#3D505A]">
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipments;
