import React from "react";
import Image from "next/image";

import img from "../../../public/about.png";

const ServicesModel = () => {
  return (
    <>
      <div
        id="service"
        tabIndex={-1}
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 "
      >
        <div className="relative w-full max-w-7xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 mb-[26px] dark:border-gray-600">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="service"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            {/* <div className='gap-[10px]'> */}

            {/* </div> */}
            <div className="grid grid-cols-2  pl-[56px] pr-[10px] gap-4">
              <div className="p-4 md:p-5 space-y-4">
                <Image
                  src={img}
                  className="md:h-[533px] md:w-[533px] md:ml-[5px]"
                  alt="mockup"
                />
              </div>

              <div className="md:pb-5 md:pt-[30px] md:pl-[28px] space-y-4">
                <h3 className="font-normal md:text-[42px] md:leading-[46.2px] tracking-widest capitalize mb-[60px] text-gray-900 dark:text-white">
                  Réserver 5 nuits
                </h3>
                <p className="font-quicksand tracking-widest font-normal capitalize text-[18px] leading-[28.8px] md:w-[32rem] text-gray-500 dark:text-gray-400">
                  Pour toute réservation via notre Site Web uniquement dépassant
                  5 nuitées, nous avons le plaisir de vous offrir votre
                  transfert arrivée aéroport ( jusqu'à 4 personnes maximum).
                  Nous vous remercions de nous le signifier lors de votre
                  réservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesModel;
