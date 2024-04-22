import React from "react";
import Image from "next/image";
import img from "../../../public/Link.png";
import img2 from "../../../public/Link2.png";

const Gallery = () => {
  return (
    <section id="gellery" className="bg-[#3D505A] md:-mt-[12px]">
      <div className="py-8 px-4 mx-auto max-w-screen-3xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm md:mb-[4.8rem]">
          <h2 className="mb-4 tracking-normal font-normal text-[58px] leading-[63.8px] text-white">
            Galerie Photos
          </h2>
        </div>
        {/* <!-- component --> */}
        <div className="flex flex-col m-auto p-auto">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap frstg lg:ml-40 md:ml-20 ml-10 m-0">
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image src={img} alt="" />
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image src={img2} alt="" />
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image src={img} alt="" />
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image src={img2} alt="" />
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image src={img} alt="" />
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

export default Gallery;
