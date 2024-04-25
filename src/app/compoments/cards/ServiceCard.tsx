import React from "react";
import Image from "next/image";
import img from "../../../../public/serv.png";

const ServiceCard = ({ id, title, description, offert }) => {
  return (
    <div className="inline-block px-3 md:w-[404px] w-[18rem]">
      <div className="h-auto md:w-[400px] max-w-lg overflow-hidden duration-300 ease-in-out">
        <div className="md:w-[404px] w-[18rem]">
          <Image
            className="md:h-[350px] md:mb-[28px] md:mt-4"
            src={img}
            alt=""
          />

          <div className="py-5 text-left">
            <h5 className="mb-[27px] font-normal text-[34px] leading-[37.4px] capitalize tracking-normal text-[#13191D]">
              {title}
            </h5>
            <p className="font-normal font-quicksand text-[18px] leading-[28.8px] pt-5">
              {description}
            </p>
            <p className="mb-[45px] font-normal font-quicksand text-[18px] leading-[28.8px] py-5">
              {offert}
            </p>

            <button
              data-modal-target="service"
              data-modal-toggle="service"
              type="button"
              className="py-1 pr-5 me-2 font-normal uppercase tracking-normal font-quicksand text-[18px] leading-[19.8px] text-[#AD936D] focus:outline-none"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
