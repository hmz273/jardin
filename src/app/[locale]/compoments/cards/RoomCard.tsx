import React from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../../../../../public/image.png";

import { useTranslation } from "react-i18next";


const RoomCard = ({ id, title, surface, maxPersons, img }) => {


  const { t } = useTranslation("common");
  
  

  return (
    <div className="inline-block px-3 md:w-[856px] w-[18rem]">
      <div className="h-auto overflow-hidden duration-300 ease-in-out">
        <div className="md:w-[856px] md:h-[715px] w-[18rem]">
          <img
            className="md:h-[488px] md:w-[856px] h-auto mb-4"
            src={`https://pics.uncubus.tech/images/11242/upload/856X488/${img}`} // Assuming img is imported or defined elsewhere
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 font-normal text-[42px] leading-[46.2px] tracking-tight text-[#13191D]">
             {t(`room.rooms.${id}-title`)}
            </h5>
            <div className="md:flex space-x-5 text-center mx-auto gap-[60px] max-w-md ltr:pl-24 rtl:pr-32 md:py-6 py-2 md:mb-6">
              <p className="mb-3 font-normal text-[18px] font-quicksand leading-[28.8px] text-[#13191D]">
                {t("room.surface")} : {surface}
              </p> 
              <p className="mb-3 font-normal text-[18px] font-quicksand leading-[28.8px] text-[#13191D]">
              {t("room.guests")} : {maxPersons}
              </p>
            </div>
            <Link
              href="/room"
              className="w-[231px] uppercase md:px-10 md:py-4 inline-flex justify-center font-quicksand items-center text-center border border-[#13191D] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold text-[20px] leading-[20px] text-[#13191D]  me-2 mb-2"
            >
              {t("room.button")}
              {/* SVG code */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
