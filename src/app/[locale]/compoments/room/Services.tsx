import React from 'react'
import Image from "next/image";
import img from "../../../../../public/image.png";

const Services = () => {
  return (
    <section className="pb-32 md:pb-4 md:p-[50px] font-quicksand">
      <div className="py-8 px-4 mx-auto max-w-screen-3xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 tracking-tight font-normal leading-[63.8px] text-[58px] text-gray-700">
          Autres Chambres
          </h2>
        </div>

        <div className="flex flex-col bg-white m-auto p-auto w-full">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 m-0">
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto max-w-lg overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image className="md:h-[29rem] my-4" src={img} alt="" />

                    <div className="p-5 text-left">
                      <h5 className="mb-2 font-normal leading-[37.4px] text-[34px] tracking-tight text-gray-700">
                        Suite Junior
                      </h5>

                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto max-w-lg overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image className="md:h-[29rem] my-4" src={img} alt="" />

                    <div className="p-5 text-left">
                      <h5 className="mb-2 font-normal leading-[37.4px] text-[34px] tracking-tight text-gray-700">
                        Suite Junior
                      </h5>

                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto max-w-lg overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image className="md:h-[29rem] my-4" src={img} alt="" />

                    <div className="p-5 text-left">
                      <h5 className="mb-2 font-normal leading-[37.4px] text-[34px] tracking-tight text-gray-700">
                        Suite Junior
                      </h5>

                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto max-w-lg overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image className="md:h-[29rem] my-4" src={img} alt="" />

                    <div className="p-5 text-left">
                      <h5 className="mb-2 font-normal leading-[37.4px] text-[34px] tracking-tight text-gray-700">
                        Suite Junior
                      </h5>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services