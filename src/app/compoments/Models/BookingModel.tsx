import React from "react";
import { DatePickerProvider } from "../../lib";

import Date from "../Date";


const BookingModel = () => {



    
  return (
    
    <div>

{/* <!-- Extra Large Modal --> */}
<div id="extralarge-modal" tabIndex={-1} className="fixed z-50 hidden overflow-x-hidden overflow-y-auto ">
    <div className="relative w-[90rem]">   
        {/* <!-- Modal content --> */}
        <div className="relative bg-[#3D505A] px-52 shadow h-[57rem]">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between w-full md:pt-2">
              
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="text-center mx-auto">
                <h3 style={{ fontFamily: "Quicksand, sans-serif" }} className="text-xl font-normal text-white">
                Meilleurs Tarifs Garantis
                </h3>
                <h3 className="text-6xl font-normal text-white py-4">
                réserver directement
                </h3></div>
            {/* <!-- Modal body --> */}
            <div className="px-4 md:px-5 space-y-4">
            <DatePickerProvider >
      <Date />
    </DatePickerProvider>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="text-center mx-auto py-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
            <select className="block py-2.5 px-0 w-56 max-w-sm mx-auto text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none peer">
            <option className="bg-[#3D505A]">Adults</option>
            <option className="bg-[#3D505A]">1</option>
            <option className="bg-[#3D505A]">2</option>
            <option className="bg-[#3D505A]">3</option>
            <option className="bg-[#3D505A]">4</option>
          </select>
                
        <a
          href="#"
          style={{ fontFamily: "Quicksand, sans-serif" }}
          className="font-semibold inline-flex justify-center items-center text-center text-white bg-[#AD936D] w-[46rem] text-md px-10 py-2.5 mt-12 me-2 mb-2"
        >
          Réservez Maintenant
          <svg className='ml-2' width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 1L17 7M17 7L11 13M17 7H0" stroke="white"/>
</svg>

        </a>
                </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default BookingModel