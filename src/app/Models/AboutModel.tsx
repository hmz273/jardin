import React from 'react'
import Image from "next/image";

import img from "../../../public/about.png";
const AboutModel = ({about, title, souTitle}) => {
  return (
    <>
    <div id="about-modal" tabIndex={-1} className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 ">
        <div className="relative w-full max-w-7xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 mb-[26px] dark:border-gray-600">
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="about-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            {/* <div className='gap-[10px]'> */}
              <h3 className="font-normal md:text-[41px] md:leading-[37.4px] tracking-[1px] text-center capitalize mb-[48px] text-gray-900 dark:text-white">
              {title}
              </h3>
              <h5 className="font-normal md:text-[30px] md:leading-[26.4px] tracking-[1px] text-center uppercase font-quicksand text-gray-900 dark:text-white">
              {souTitle}
              </h5>
              {/* </div> */}
            <div className="grid grid-cols-2 pt-16 pl-[56px] pr-[10px] gap-4">

            <div className="p-4 md:p-5 space-y-4">
              <Image src={img} className="md:h-[533px] md:w-[533px] md:ml-[5px]" alt="mockup" />
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <p className="font-quicksand tracking-widest font-normal text-[18px] leading-[28.8px] md:w-[32rem] text-gray-500 dark:text-gray-400">
                {about}
              </p>
            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutModel