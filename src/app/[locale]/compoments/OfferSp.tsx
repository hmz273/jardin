import React from "react";

const OfferSp = () => {
  return (
    <section className="bg-center mt-[180px] bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center pt-[108px] pb-[100px]">
        <h1 className="mb-[22px] tracking-normal font-normal text-[58px] leading-[63.8px] text-white">
          Offres Spéciales
        </h1>
        <p
          
          className="mb-[54px] font-normal text-[22px] font-quicksand leading-[24.2px] text-white sm:px-16 lg:px-48"
        >
          Consultez nos offres spéciales rien que pour vous
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            
            href="#"
            className="inline-flex uppercase justify-center font-quicksand items-center text-center text-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-normal text-[18px] leading-[19.8px] px-[35px] py-[15px]"
          >
            Decouvrir
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfferSp;
