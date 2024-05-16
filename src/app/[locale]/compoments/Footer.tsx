import React from "react";
import { reseausocial } from "@/constants"

const Footer = () => {
  return (
    <footer
      className="pb-32 md:pb-4 md:p-[50px] font-quicksand"
    >
      <div className="mx-auto w-full px-5">
        <div className="grid grid-cols-1 gap-8 pb-0 pt-[38px] pl-0 md:grid-cols-4">
          <div>
            <ul>
              <li className="mb-[5px] pb-6">
                <p className="font-normal tracking-normal text-[18px] leading-[28.8px] text-[#3C3A34] hover:underline">
                Km 13 Route De L’Ourika – Canal De Zaraba, 40000 Aït Hamid, Maroc
                </p>
              </li>
              <li>
                <p className="hover:underline uppercase font-normal tracking-normal text-[18px] leading-[19.8px] text-[#13191D]">
                  Visualiser notre établissement sur la carte
                </p>
              </li>
            </ul>
          </div>
          <div className="pl-[80px]">
            <ul className="pl-[34px] w-[16rem]">
              <li className="mb-4">
                <p className="hover:underline font-normal tracking-normal text-[18px] leading-[28.8px] text-[#13191D]">Politique de confidentialité</p>
              </li>
              <li className="mb-4">
                <p className="hover:underline font-normal tracking-normal text-[18px] leading-[28.8px] text-[#13191D]">Plan de site</p>
              </li>
            </ul>
          </div>
          <div className="pl-[111px]">
            <ul>
              <li className="mb-4">
                <a href="#rooms" className="hover:underline font-normal text-[18px] leading-[28.8px] text-[#13191D]">
                  Nos chambres
                </a>
              </li>
              <li className="mb-4">
                <a href="#services" className="hover:underline font-normal text-[18px] leading-[28.8px] text-[#13191D]">
                  Nos services
                </a>
              </li>
              <li className="mb-4">
                <a href="#offers" className="hover:underline font-normal text-[18px] leading-[28.8px] text-[#13191D]">
                  Offres
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline font-normal text-[18px] leading-[28.8px] text-[#13191D]">
                  Evenement
                </a>
              </li>
              <li className="mb-4">
                <a href="#gellery" className="hover:underline font-normal text-[18px] leading-[28.8px] text-[#13191D]">
                  Galerie
                </a>
              </li>
              <li className="mb-4">
                <a href="#contact" className="hover:underline font-normal text-[18px] leading-[28.8px] text-[#13191D]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="pl-[113px]">
            <ul className="text-gray-500 grid grid-cols-1 md:grid-cols-1 font-medium">

            {reseausocial.map((link, index) => (
          <li key={index} className="mb-4 space-x-2 flex">
            <a href={link.ehrsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-normal text-[18px] leading-[28.8px] text-[#13191D]">{link.rsTitre}</a>
          </li>
        ))}

              {/* <li className="mb-4 space-x-2 flex">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8333 11.4998C21.8333 5.51984 16.98 0.666504 11 0.666504C5.02 0.666504 0.166664 5.51984 0.166664 11.4998C0.166664 16.7432 3.89333 21.109 8.83333 22.1165V14.7498H6.66666V11.4998H8.83333V8.7915C8.83333 6.70067 10.5342 4.99984 12.625 4.99984H15.3333V8.24984H13.1667C12.5708 8.24984 12.0833 8.73734 12.0833 9.33317V11.4998H15.3333V14.7498H12.0833V22.279C17.5542 21.7373 21.8333 17.1223 21.8333 11.4998Z"
                    fill="#3D505A"
                  />
                </svg>

                <a href="#" className="hover:underline font-normal text-[18px] leading-[28.8px] text-[#13191D]">
                  Facebook
                </a>
              </li>
              <li className="mb-4 space-x-2 flex">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.55 0.666504H6.45C2.98333 0.666504 0.166664 3.48317 0.166664 6.94984V16.0498C0.166664 17.7163 0.828655 19.3145 2.00701 20.4928C3.18536 21.6712 4.78355 22.3332 6.45 22.3332H15.55C19.0167 22.3332 21.8333 19.5165 21.8333 16.0498V6.94984C21.8333 5.28339 21.1713 3.6852 19.993 2.50685C18.8146 1.3285 17.2164 0.666504 15.55 0.666504ZM15.7667 2.83317C16.801 2.83317 17.793 3.24406 18.5244 3.97545C19.2558 4.70685 19.6667 5.69883 19.6667 6.73317V16.2665C19.6667 18.4223 17.9225 20.1665 15.7667 20.1665H6.23333C5.19899 20.1665 4.207 19.7556 3.47561 19.0242C2.74422 18.2928 2.33333 17.3008 2.33333 16.2665V6.73317C2.33333 4.57734 4.0775 2.83317 6.23333 2.83317H15.7667ZM5.3125 4.45817C4.95335 4.45817 4.60891 4.60084 4.35496 4.8548C4.101 5.10875 3.95833 5.45319 3.95833 5.81234C3.95833 6.17148 4.101 6.51592 4.35496 6.76988C4.60891 7.02383 4.95335 7.1665 5.3125 7.1665C5.67164 7.1665 6.01608 7.02383 6.27004 6.76988C6.52399 6.51592 6.66666 6.17148 6.66666 5.81234C6.66666 5.45319 6.52399 5.10875 6.27004 4.8548C6.01608 4.60084 5.67164 4.45817 5.3125 4.45817ZM11 6.08317C9.56341 6.08317 8.18566 6.65385 7.16983 7.66967C6.15401 8.6855 5.58333 10.0632 5.58333 11.4998C5.58333 12.9364 6.15401 14.3142 7.16983 15.33C8.18566 16.3458 9.56341 16.9165 11 16.9165C12.4366 16.9165 13.8143 16.3458 14.8302 15.33C15.846 14.3142 16.4167 12.9364 16.4167 11.4998C16.4167 10.0632 15.846 8.6855 14.8302 7.66967C13.8143 6.65385 12.4366 6.08317 11 6.08317ZM11 8.24984C11.8619 8.24984 12.6886 8.59225 13.2981 9.20174C13.9076 9.81123 14.25 10.6379 14.25 11.4998C14.25 12.3618 13.9076 13.1884 13.2981 13.7979C12.6886 14.4074 11.8619 14.7498 11 14.7498C10.138 14.7498 9.31139 14.4074 8.7019 13.7979C8.09241 13.1884 7.75 12.3618 7.75 11.4998C7.75 10.6379 8.09241 9.81123 8.7019 9.20174C9.31139 8.59225 10.138 8.24984 11 8.24984Z"
                    fill="#3D505A"
                  />
                </svg>
                <a href="#" className="hover:underline font-normal text-[18px] leading-[28.8px] text-[#13191D]">
                  Instagram
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <p className="text-[#A8A8A8] font-normal text-[18px] leading-[28.8px] py-4">
          Hôtel de charme en Provence , Cours de cuisine en Provence ,
          Restaurant Gastronomique Var , Organisation de séminaire en Provence ,
          Restaurant gastronomique en Provence , Hôtel Spa en Provence , Hôtel
          proche du circuit du Castellet , Séminaire Var , Hôtel Cadière d'Azur
          , Hôtel 4 étoiles Provence , Hôtel de charme Var , Lieu mariage Var ,
          Séminaire PACA ,
        </p>
        <hr className="h-[2px] w-[90rem] md:-ml-[70px] mt-8 -mb-[30px] bg-gray-100 border-0" />

        <div className="px-0 pb-6 md:pb-0 pt-[30px] md:flex md:items-center md:justify-between ">
          
          <p className="mt-2 inline-flex items-center justify-center  mr-3 font-normal tracking-widest text-[18px] leading-[28.8px] text-[#3C3A34] rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            © 2024 - Powred By{" "}
            <a href="#" className="pl-2">
              <svg
                width="78"
                height="23"
                viewBox="0 0 78 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_74_276)">
                  <path
                    d="M32.8338 0.948242C35.1347 0.948242 36.2852 2.23933 36.2852 3.83117C36.2852 4.97947 35.6429 6.06095 34.1963 6.47714L36.3632 10.1013H33.7816L31.8267 6.64726H31.278V10.1013H28.9895V0.948242H32.8307H32.8338ZM32.6997 2.80133H31.2811V5.07061H32.6997C33.5571 5.07061 33.9562 4.63923 33.9562 3.9223C33.9562 3.24486 33.554 2.80133 32.6997 2.80133Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M43.5653 8.48516H40.0577L39.4965 10.1013H37.1021L40.5005 0.948242H43.1506L46.5491 10.1013H44.1265L43.5653 8.48516ZM41.8131 3.41194L40.6626 6.76269H42.9791L41.8162 3.41194H41.8131Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M47.0729 0.948242H54.3405V2.7345H51.8525V10.1013H49.564V2.7345H47.076V0.948242H47.0729Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M61.2434 2.7345H57.7764V4.58759H60.8412V6.31005H57.7764V8.31808H61.2434V10.1043H55.4879V0.948242H61.2434V2.7345Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M28.9927 12.8203H31.6958L34.3335 19.1573L36.9431 12.8203H39.6338V21.9734H37.3453V16.484L35.2439 21.9734H33.3982L31.2843 16.4718V21.9734H28.9958V12.8203H28.9927Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M47.126 20.3572H43.6184L43.0572 21.9734H40.6627L44.0611 12.8203H46.7113L50.1097 21.9734H47.6872L47.126 20.3572ZM45.3737 15.284L44.2233 18.6348H46.5398L45.3769 15.284H45.3737Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M50.6304 12.8203H57.898V14.6066H55.41V21.9734H53.1215V14.6066H50.6335V12.8203H50.6304Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M63.3822 12.7168C65.6177 12.7168 67.3044 13.9411 67.8376 15.9248H65.3215C64.9349 15.141 64.224 14.7522 63.3541 14.7522C61.948 14.7522 60.9846 15.7698 60.9846 17.386C60.9846 19.0021 61.948 20.0198 63.3541 20.0198C64.224 20.0198 64.9317 19.6279 65.3215 18.8472H67.8376C67.3013 20.8279 65.6146 22.043 63.3822 22.043C60.6104 22.043 58.6587 20.1261 58.6587 17.389C58.6587 14.6519 60.6136 12.7198 63.3822 12.7198V12.7168Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M75.0928 18.2064H71.5323V21.9734H69.2438V12.8203H71.5323V16.405H75.0928V12.8203H77.3813V21.9734H75.0928V18.2064Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M8.5304 0.987793H15.9134C16.9454 0.987793 17.9057 1.50423 18.4544 2.35786L21.0921 6.45593C21.7032 7.40678 21.7032 8.6128 21.0921 9.56062L17.5721 15.0287L8.5304 0.987793Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M8.53035 15.0317L4.01263 22.0492L0.473904 16.6631C-0.152779 15.7092 -0.159014 14.4849 0.46455 13.525L4.11864 7.88672L8.53035 15.0287V15.0317Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M13.0637 8.0293L17.5721 15.0316L13.0637 22.046L8.5304 15.0316L13.0637 8.0293Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M17.5657 15.0317L22.0835 22.0522L13.0574 22.0461L17.5657 15.0317Z"
                    fill="#A8A8A8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_74_276">
                    <rect
                      width="77.3812"
                      height="21.104"
                      fill="white"
                      transform="translate(0 0.948242)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="#"
              className="text-[#3C3A34] underline underline-offset-8 pb-4 md:pt-[28px] inline-flex items-center  font-normal tracking-wider text-[18px] leading-[28.8px] rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Technology Providers
              <svg
                className="ml-4"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_89_1699)">
                  <path
                    d="M5.64259 2.84473V4.00697H10.5033L3.57007 11.3584L4.41452 12.1552L11.2677 4.88859V10.0066H12.4299V2.84473H5.64259Z"
                    fill="#13191D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_89_1699">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a
              href="#"
              className="text-[#3C3A34] underline underline-offset-8  inline-flex items-center tracking-normal  font-normal text-[18px] leading-[28.8px] rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Politique de confidentialité
              <svg
                className="ml-4"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_89_1699)">
                  <path
                    d="M5.64259 2.84473V4.00697H10.5033L3.57007 11.3584L4.41452 12.1552L11.2677 4.88859V10.0066H12.4299V2.84473H5.64259Z"
                    fill="#13191D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_89_1699">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
