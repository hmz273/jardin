import React from 'react'
import Image from "next/image";
import img from "../../../../../public/image.png";

const Gallery = () => {
  return (
    <section className="pb-32 md:pb-4 md:p-[50px] font-quicksand">
      <div className="py-8 px-4 mx-auto max-w-screen-3xl text-center lg:py-16 lg:px-6">
        
        {/* <!-- component --> */}
        <div className="flex flex-col m-auto p-auto">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 m-0">
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image className="md:h-[23rem]" src={img} alt="" />
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image className="md:h-[23rem]" src={img} alt="" />
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image className="md:h-[23rem]" src={img} alt="" />
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image className="md:h-[23rem]" src={img} alt="" />
                  </div>
                </div>
              </div>
              <div className="inline-block px-3 md:w-[30rem] w-[18rem]">
                <div className="h-auto overflow-hidden duration-300 ease-in-out">
                  <div className="md:w-[30rem] w-[18rem]">
                    <Image className="md:h-[23rem]" src={img} alt="" />
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

export default Gallery