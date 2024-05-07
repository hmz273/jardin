import React from "react";
import Image from "next/image";
import img from "../../../../../public/image1.png";

const OffreCard = ({ id, title, description }) => {
  return (
    <div className="inline-block px-3 md:w-[28rem] md:h[735px] gap-5 w-[18rem]">
      <div className="h-auto max-w-lg overflow-hidden duration-300 ease-in-out">
        <div>
          <Image
            className="md:h-[490px] md:w-[413px] md:mb-3"
            src={img}
            alt=""
          />

          <div className="py-5 text-left">
            <h5 className="mb-[36px] font-normal text-[34px] leading-[37.4px] text-[#13191D] tracking-normal">
              {title}
            </h5>
            <p className="mb-3 font-normal line-clamp-2 text-[18px] font-quicksand leading-[28.8px] text-[#13191D]">
              {description}
            </p>

            <button
              type="button"
              className="py-1 pr-5 me-2 mt-[13px] uppercase font-normal font-quicksand text-[18px] leading-[19.8px] text-[#AD936D] focus:outline-none"
            >
              <p className=" tracking-widest">En savoir plus</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffreCard;
