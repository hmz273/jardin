"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link'
import img from "../../../public/image.png";

const Rooms = () => {
  return (
    <section className="md:mt-48 md:h-[998px] md:top-[1782px] md:left[0.5px]">
      <div className="py-8 px-4 mx-auto max-w-screen-3xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 tracking-tight font-normal text-[58px] leading-[63.8px] text-[#13191D]">
            Chambres Et Suites
          </h2>
        </div>

        {/* <!-- component --> */}
        <div className="flex flex-col bg-white m-auto p-auto w-full">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap md:h-[715px] md:gap-[30px]">
              <div className="inline-block px-3 md:w-[856px] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[856px] md:h-[715px] w-[18rem]">
                    <Image
                      className="md:h-[488px] md:w-[856px] h-auto"
                      src={img}
                      alt=""
                    />

                    <div className="p-5">
                      <h5 className="mb-2 font-normal text-[42px] leading-[46.2px] tracking-tight text-[#13191D]">
                        Suite Senior
                      </h5>
                      <div className="md:flex space-x-5 text-center mx-auto gap-[60px] max-w-md pl-16 md:py-6 py-2">
                        <p
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                          className="mb-3 font-normal text-[18px] leading-[28.8px] text-[#13191D]"
                        >
                          Surface : 220m²
                        </p>
                        <p
                          className="mb-3 font-normal text-[18px] leading-[28.8px] text-[#13191D]"
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                          Personnes Max : 3
                        </p>
                      </div>

                      <Link
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        href="/room"
                        className="inline-flex justify-center items-center text-center border border-[#13191D] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold text-[20px] leading-[20px] text-[#13191D] px-10 py-2.5 me-2 mb-2"
                      >
                        Découvrir
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[856px] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[856px] w-[18rem]">
                    <Image
                      className="md:h-[488px] md:w-[856px] h-80"
                      src={img}
                      alt=""
                    />

                    <div className="p-5">
                      <h5 className="mb-2 font-normal text-[42px] leading-[46.2px] tracking-tight text-[#13191D]">
                        Suite Senior
                      </h5>
                      <div className="md:flex space-x-5 text-center mx-auto gap-[60px] max-w-md pl-16 md:py-6 py-2">
                        <p
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                          className="mb-3 font-normal text-[18px] leading-[28.8px] text-[#13191D]"
                        >
                          Surface : 220m²
                        </p>
                        <p
                          className="mb-3 font-normal text-[18px] leading-[28.8px] text-[#13191D]"
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                          Personnes Max : 3
                        </p>
                      </div>

                      <Link
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        href="/room"
                        className="inline-flex justify-center items-center text-center border border-[#13191D] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold text-[20px] leading-[20px] text-[#13191D] px-10 py-2.5 me-2 mb-2"
                      >
                        Découvrir
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[856px] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[856px] w-[18rem]">
                    <Image
                      className="md:h-[488px] md:w-[856px] h-80"
                      src={img}
                      alt=""
                    />

                    <div className="p-5">
                      <h5 className="mb-2 font-normal text-[42px] leading-[46.2px] tracking-tight text-[#13191D]">
                        Suite Senior
                      </h5>
                      <div className="md:flex space-x-5 text-center mx-auto gap-[60px] max-w-md pl-16 md:py-6 py-2">
                        <p
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                          className="mb-3 font-normal text-[18px] leading-[28.8px] text-[#13191D]"
                        >
                          Surface : 220m²
                        </p>
                        <p
                          className="mb-3 font-normal text-[18px] leading-[28.8px] text-[#13191D]"
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                          Personnes Max : 3
                        </p>
                      </div>

                      <Link
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        href="/room"
                        className="inline-flex justify-center items-center text-center border border-[#13191D] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold text-[20px] leading-[20px] text-[#13191D] px-10 py-2.5 me-2 mb-2"
                      >
                        Découvrir
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[856px] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[856px] w-[18rem]">
                    <Image
                      className="md:h-[488px] md:w-[856px] h-80"
                      src={img}
                      alt=""
                    />

                    <div className="p-5">
                      <h5 className="mb-2 font-normal text-[42px] leading-[46.2px] tracking-tight text-[#13191D]">
                        Suite Senior
                      </h5>
                      <div className="md:flex space-x-5 text-center mx-auto gap-[60px] max-w-md pl-16 md:py-6 py-2">
                        <p
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                          className="mb-3 font-normal text-[18px] leading-[28.8px] text-[#13191D]"
                        >
                          Surface : 220m²
                        </p>
                        <p
                          className="mb-3 font-normal text-[18px] leading-[28.8px] text-[#13191D]"
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                          Personnes Max : 3
                        </p>
                      </div>

                      <Link
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                        href="/room"
                        className="inline-flex justify-center items-center text-center border border-[#13191D] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold text-[20px] leading-[20px] text-[#13191D] px-10 py-2.5 me-2 mb-2"
                      >
                        Découvrir
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
                      </Link>
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

export default Rooms;
