import React from "react";

const OfferSp = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 tracking-tight font-normal text-[58px] leading-[63.8px] text-white">
          Offres Spéciales
        </h1>
        <p
          style={{ fontFamily: "Quicksand, sans-serif" }}
          className="mb-8 font-normal text-[22px] leading-[24.2px] text-white sm:px-16 lg:px-48"
        >
          Consultez nos offres spéciales rien que pour vous
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            style={{ fontFamily: "Quicksand, sans-serif" }}
            href="#"
            className="inline-flex justify-center items-center text-center text-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-normal text-[18px] leading-[19.8px] px-5 py-2.5 me-2 mb-2"
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
