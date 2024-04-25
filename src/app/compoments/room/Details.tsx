"use client";
import React from "react";
import { roomDetailsData } from "../../../constants";

const Details = () => {

  return (
    <section className="pb-32 md:pb-4 md:p-[50px] font-quicksand">
      <div className="py-8 px-4 mx-auto max-w-screen-3xl text-center lg:py-16 lg:px-6">
        <div className="grid md:grid-cols-2 gap-4 divide-y-2 md:divide-x-2">
          <div>
            <div className="flex space-x-16 pb-4">
              <p className="leading-[28.8px] text-[18px] font-normal">
                Personnes Max : {roomDetailsData?.guests}
              </p>
              <p className="leading-[28.8px] text-[18px] font-normal">
                Surface : {roomDetailsData?.surface}m²
              </p>
            </div>
            <h1 className="text-left mb-4 leading-[46.2px] text-[42px] font-normal tracking-tight text-gray-700 py-8">
            {roomDetailsData?.title}
            </h1>
            <p className="text-left py-4 leading-[28.8px] text-[18px] font-normal">
            {roomDetailsData?.description}
            </p>
            <p className="text-left py-4 leading-[28.8px] text-[18px] font-normal">
              Chambre non fumeur
            </p>
            <p className="text-left py-4 leading-[28.8px] text-[18px] font-normal">
              1 Grand(s) lit(s) et 2 Lit(s) simple(s) et 1 Canapé-lit
            </p>

            <div className="md:text-left md:pt-32">
              <a
                href="#"
                style={{ fontFamily: "Quicksand, sans-serif" }}
                className="font-semibold leading-[20px] text-[20px] inline-flex justify-center items-center text-center text-[#3D505A] border border-[#13191D] focus:outline-none focus:ring-4 focus:ring-gray-100 px-10 py-2.5 me-2 mb-2 w-80"
              >
                Réservez Maintenant
                <svg
                  className="ml-2"
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.32907 11.5458C9.21202 11.4286 9.14628 11.2698 9.14628 11.1042C9.14628 10.9385 9.21202 10.7797 9.32907 10.6625L13.4707 6.52083L1.4374 6.52083C1.27164 6.52083 1.11267 6.45498 0.995456 6.33777C0.878247 6.22056 0.812399 6.06159 0.812399 5.89583C0.812399 5.73007 0.878247 5.5711 0.995456 5.45389C1.11267 5.33668 1.27164 5.27083 1.4374 5.27083L13.4707 5.27083L9.32907 1.12916C9.2468 1.05277 9.18665 0.955601 9.15497 0.847894C9.1233 0.740186 9.12125 0.625929 9.14907 0.517159C9.17688 0.408389 9.23351 0.309133 9.313 0.22985C9.39249 0.150567 9.49189 0.0941916 9.60073 0.0666632C9.70938 0.0388159 9.82352 0.0407587 9.93116 0.0722871C10.0388 0.103815 10.1359 0.163764 10.2124 0.24583L15.4207 5.45416C15.5378 5.57135 15.6035 5.7302 15.6035 5.89583C15.6035 6.06146 15.5378 6.22031 15.4207 6.3375L10.2124 11.5458C10.0952 11.6629 9.93636 11.7286 9.77073 11.7286C9.60511 11.7286 9.44625 11.6629 9.32907 11.5458Z"
                    fill="#13191D"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-2 gap-4 pt-4 overflow-y-auto hide-scroll-bar-eq max-h-[518px] leading-[25.2px] text-[18px] font-normal">
              <div>1</div>
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
