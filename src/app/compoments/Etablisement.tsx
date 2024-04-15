import React from "react";

const Etablisement = () => {
  return (
    <section className="h-auto">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 tracking-tight font-normal text-[58px] leading-[63.8px] text-gray-700">
            Environs de l'établissement
          </h2>
        </div>

        <div className="p-4 mx-auto my-8 md:w-[964px] lg:mb-16">
          <div className="mb-4">
            <div className="flex flex-col m-auto p-auto">
              <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div
                  className="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 m-0"
                  id="default-tab"
                  data-tabs-toggle="#default-tab-content"
                  role="tablist"
                >
                <div className="inline-block px-3" role="presentation">
                  <button
                    className="text-gray-400 focus:text-[#13191D] inline-block p-4 hover:text-[#13191D] font-normal text-[28px] leading-[30.8px]"
                    id="cafe-tab"
                    data-tabs-target="#cafe"
                    type="button"
                    role="tab"
                    aria-controls="cafe"
                    aria-selected="false"
                  >
                    Restaurants et cafés
                  </button>
                </div>
                  <div className="inline-block px-3" role="presentation">
                    <button
                      className="text-gray-400 focus:text-[#13191D] inline-block p-4 hover:text-[#13191D] font-normal text-[28px] leading-[30.8px]"
                      id="cafe-tab"
                      data-tabs-target="#cafe"
                      type="button"
                      role="tab"
                      aria-controls="cafe"
                      aria-selected="false"
                    >
                      Restaurants et cafés
                    </button>
                  </div>
                  <div className="inline-block px-3" role="presentation">
                    <button
                      className="text-gray-400 focus:text-[#13191D] inline-block p-4 hover:text-[#13191D] font-normal text-[28px] leading-[30.8px] "
                      id="restocafe-tab"
                      data-tabs-target="#restocafe"
                      type="button"
                      role="tab"
                      aria-controls="restocafe"
                      aria-selected="false"
                    >
                      Restaurants et cafés
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="default-tab-content" className="p-4 mx-auto md:w-[693px]">
            <div
              className="hidden p-4"
              id="resto"
              role="tabpanel"
              aria-labelledby="resto-tab"
            >
              <div className="flex md:space-x-72">
                <p
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  className="font-normal text-[16px] leading-[22.4px] text-gray-500 dark:text-gray-400"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="font-normal text-[16px] leading-[22.4px] text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  10 km
                </p>
              </div>
              <div className="flex md:space-x-72 py-4">
                <p
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  className="font-normal text-[16px] leading-[22.4px] text-gray-500 dark:text-gray-400"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="font-normal text-[16px] leading-[22.4px] text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  10 km
                </p>
              </div>
              <div className="flex md:space-x-72">
                <p
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  className="font-normal text-[16px] leading-[22.4px] text-gray-500 dark:text-gray-400"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="font-normal text-[16px] leading-[22.4px] text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  10 km
                </p>
              </div>
            </div>

            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="cafe"
              role="tabpanel"
              aria-labelledby="cafe-tab"
            >
              <div className="flex md:space-x-72">
                <p
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="text-sm text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  10 km
                </p>
              </div>
              <div className="flex md:space-x-72 py-4">
                <p
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="text-sm text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  10 km
                </p>
              </div>
              <div className="flex md:space-x-72">
                <p
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="text-sm text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  10 km
                </p>
              </div>
            </div>

            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="restocafe"
              role="tabpanel"
              aria-labelledby="restocafe-tab"
            >
              <div className="flex md:space-x-72">
                <p
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="text-sm text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  10 km
                </p>
              </div>
              <div className="flex md:space-x-72 py-4">
                <p
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="text-sm text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  10 km
                </p>
              </div>
              <div className="flex md:space-x-72">
                <p
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="text-sm text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  10 km
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Etablisement;
