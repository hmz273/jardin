import React from "react";
import OffreCard from "./cards/OffreCard";

import { ofSpecialData } from "@/constants";

const Offers = () => {
  return (
    <section id="offers" className="md:mt-[60px]">
      <div className="py-8 px-4 mx-auto max-w-screen-3xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 tracking-normal font-normal text-[58px] text-[#13191D] leading-[63.8px]">
            Offres Spécials
          </h2>
        </div>

        <div className="flex flex-col md:px-8">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap frst">
              {/* {ofSpecialData.map((ofspecial) => (
              <div key={ofspecial.id} className="inline-block px-3 md:w-[28rem] md:h[735px] gap-5 w-[18rem]">
                <div className="h-auto max-w-lg overflow-hidden duration-300 ease-in-out">
                  <div>
                    <Image
                      className="md:h-[490px] md:w-[413px] md:mb-3"
                      src={img}
                      alt=""
                    />

                    <div className="py-5 text-left">
                      <h5 className="mb-[36px] font-normal text-[34px] leading-[37.4px] text-[#13191D] tracking-normal">
                      {ofspecial.title} 
                      </h5>
                      <p
                        
                        className="mb-3 font-normal text-[18px] font-quicksand leading-[28.8px] text-[#13191D]"
                      >
                        {ofspecial.description}
                      </p>

                      <button
                        
                        type="button"
                        className="py-1 pr-5 me-2 mt-[13px] uppercase font-normal font-quicksand text-[18px] leading-[19.8px] text-[#AD936D] focus:outline-none"
                      >
                        <p className=" tracking-widest">En savoir plus</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
              {ofSpecialData.map((ofspecial) => (
                <OffreCard
                  key={ofspecial.id}
                  id={ofspecial.id}
                  title={ofspecial.title}
                  description={ofspecial.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
