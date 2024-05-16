import React, { useEffect, useState } from "react";

const Etablisement = () => {
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Simulating fetching social links
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second delay
  }, []);
  return (

    <>
    {loading ? (
        <div role="status" className="align-middle text-center">
        <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div> // Display loading indicator
      ) : (
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
                      className="text-gray-400 focus:text-[#13191D] capitalize inline-block p-4 font-normal text-[28px] leading-[30.8px]"
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
                      className="text-gray-400 focus:text-[#13191D] capitalize inline-block p-4 font-normal text-[28px] leading-[30.8px]"
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
                      className="text-gray-400 focus:text-[#13191D] capitalize inline-block p-4 font-normal text-[28px] leading-[30.8px]"
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
    </section>)}</>
  );
};

export default Etablisement;
