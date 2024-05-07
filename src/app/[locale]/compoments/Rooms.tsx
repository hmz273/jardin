"use client";
import React from "react";
import RoomCard from "./cards/RoomCard";

import { roomsData } from "@/constants";

const Rooms = () => {
  return (
    <section className="md:mt-[249px] md:h-[998px] md:top-[1782px] md:left[0.5px]">
      <div className="py-8 px-4 mx-auto max-w-screen-3xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 tracking-normal font-normal text-[58px] leading-[63.8px] text-[#13191D]">
            Chambres Et Suites
          </h2>
        </div>

        {/* <!-- component --> */}
        <div className="flex flex-col bg-white m-auto p-auto w-full">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            {roomsData.map((room) => (
              <RoomCard
                key={room.id}
                id={room.id}
                title={room.title}
                surface={room.surface}
                maxPersons={room.maxPersons}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
