"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  return (
    <section className="md:p-28 p-6 mx-auto my-16 max-w-screen-lg lg:mb-16 text-center bg-[#F4F1E8] md:h-[25rem]">
      <h3 className="mb-4 md:text-5xl text-3xl tracking-tight font-normal text-gray-700">
        Réserver Directement
      </h3>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:py-8 py-4">
        <div>
          <DatePicker
            className="custom-date-input block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Check-in"
            minDate={new Date()}
            selected={checkInDate}
            onChange={(checkInDate) => setCheckInDate(checkInDate)}
            required
          />
        </div>

        <div>
          <DatePicker
            className="custom-date-input block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Check-out"
            minDate={new Date()}
            selected={checkOutDate}
            onChange={(checkOutDate) => setCheckOutDate(checkOutDate)}
            required
          />
        </div>

        <div>
          <select className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer">
            <option className="bg-gray-50">Adults</option>
            <option className="bg-gray-50">1</option>
            <option className="bg-gray-50">2</option>
            <option className="bg-gray-50">3</option>
            <option className="bg-gray-50">4</option>
          </select>
        </div>
      </div>
      <div className="relative mt-6">
        <a
          href="#"
          style={{ fontFamily: "Quicksand, sans-serif" }}
          className="font-semibold inline-flex justify-center items-center text-center text-[#3D505A] border border-[#13191D] focus:outline-none focus:ring-4 focus:ring-gray-100 text-md px-10 py-2.5 me-2 mb-2 w-80"
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
    </section>
  );
};

export default Booking;