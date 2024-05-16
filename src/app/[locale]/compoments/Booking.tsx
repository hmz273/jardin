"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

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
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg><span className="sr-only">Loading...</span>
  </div> // Display loading indicator
    ) : (
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
    )}</>
  );
};

export default Booking;
