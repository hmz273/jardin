import React from "react";

const Etablisement = () => {
  
  return (
    <section className="h-auto mt-[90px]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 tracking-normal capitalize font-normal text-[58px] leading-[63.8px] text-gray-700">
            Environs de l'établissement
          </h2>
        </div>

        <div className="p-4 mx-auto mb-8 mt-[47px] md:w-[964px] lg:mb-16">
          <div className="md:-mb-[30px]">
            <div className="flex flex-col m-auto p-auto">
              <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div
                  className="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 m-0"
                  data-tabs-active-classes="text-[#13191D] hover:text-[#13191D]"
                  data-tabs-inactive-classes="text-gray-500 hover:text-gray-600"
                  id="default-tab"
                  data-tabs-toggle="#default-tab-content"
                  role="tablist"
                >
                <div className="inline-block pr-3 md:pl-[24px]" role="presentation">
                    <button
                      className="text-gray-400 capitalize inline-block p-4 font-normal text-[28px] leading-[30.8px]"
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
                  <div className="inline-block pr-3 md:pl-[24px]" role="presentation">
                    <button
                      className="text-gray-400 capitalize inline-block p-4 font-normal text-[28px] leading-[30.8px]"
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
                  <div className="inline-block pr-3 md:pl-[24px]" role="presentation">
                    <button
                      className="text-gray-400 capitalize inline-block p-4 font-normal text-[28px] leading-[30.8px]"
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
                </div>
              </div>
            </div>
          </div>
          <div id="default-tab-content" className="p-4 mx-auto md:w-[744px]">
            <div
              className="hidden p-4"
              id="resto"
              role="tabpanel"
              aria-labelledby="resto-tab"
            >
              <div className="flex justify-between">
                <p
                  
                  className="tracking-normal capitalize font-normal text-[16px] leading-[22.4px] order-first text-gray-500 dark:text-gray-400 font-quicksand"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="-mr-[8px] font-normal text-[16px] leading-[22.4px] order-last text-gray-500 dark:text-gray-400 font-quicksand"
                  
                >
                  10 km
                </p>
              </div>
              <div className="flex justify-between py-3">
                <p
                  
                  className="tracking-normal capitalize font-normal text-[16px] leading-[22.4px] order-first text-gray-500 dark:text-gray-400 font-quicksand"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="-mr-[8px] font-normal text-[16px] leading-[22.4px] order-last text-gray-500 dark:text-gray-400 font-quicksand"
                  
                >
                  10 km
                </p>
              </div>
              <div className="flex justify-between">
                <p
                  
                  className="tracking-normal capitalize font-normal text-[16px] leading-[22.4px] order-first text-gray-500 dark:text-gray-400 font-quicksand"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="-mr-[8px] font-normal text-[16px] leading-[22.4px] order-last text-gray-500 dark:text-gray-400 font-quicksand"
                  
                >
                  10 km
                </p>
              </div>
            </div>

            <div
              className="hidden p-4 rounded-lg"
              id="cafe"
              role="tabpanel"
              aria-labelledby="cafe-tab"
            >
              <div className="flex justify-between">
                <p
                  
                  className="tracking-normal capitalize font-normal text-[16px] leading-[22.4px] order-first text-gray-500 dark:text-gray-400 font-quicksand"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="-mr-[8px] font-normal text-[16px] leading-[22.4px] order-last text-gray-500 dark:text-gray-400 font-quicksand"
                  
                >
                  10 km
                </p>
              </div>
              <div className="flex justify-between py-3">
                <p
                  
                  className="tracking-normal capitalize font-normal text-[16px] leading-[22.4px] order-first text-gray-500 dark:text-gray-400 font-quicksand"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="-mr-[8px] font-normal text-[16px] leading-[22.4px] order-last text-gray-500 dark:text-gray-400 font-quicksand"
                  
                >
                  10 km
                </p>
              </div>
              <div className="flex justify-between">
                <p
                  
                  className="tracking-normal capitalize font-normal text-[16px] leading-[22.4px] order-first text-gray-500 dark:text-gray-400 font-quicksand"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="-mr-[8px] font-normal text-[16px] leading-[22.4px] order-last text-gray-500 dark:text-gray-400 font-quicksand"
                  
                >
                  10 km
                </p>
              </div>
            </div>

            <div
              className="hidden p-4 rounded-lg"
              id="restocafe"
              role="tabpanel"
              aria-labelledby="restocafe-tab"
            >
              <div className="flex justify-between">
                <p
                  
                  className="tracking-normal capitalize font-normal text-[16px] leading-[22.4px] order-first text-gray-500 dark:text-gray-400 font-quicksand"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="-mr-[8px] font-normal text-[16px] leading-[22.4px] order-last text-gray-500 dark:text-gray-400 font-quicksand"
                  
                >
                  10 km
                </p>
              </div>
              <div className="flex justify-between py-3">
                <p
                  
                  className="tracking-normal capitalize font-normal text-[16px] leading-[22.4px] order-first text-gray-500 dark:text-gray-400 font-quicksand"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="-mr-[8px] font-normal text-[16px] leading-[22.4px] order-last text-gray-500 dark:text-gray-400 font-quicksand"
                  
                >
                  10 km
                </p>
              </div>
              <div className="flex justify-between">
                <p
                  
                  className="tracking-normal capitalize font-normal text-[16px] leading-[22.4px] order-first text-gray-500 dark:text-gray-400 font-quicksand"
                >
                  Restaurant Le Bladna (Restaurant)
                </p>
                <p
                  className="-mr-[8px] font-normal text-[16px] leading-[22.4px] order-last text-gray-500 dark:text-gray-400 font-quicksand"
                  
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
