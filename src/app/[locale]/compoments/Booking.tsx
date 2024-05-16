"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (

    
  <section className="mx-4 mt-[13rem]">
      <div className="md:p-28 p-6 py-8 md:mx-auto my-16 lg:mb-16 text-center bg-[#F4F1E8] md:h-[513px] h-[550px] md:w-[1297px] gap-[80px] top-[8622.87px] left-[72px]">
      <h3 className="mb-[28px] mt-[4rem] tracking-normal font-normal md:text-[58px] md:leading-[63.8px] text-[42px] leading-[46.2px] text-gray-700">
        Réserver Directement
      </h3>

      <div className="grid md:grid-cols-3 mx-auto grid-cols-1  -mb-[28px] md:py-8 py-4 md:w-[1079px] md:h-[170px] md:gap-[15rem]">
        <div>
          <DatePicker
            className="custom-date-input tracking-wider block py-6 md:py-2.5 pr-0 md:w-[26rem] pl-[26px] w-[278px] gap-[10px] font-normal text-[18px] leading-[25.2px] text-gray-900 bg-transparent border-0 border-b-2 border-[#3C3A34] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholderText="Check-in"
            minDate={new Date()}
            selected={checkInDate}
            onChange={(checkInDate) => setCheckInDate(checkInDate)}
            required
          />
        </div>

        <div>
          <DatePicker
            className="custom-date-input tracking-wider block py-6 md:py-2.5 pr-0 md:w-[26rem] pl-[30px] w-[278px] gap-[10px] font-normal text-[18px] leading-[25.2px] text-gray-900 bg-transparent border-0 border-b-2 border-[#3C3A34] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholderText="Check-out"
            minDate={new Date()}
            selected={checkOutDate}
            onChange={(checkOutDate) => setCheckOutDate(checkOutDate)}
            required
          />
        </div>

        <div className="select">
          <select className="block img-bg py-6 tracking-widest md:py-2.5 pr-0 md:w-[192px] w-[278px] pl-[20px] font-normal text-[18px] leading-[25.2px] text-gray-900 bg-transparent border-0 border-b-2 border-[#3C3A34] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer">
            <option className="bg-gray-50">Adultes</option>
            <option className="bg-gray-50">1</option>
            <option className="bg-gray-50">2</option>
            <option className="bg-gray-50">3</option>
            <option className="bg-gray-50">4</option>
          </select>
        </div>
      </div>
      <div className="relative mt-[14px]">
        <a
          href="#"
          className="font-semibold tracking-normal uppercase font-quicksand md:text-[20px] md:leading-[20px] text-[18px] leading-[19.8px] inline-flex justify-center items-center text-center text-[#3D505A] border border-[#13191D] focus:outline-none focus:ring-4 focus:ring-gray-100 md:px-10 py-5 me-2 mb-2 w-[22rem]"
        >
          Réservez Maintenant
          <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
        </a>
      </div>
      </div>
    </section>
  );
};

export default Booking;
