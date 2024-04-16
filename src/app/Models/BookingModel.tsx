import React from "react";
import { DatePickerProvider } from "../lib";

import Date from "../compoments/Date";

const BookingModel = () => {
  return (
    <div>
      {/* <!-- Extra Large Modal --> */}
      <div
        id="extralarge-modal"
        tabIndex={-1}
        className="fixed z-50 hidden overflow-x-hidden overflow-y-auto "
      >
        <div className="relative w-[90rem]">
          {/* <!-- Modal content --> */}
          <div className="relative bg-[#3D505A] px-52 shadow h-[57rem]">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between  md:pt-2 md:w-[74rem]">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="extralarge-modal"
              >
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1.35355" y1="0.646447" x2="25.3535" y2="24.6464" stroke="white"/>
<line x1="0.646447" y1="24.6464" x2="24.6464" y2="0.646447" stroke="white"/>
</svg>

                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="text-center mx-auto mt-10">
              <h6
                style={{ fontFamily: "Quicksand, sans-serif" }}
                className="font-normal text-[22px] text-white uppercase leading-[24.2px]"
              >
                Meilleurs Tarifs Garantis
              </h6>
              <h1 className="font-normal text-[58px] text-white capitalize leading-[63.8px] py-4">
                réserver directement
              </h1>
            </div>
            {/* <!-- Modal body --> */}
            <div className="px-4 md:px-5 space-y-4">
              <DatePickerProvider>
                <Date />
              </DatePickerProvider>
            </div>
            {/* <!-- Modal footer --> */}
            <div
              className="text-center mx-auto"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              <select className="block mb-14 px-0 w-48 max-w-sm mx-auto font-normal text-[18px] text-white leading-[28.8px] opacity-70 bg-transparent border-0 border-b-2 border-gray-300 appearance-none peer">
                <option className="bg-[#3D505A]">Adults</option>
                <option className="bg-[#3D505A]">1</option>
                <option className="bg-[#3D505A]">2</option>
                <option className="bg-[#3D505A]">3</option>
                <option className="bg-[#3D505A]">4</option>
              </select>

              <a
                href="#"
                style={{ fontFamily: "Quicksand, sans-serif" }}
                className="font-semibold uppercase inline-flex justify-center items-center text-center text-white bg-[#AD936D] w-[794px] text-[20px] leading-[20px] px-10 py-5  me-2 mb-2"
              >
                Réservez Maintenant
                <svg
                  className="ml-2"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 1L17 7M17 7L11 13M17 7H0" stroke="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
