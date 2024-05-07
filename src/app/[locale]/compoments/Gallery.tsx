import React from "react";
import Image from "next/image";
import img from "../../../../public/Link.png";
import img2 from "../../../../public/Link2.png";

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
        <div className="flex flex-col relative m-auto p-auto">
          <div className="flex overflow-x-scroll hide-scroll-bar pb-10">
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
            {/* <div className="absolute md:pt-20 z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 bg-red-600 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 bg-red-600 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 bg-red-600 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 bg-red-600 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 bg-red-600 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div> */}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
