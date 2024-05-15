import React from "react";
import Image from "next/image";
// import img from "../../../../../public/serv.png";

import ServicesModel from "../../Models/ServicesModel";
import { useTranslation } from "react-i18next";


const ServiceCard = ({ id, title, description, offert, img }) => {

  const { t } = useTranslation("common");


  return (
    <><div className="inline-block px-3 md:w-[404px] w-[18rem]">
      <div className="h-auto md:w-[400px] max-w-lg overflow-hidden duration-300 ease-in-out">
        <div className="md:w-[404px] w-[18rem]">
          <img
            className="md:h-[350px] md:mb-[28px] md:mt-4"
            src={`https://pics.uncubus.tech/images/11242/upload/${img}`}
            alt="" />

          <div className="py-5 ltr:text-left rtl:text-right">
            <h5 className="mb-[27px] font-normal text-[34px] leading-[37.4px] capitalize tracking-normal text-[#13191D]">
              {t(`service.services.${id}-title`)}
            </h5>
            <p className="font-normal line-clamp-2 font-quicksand text-[18px] leading-[28.8px] pt-5">
              {t(`service.services.${id}-description`)}
            </p>
            <p className="mb-[45px] font-normal font-quicksand text-[18px] leading-[28.8px] py-5">
              {offert}
            </p>

            <button
              data-modal-target="service"
              data-modal-toggle="service"
              type="button"
              className="py-1 ltr:pr-5 ltr:me-2 font-normal uppercase tracking-normal font-quicksand text-[18px] leading-[19.8px] text-[#AD936D] focus:outline-none"
            >
              {t("service.button")}
            </button>
          </div>
        </div>
      </div>
    </div><ServicesModel idm={id} titleModel={title} descriptionModel={description} offertModel={offert}/></>
  );
};

export default ServiceCard;
