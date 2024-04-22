"use client";
import React, { useState } from "react";
import Image from "next/image";
import img from "../../../public/about.png";

const Hero = () => {
  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
}
const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
}

  const [checkInDate, setCheckInDate] = useState(getCurrentDate());
  const [checkOutDate, setCheckOutDate] = useState(getTomorrowDate());

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };
  const getMinDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  return (
    <section className=" text-gray-900">
      <div
        id="default-carousel"
        className="h-svh z-0 mx-auto relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-svh w-auto md:h-[880px] overflow-hidden md:brightness-50">
          {/* <!-- Item 1 --> */}
          <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <Image
              src={img}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[60rem]"
              alt="..."
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <Image
              src={img}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[60rem]"
              alt="..."
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <Image
              src={img}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[60rem]"
              alt="..."
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <Image
              src={img}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[60rem]"
              alt="..."
            />
          </div>
          {/* <!-- Item 5 --> */}
          <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <Image
              src={img}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[60rem]"
              alt="..."
            />
          </div>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-[-3.2rem] w-[12rem] start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
            <svg
              width="45"
              height="31"
              viewBox="0 0 45 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_361_2466)">
                <g clip-path="url(#clip1_361_2466)">
                  <g clip-path="url(#clip2_361_2466)">
                    <path
                      d="M44.4229 14.3738C44.4229 14.2942 44.3433 14.2146 44.3433 14.135C44.1841 13.6576 43.8658 13.4189 43.3088 13.3393C42.8314 13.3393 42.2743 13.3393 41.7969 13.3393C36.0674 13.3393 30.4176 13.3393 24.6881 13.3393C23.8128 13.3393 22.9375 13.3393 22.0621 13.3393C18.3221 13.3393 14.582 13.3393 10.842 13.3393C9.01173 13.3393 7.18149 13.3393 5.35125 13.3393C5.27168 13.3393 5.1921 13.3393 5.11252 13.2597C5.43082 13.021 5.74913 12.7027 6.06743 12.4639C9.96663 9.04219 13.8658 5.62044 17.765 2.11912C18.1629 1.80082 18.3221 1.40294 18.1629 0.845905C18.0833 0.368452 17.765 0.129726 17.2876 -0.0294247C16.8897 -0.108999 16.4918 -0.0294247 16.1735 0.209301C15.0595 1.16421 13.9454 2.19869 12.8314 3.1536C9.01173 6.57535 5.11252 9.91752 1.29289 13.3393C0.97459 13.578 0.735863 13.8963 0.656288 14.2942C0.656288 14.4533 0.656288 14.5329 0.656288 14.6921C0.735863 15.0899 0.97459 15.3287 1.21332 15.5674C4.63507 19.1483 8.13639 22.6496 11.6377 26.1509C12.8314 27.3446 13.9454 28.4586 15.139 29.6523C15.4573 30.0502 15.9348 30.1297 16.4123 30.0502C17.2876 29.8114 17.5263 28.6974 16.8897 28.0608L16.8101 27.9812C12.8314 24.0024 8.85257 20.0236 4.87379 16.0448C4.79422 15.9653 4.71465 15.9653 4.63507 15.8857C4.63507 15.8857 4.63507 15.8061 4.71464 15.8061C4.79422 15.8061 4.87379 15.8061 4.95337 15.8061C6.94276 15.8061 8.93215 15.8061 10.9215 15.8061C13.5475 15.8061 16.1735 15.8061 18.7995 15.8061C25.2451 15.8061 31.6112 15.8061 38.0568 15.8061C39.6483 15.7265 41.2398 15.7265 42.9109 15.7265C42.9905 15.7265 43.0701 15.7265 43.1497 15.7265C43.7067 15.7265 44.1841 15.4082 44.4229 14.8512C44.4229 14.7716 44.4229 14.7716 44.5024 14.6921C44.4229 14.6125 44.4229 14.5329 44.4229 14.3738Z"
                      fill="white"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_361_2466">
                  <rect
                    width="45"
                    height="30"
                    fill="white"
                    transform="matrix(-1 0 0 -1 45 30.05)"
                  />
                </clipPath>
                <clipPath id="clip1_361_2466">
                  <rect
                    width="45"
                    height="30"
                    fill="white"
                    transform="matrix(-1 0 0 -1 45 30.05)"
                  />
                </clipPath>
                <clipPath id="clip2_361_2466">
                  <rect
                    width="43.8462"
                    height="30"
                    fill="white"
                    transform="matrix(-1 0 0 -1 44.4229 30.05)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-[-3.2rem] w-[12rem] end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              width="45"
              height="31"
              viewBox="0 0 45 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_361_2472)">
                <g clip-path="url(#clip1_361_2472)">
                  <path
                    d="M0.577134 15.7263C0.577134 15.8059 0.65671 15.8855 0.65671 15.9651C0.815861 16.4425 1.13416 16.6812 1.69119 16.7608C2.16865 16.7608 2.72568 16.7608 3.20313 16.7608C8.93257 16.7608 14.5824 16.7608 20.3119 16.7608C21.1872 16.7608 22.0625 16.7608 22.9379 16.7608C26.6779 16.7608 30.418 16.7608 34.158 16.7608C35.9883 16.7608 37.8185 16.7608 39.6488 16.7608C39.7283 16.7608 39.8079 16.7608 39.8875 16.8404C39.5692 17.0791 39.2509 17.3974 38.9326 17.6362C35.0334 21.0579 31.1342 24.4797 27.235 27.981C26.8371 28.2993 26.6779 28.6972 26.8371 29.2542C26.9167 29.7316 27.235 29.9704 27.7124 30.1295C28.1103 30.2091 28.5082 30.1295 28.8265 29.8908C29.9405 28.9359 31.0546 27.9014 32.1686 26.9465C35.9883 23.5247 39.8875 20.1826 43.7071 16.7608C44.0254 16.5221 44.2641 16.2038 44.3437 15.8059C44.3437 15.6468 44.3437 15.5672 44.3437 15.408C44.2641 15.0102 44.0254 14.7714 43.7867 14.5327C40.3649 10.9518 36.8636 7.45048 33.3623 3.94915C32.1686 2.75552 31.0546 1.64146 29.861 0.447824C29.5427 0.0499464 29.0652 -0.0296292 28.5877 0.0499464C27.7124 0.288673 27.4737 1.40273 28.1103 2.03934L28.1899 2.11891C32.1686 6.09769 36.1474 10.0765 40.1262 14.0553C40.2058 14.1348 40.2854 14.1348 40.3649 14.2144C40.3649 14.2144 40.3649 14.294 40.2854 14.294C40.2058 14.294 40.1262 14.294 40.0466 14.294C38.0572 14.294 36.0678 14.294 34.0785 14.294C31.4525 14.294 28.8265 14.294 26.2005 14.294C19.7549 14.294 13.3888 14.294 6.94318 14.294C5.35167 14.3736 3.76016 14.3736 2.08907 14.3736C2.00949 14.3736 1.92992 14.3736 1.85034 14.3736C1.29331 14.3736 0.815861 14.6919 0.577134 15.2489C0.577134 15.3285 0.577134 15.3285 0.497559 15.408C0.577134 15.4876 0.577134 15.5672 0.577134 15.7263Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_361_2472">
                  <rect
                    width="45"
                    height="30"
                    fill="white"
                    transform="translate(0 0.0500488)"
                  />
                </clipPath>
                <clipPath id="clip1_361_2472">
                  <rect
                    width="43.8462"
                    height="30"
                    fill="white"
                    transform="translate(0.577148 0.0500488)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div  className="hidden font-quicksand lg:flex absolute top-[572px] left-[21px] bg-white p-[16px] md:h-[274.5px] md:w-[288px]">
        <form
          className="flex flex-col gap-[10px] w-[16rem]">
          <p className="text-center capitalize tracking-wide font-normal text-[16px] leading-[17px] text-[#3C3A34]">
            Votre comparateur simplifié
          </p>

          <div className="relative">
            <input
              type="date"
              min={getMinDate()}
              id="checkInDate"
              value={checkInDate}
              onChange={handleCheckInChange}
              className="ic1 text-center px-4 py-2 border-0 bg-gray-50 font-bold text-[14px] text-[#3C3A34] leading-[17.5px]  block w-full ps-10 p-2.5"
            />

            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <p className="text-gray-800 capitalize">Du</p>
            </div>
          </div>

          <div className="relative">
            <input
              type="date"
              min={getMinDate()}
              id="checkOutDate"
              value={checkOutDate}
              onChange={handleCheckOutChange}
              className="ic2 text-center px-4 py-2 border-0 bg-gray-50 font-semibold text-[14px] text-[#3C3A34] leading-[16.8px] block w-full ps-10 p-2.5"
            />

            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <p className="text-gray-800 capitalize">Au</p>
            </div>
          </div>
          <div className="flex">
            <input
              type="data"
              className="bg-gray-50 pl-10 py-2.5 font-semibold text-[14px] text-[#3C3A34] text-center leading-[16.8px] block flex-1 w-full"
              value="1 Adulte(S)"
              required
            />
            <span className="inline-flex items-center px-3 bg-gray-50">
              <svg
                className="w-4 h-4"
                width="11"
                height="15"
                viewBox="0 0 11 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.52231 0.549316C7.45564 0.549316 9.02291 2.11659 9.02291 4.04991C9.02291 5.98323 7.45564 7.5505 5.52231 7.5505C3.58899 7.5505 2.02172 5.98323 2.02172 4.04991C2.02172 2.11659 3.58899 0.549316 5.52231 0.549316ZM5.52201 9.81502C3.86632 9.81502 2.29739 10.1744 0.885008 10.8174C-0.236404 11.328 -0.23641 12.9377 0.884997 13.4483C2.29738 14.0913 3.86632 14.4507 5.52201 14.4507C7.17771 14.4507 8.74664 14.0913 10.159 13.4483C11.2804 12.9377 11.2804 11.328 10.159 10.8174C8.74664 10.1744 7.1777 9.81502 5.52201 9.81502Z"
                  fill="#13191D"
                />
              </svg>
            </span>
          </div>

          <button type="submit" className="">
            <p className="px-6 py-3 uppercase text-white font-normal text-[16px] leading-[16px] bg-slate-700">compare</p>
          </button>
          <p className="inline-flex items-center justify-center mr-3 text-[#3D505A] bg-primary-700 font-normal text-[10.8px] leading-[12px]">
            Powred by
            <a href="#" className="pl-2">
              <svg
                width="91"
                height="23"
                viewBox="0 0 91 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_361_2445)">
                  <g clip-path="url(#clip1_361_2445)">
                    <path
                      d="M1.10159 12.6223C0.687606 13.2779 0.690294 14.1139 1.10854 14.7668L3.46599 18.4474L6.47531 13.6502L3.53556 8.76758L1.10159 12.6223Z"
                      fill="#3C3A34"
                    />
                    <path
                      d="M15.5054 18.4509L12.496 13.6536L12.4981 13.6503L14.8435 9.91152C15.2508 9.26224 15.2508 8.43716 14.8435 7.78788L13.0858 4.98551C12.7203 4.40282 12.0808 4.04907 11.393 4.04907H6.4751L9.49496 8.86301L6.4751 13.6503L9.49283 18.4441L9.49075 18.4475L15.5054 18.4509Z"
                      fill="#3C3A34"
                    />
                    <path
                      d="M24.7685 15.5917L22.8732 12.4327H22.1609V15.5917H20.541V7.48193H23.631C24.5731 7.48193 25.2913 7.71177 25.7848 8.17145C26.2789 8.63114 26.5257 9.23548 26.5257 9.98595C26.5257 10.5991 26.3553 11.1116 26.0146 11.5258C25.6739 11.9392 25.1819 12.2146 24.5386 12.3526L26.5602 15.5917H24.7685ZM22.1609 11.3187H23.4937C24.4197 11.3187 24.883 10.909 24.883 10.0895C24.883 9.69883 24.7699 9.39482 24.5445 9.17673C24.3183 8.95791 23.9681 8.84923 23.4937 8.84923H22.1609V11.3187Z"
                      fill="#3C3A34"
                    />
                    <path
                      d="M32.5567 13.9608H29.3059L28.7317 15.5917H27.02L30.0065 7.57373H31.8562L34.8309 15.5917H33.1192L32.5567 13.9608ZM32.1198 12.7316L30.9251 9.30818L29.7311 12.7316H32.1198Z"
                      fill="#3C3A34"
                    />
                    <path
                      d="M41.2171 7.48193V8.76845H38.9774V15.5917H37.3576V8.76845H35.1289V7.48193H41.2171Z"
                      fill="#3C3A34"
                    />
                    <path
                      d="M43.732 8.76845V10.8708H46.6039V12.1111H43.732V14.2934H46.9483V15.5917H42.1128V7.48193H46.9483V8.76845H43.732Z"
                      fill="#3C3A34"
                    />
                    <path
                      d="M59.3883 7.57373V15.5917H57.7801V9.9977L55.724 15.5917H54.323L52.2669 10.0205V15.5917H50.647V7.57373H52.6113L55.047 13.6047L57.4357 7.57373H59.3883Z"
                      fill="#3C3A34"
                    />
                    <path
                      d="M65.7984 13.9608H62.5476L61.9734 15.5917H60.2617L63.2482 7.57373H65.0979L68.0726 15.5917H66.3609L65.7984 13.9608ZM65.3615 12.7316L64.1668 9.30818L62.9728 12.7316H65.3615Z"
                      fill="#3C3A34"
                    />
                    <path
                      d="M74.4586 7.48193V8.76845H72.2189V15.5917H70.599V8.76845H68.3711V7.48193H74.4586Z"
                      fill="#3C3A34"
                    />
                    <path
                      d="M81.5346 8.18243C82.2007 8.70379 82.6413 9.41167 82.8557 10.3075H81.1557C80.9795 9.87135 80.7056 9.52696 80.334 9.27436C79.9632 9.02102 79.5167 8.89472 78.9961 8.89472C78.5673 8.89472 78.1803 9.00266 77.8359 9.21635C77.4915 9.43077 77.2235 9.73771 77.0318 10.1357C76.8402 10.5337 76.7447 11.0007 76.7447 11.5368C76.7447 12.0655 76.8402 12.5288 77.0318 12.9268C77.2235 13.3248 77.4915 13.631 77.8359 13.8455C78.1803 14.0599 78.5673 14.1671 78.9961 14.1671C79.5167 14.1671 79.9632 14.0408 80.334 13.7882C80.7056 13.5356 80.9795 13.1912 81.1557 12.7543H82.8557C82.6413 13.6501 82.2007 14.3587 81.5346 14.8794C80.8686 15.4 80.03 15.6607 79.0189 15.6607C78.2457 15.6607 77.562 15.4867 76.9687 15.1379C76.3754 14.7898 75.9157 14.3015 75.5904 13.6736C75.2651 13.0458 75.1021 12.3335 75.1021 11.5368C75.1021 10.7327 75.2651 10.0167 75.5904 9.38891C75.9157 8.76107 76.3731 8.27275 76.9628 7.92469C77.5525 7.57589 78.2383 7.40186 79.0189 7.40186C80.03 7.40186 80.8686 7.6618 81.5346 8.18243Z"
                      fill="#3C3A34"
                    />
                    <path
                      d="M90.793 7.48193V15.5917H89.162V12.0655H85.6924V15.5917H84.0732V7.48193H85.6924V10.7673H89.162V7.48193H90.793Z"
                      fill="#3C3A34"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_361_2445">
                    <rect
                      width="90"
                      height="22.5"
                      fill="white"
                      transform="translate(0.792969)"
                    />
                  </clipPath>
                  <clipPath id="clip1_361_2445">
                    <rect
                      width="90"
                      height="14.4018"
                      fill="white"
                      transform="translate(0.792969 4.04907)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </p>
        </form>
      </div>

      <div className="hidden lg:flex absolute top-[796px] left-[1155px] ">
        <button type="submit" className="">
          <a
            href="#gellery"
            
            className="inline-flex uppercase justify-center font-quicksand tracking-tighter items-center text-center text-[#F4F1E8] hover:border hover:border-gray-300 focus:outline-none font-normal text-[18px] leading-[19.8px] opacity-60 px-10 pl-4 pt-4 py-2.5 me-2 mb-2"
          >
            Galeries Photo
            <svg
              className="ml-2"
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.375 3.75C14.2057 3.75 14.0592 3.68815 13.9355 3.56445C13.8118 3.44076 13.75 3.29427 13.75 3.125C13.75 2.95573 13.8118 2.80924 13.9355 2.68555C14.0592 2.56185 14.2057 2.5 14.375 2.5C14.5443 2.5 14.6908 2.56185 14.8145 2.68555C14.9382 2.80924 15 2.95573 15 3.125C15 3.29427 14.9382 3.44076 14.8145 3.56445C14.6908 3.68815 14.5443 3.75 14.375 3.75ZM20 2.5V15H2.5V12.5H0V0H17.5V2.5H20ZM15.3613 11.25L11.875 7.75391L10.2539 9.375L12.1387 11.25H15.3613ZM1.25 1.25V6.61133L4.375 3.49609L9.375 8.49609L11.875 5.99609L16.25 10.3613V1.25H1.25ZM10.3613 11.25L4.375 5.25391L1.25 8.38867V11.25H10.3613ZM18.75 3.75H17.5V12.5H3.75V13.75H18.75V3.75Z"
                fill="white"
              />
            </svg>
          </a>
        </button>
      </div>

      <div className="lg:flex absolute -translate-x-1/2 -translate-y-1/2 top-[25.7rem] left-1/2">
        <div className="mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <p
            className="uppercase font-normal tracking-tighter font-quicksand text-[22px] leading-[24.2px] text-white opacity-75 px-16 py-[22px]"
            
          >
            Les Jardins De Zyriab Resort & Spa
          </p>
          <h1 className="uppercase mb-[24px] tracking-normal font-normal text-[58px] leading-[63.8px] text-white">
            Promotion Jusqu’à 30%
          </h1>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              
              className="inline-flex justify-center font-quicksand items-center text-center text-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-semibold text-[20px] leading-[20px] px-10 py-3 uppercase mb-2"
            >
              Réservez
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
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
