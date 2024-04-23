"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import img from "../../../public/equipment.png";

const handleScroll = () => {
  const wiseLines = document.querySelector('.wise-lines');
  const windowHeight = wiseLines.clientHeight;
  const center = Math.floor(windowHeight / 4);

  const elements = document.querySelectorAll('.wise-lines p');

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const howFar = rect.top - wiseLines.scrollTop;

    if (howFar < windowHeight && howFar >= 0) {
      if (Math.abs(howFar - center) < 20) {
        element.classList.add('opacity-60');
      } else {
        element.classList.remove('opacity-60');
      }
    } else {
      element.classList.remove('opacity-60');
    }
  });
};

const Equipments = () => {
  
  useEffect(() => {
    const wiseLines = document.querySelector('.wise-lines');
    wiseLines.addEventListener('scroll', handleScroll);

    return () => {
      wiseLines.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
            {/* <div className="h-[200px] absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div> */}
            <div className="overflow-y-auto hide-scroll-bar-eq max-h-[53rem] py-6 text-center wise-lines">
              <div className="py-4">
                <p className="text-white font-normal tracking-normal text-[28px] leading-[30.8px] py-3 ">Restauration</p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Café sur place
                </p>
                <p 
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Fruits En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Bouteille d'eau En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Vin/champagne En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Snack-bar
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                   Petit-déjeuner en chambre
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Bar
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                   Restaurant
                </p>
              </div>
              <div className="py-4 pl-[20px]">
                <p className="text-white font-normal tracking-normal text-[28px] leading-[35px] py-3 ">Restauration</p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[32.4px]"
                  
                >
                  Café sur place
                </p>
                <p 
                  className="text-white font-normal text-[16px] font-quicksand leading-[32.4px]"
                  
                >
                  Fruits En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[32.4px]"
                  
                >
                  Bouteille d'eau En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[32.4px]"
                  
                >
                  Vin/champagne En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[32.4px]"
                  
                >
                  Snack-bar
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[32.4px]"
                  
                >
                   Petit-déjeuner en chambre
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[32.4px]"
                  
                >
                  Bar
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[32.4px]"
                  
                >
                   Restaurant
                </p>
              </div>
              <div className="py-4">
                <p className="text-white font-normal tracking-normal text-[28px] leading-[30.8px] py-3 ">Restauration</p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Café sur place
                </p>
                <p 
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Fruits En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Bouteille d'eau En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Vin/champagne En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Snack-bar
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                   Petit-déjeuner en chambre
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Bar
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                   Restaurant
                </p>
              </div>
              <div className="py-4">
                <p className="text-white font-normal tracking-normal text-[28px] leading-[30.8px] py-3 ">Restauration</p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Café sur place
                </p>
                <p 
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Fruits En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Bouteille d'eau En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Vin/champagne En supplément
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Snack-bar
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                   Petit-déjeuner en chambre
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                  Bar
                </p>
                <p
                  className="text-white font-normal text-[16px] font-quicksand leading-[22.4px]"
                  
                >
                   Restaurant
                </p>
              </div>
            </div>
            {/* <div className="h-[200px] absolute bottom-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipments;
