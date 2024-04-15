import React from "react";
import Image from "next/image";
import img from "../../../public/serv.png";

const Services = () => {
  return (
    <section className="md:mt-36">
      <div className="py-8 px-4 mx-auto max-w-screen-3xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 tracking-tight font-normal text-[58px] leading-[63.8px]">
            Nos services
          </h2>
        </div>

        <div className="flex flex-col bg-white m-auto p-auto w-full">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 m-0 gap-[44px]">
              <div className="inline-block px-3 md:w-[404px] w-[18rem]">
                <div className="h-auto max-w-lg overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[404px] w-[18rem]">
                    <Image className="md:h-[350px]  my-4" src={img} alt="" />

                    <div className="py-5 text-left">
                      <h5 className="mb-2 font-normal text-[34px] leading-[37.4px] tracking-tight text-[#13191D]">
                      Réserver 5 nuits
                      </h5>
                      <p
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        className="mb-3 font-normal text-[18px] leading-[28.8px] py-5"
                      >
                        Pour toute réservation via notre Site Web uniquement
                        dépassant 5 nuitées
                      </p>

                      <button
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        type="button"
                        className="py-1 pr-5 me-2 font-normal text-[18px] leading-[19.8px] text-[#AD936D] focus:outline-none"
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[404px] w-[18rem]">
                <div className="h-auto max-w-lg overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[404px] w-[18rem]">
                    <Image className="md:h-[350px]  my-4" src={img} alt="" />

                    <div className="py-5 text-left">
                      <h5 className="mb-2 font-normal text-[34px] leading-[37.4px] tracking-tight text-[#13191D]">
                      Réserver 5 nuits
                      </h5>
                      <p
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        className="mb-3 font-normal text-[18px] leading-[28.8px] py-5"
                      >
                        Pour toute réservation via notre Site Web uniquement
                        dépassant 5 nuitées
                      </p>

                      <button
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        type="button"
                        className="py-1 pr-5 me-2 font-normal text-[18px] leading-[19.8px] text-[#AD936D] focus:outline-none"
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[404px] w-[18rem]">
                <div className="h-auto max-w-lg overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[404px] w-[18rem]">
                    <Image className="md:h-[350px]  my-4" src={img} alt="" />

                    <div className="py-5 text-left">
                      <h5 className="mb-2 font-normal text-[34px] leading-[37.4px] tracking-tight text-[#13191D]">
                      Réserver 5 nuits
                      </h5>
                      <p
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        className="mb-3 font-normal text-[18px] leading-[28.8px] py-5"
                      >
                        Pour toute réservation via notre Site Web uniquement
                        dépassant 5 nuitées
                      </p>

                      <button
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        type="button"
                        className="py-1 pr-5 me-2 font-normal text-[18px] leading-[19.8px] text-[#AD936D] focus:outline-none"
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[404px] w-[18rem]">
                <div className="h-auto max-w-lg overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[404px] w-[18rem]">
                    <Image className="md:h-[350px]  my-4" src={img} alt="" />

                    <div className="py-5 text-left">
                      <h5 className="mb-2 font-normal text-[34px] leading-[37.4px] tracking-tight text-[#13191D]">
                      Réserver 5 nuits
                      </h5>
                      <p
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        className="mb-3 font-normal text-[18px] leading-[28.8px] py-5"
                      >
                        Pour toute réservation via notre Site Web uniquement
                        dépassant 5 nuitées
                      </p>

                      <button
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        type="button"
                        className="py-1 pr-5 me-2 font-normal text-[18px] leading-[19.8px] text-[#AD936D] focus:outline-none"
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
