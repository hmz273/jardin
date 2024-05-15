import React from "react";
import ServiceCard from "./cards/ServiceCard";
import { serviceData } from "@/constants";

import { useTranslation } from "react-i18next";


const Services = () => {

  const { t } = useTranslation("common");

  return (
    <>
      <section className="md:mt-[92px]">
        <div className="py-8 px-4 mx-auto max-w-screen-3xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto md:mb-[41px] max-w-screen-sm">
            <h2 className="mb-4 tracking-normal capitalize font-normal text-[58px] leading-[63.8px]">
            {t("service.title")}
            </h2>
          </div>

          <div className="flex flex-col bg-white m-auto p-auto w-full pl-[37px]">
            <div className="flex overflow-x-scroll hide-scroll-bar pb-10">
              <div className="flex flex-nowrap lg:ml-20 frst md:ml-20 ml-10 m-0 gap-[44px]">
                {serviceData.map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    img={service.img}
                    title={service.title}
                    description={service.description}
                    offert={service.offert}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
