import React from "react";
import Image from "next/image";
import captcha from "../../../../public/captcha.png";

const Contact = () => {
  return (
    <section className="bg-white">
      <div className="grid md:w-[1073px] md:top-[9290.87px] md:left-[184px] max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto md:w-[445px] place-self-center lg:col-span-6">
          <h1 className="max-w-2xl capitalize mb-4 font-normal text-[42px] leading-[46.2px] tracking-wide text-[#3D505A]">
            Demander avant de réserver
          </h1>

          <h1 className="py-4 w-[21rem] capitalize mb-4 font-normal text-[28px] leading-[30.8px] tracking-normal text-[#3D505A]">
            Les Jardins De Zyriab Resort & Spa
          </h1>
          <p
            
            className="max-w-2xl mb-6 text-gray-500 lg:mb-8 font-quicksand font-normal text-[18px] leading-[28.8px] dark:text-gray-400"
          >
            Km 13 Route De L’Ourika – Canal De Zaraba, 40000 Aït Hamid, Maroc
          </p>
          <div className="py-4 flex space-x-5">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9998 0.20459H9.99984C4.6665 0.20459 0.333172 4.53792 0.333172 9.87126V23.8713C0.333172 26.435 1.35162 28.8938 3.16447 30.7066C4.97732 32.5195 7.43608 33.5379 9.99984 33.5379H23.9998C29.3332 33.5379 33.6665 29.2046 33.6665 23.8713V9.87126C33.6665 7.3075 32.6481 4.84874 30.8352 3.03589C29.0224 1.22304 26.5636 0.20459 23.9998 0.20459ZM24.3332 3.53792C25.9245 3.53792 27.4506 4.17006 28.5758 5.29528C29.701 6.4205 30.3332 7.94662 30.3332 9.53792V24.2046C30.3332 27.5213 27.6498 30.2046 24.3332 30.2046H9.66651C8.07521 30.2046 6.54908 29.5724 5.42386 28.4472C4.29865 27.322 3.6665 25.7959 3.6665 24.2046V9.53792C3.6665 6.22126 6.34984 3.53792 9.66651 3.53792H24.3332ZM8.24984 6.03792C7.6973 6.03792 7.1674 6.25742 6.7767 6.64812C6.386 7.03882 6.1665 7.56872 6.1665 8.12126C6.1665 8.67379 6.386 9.20369 6.7767 9.5944C7.1674 9.9851 7.6973 10.2046 8.24984 10.2046C8.80237 10.2046 9.33228 9.9851 9.72298 9.5944C10.1137 9.20369 10.3332 8.67379 10.3332 8.12126C10.3332 7.56872 10.1137 7.03882 9.72298 6.64812C9.33228 6.25742 8.80237 6.03792 8.24984 6.03792ZM16.9998 8.53792C14.7897 8.53792 12.6701 9.4159 11.1073 10.9787C9.54448 12.5415 8.6665 14.6611 8.6665 16.8713C8.6665 19.0814 9.54448 21.201 11.1073 22.7638C12.6701 24.3266 14.7897 25.2046 16.9998 25.2046C19.21 25.2046 21.3296 24.3266 22.8924 22.7638C24.4552 21.201 25.3332 19.0814 25.3332 16.8713C25.3332 14.6611 24.4552 12.5415 22.8924 10.9787C21.3296 9.4159 19.21 8.53792 16.9998 8.53792ZM16.9998 11.8713C18.3259 11.8713 19.5977 12.398 20.5354 13.3357C21.4731 14.2734 21.9998 15.5452 21.9998 16.8713C21.9998 18.1973 21.4731 19.4691 20.5354 20.4068C19.5977 21.3445 18.3259 21.8713 16.9998 21.8713C15.6738 21.8713 14.402 21.3445 13.4643 20.4068C12.5266 19.4691 11.9998 18.1973 11.9998 16.8713C11.9998 15.5452 12.5266 14.2734 13.4643 13.3357C14.402 12.398 15.6738 11.8713 16.9998 11.8713Z"
                  fill="#3D505A"
                />
              </svg>

              <span className="sr-only">IN</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.6668 16.8713C33.6668 7.67126 26.2002 0.20459 17.0002 0.20459C7.80016 0.20459 0.333496 7.67126 0.333496 16.8713C0.333496 24.9379 6.06683 31.6546 13.6668 33.2046V21.8713H10.3335V16.8713H13.6668V12.7046C13.6668 9.48792 16.2835 6.87126 19.5002 6.87126H23.6668V11.8713H20.3335C19.4168 11.8713 18.6668 12.6213 18.6668 13.5379V16.8713H23.6668V21.8713H18.6668V33.4546C27.0835 32.6213 33.6668 25.5213 33.6668 16.8713Z"
                  fill="#3D505A"
                />
              </svg>

              <span className="text-gray-500 sr-only">FB</span>
            </a>
          </div>
          <div className="py-4 opacity-60 text-[#3C3A34] font-quicksand font-normal text-[18px] leading-[28.8px]">
            <span>
              Longitude : -8.00317526
            </span>
          </div>
          <div className=" opacity-60 text-[#3C3A34] font-quicksand font-normal text-[18px] leading-[28.8px] mb-4">
            <span>
              {" "}
              Latitude : 31.62674178
            </span>
          </div>
          <p
            
            className="text-gray-500 uppercase pt-4 font-normal font-quicksand text-[18px] leading-[19.8px]"
          >
            Visualiser notre établissement sur la carte
          </p>
        </div>
        <div className="lg:mt-0 md:w-[516px] lg:col-span-6 lg:flex">
          <form className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full font-normal text-[18px] leading-[25.2px] text-gray-900 bg-transparent border-0 border-b-2 border-[#3C3A34] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute font-normal text-[18px] leading-[25.2px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Votre Nom *
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full font-normal text-[18px] leading-[25.2px] text-gray-900 bg-transparent border-0 border-b-2 border-[#3C3A34] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute font-normal text-[18px] leading-[25.2px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Votre E-mail *
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full font-normal text-[18px] leading-[25.2px] text-gray-900 bg-transparent border-0 border-b-2 border-[#3C3A34] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute font-normal text-[18px] leading-[25.2px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Votre Téléphone *
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                // type="text"
                rows={3}
                name="sujet"
                id="floating_sujet"
                className="block py-2.5 px-0 w-full font-normal text-[18px] leading-[25.2px] text-gray-900 bg-transparent border-0 border-b-2 border-[#3C3A34] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_sujet"
                className="peer-focus:font-medium absolute font-normal text-[18px] leading-[25.2px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Sujet du message *
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="text"
                id="floating_text"
                className="block py-2.5 px-0 w-full font-normal text-[18px] leading-[25.2px] text-gray-900 bg-transparent border-0 border-b-2 border-[#3C3A34] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_text"
                className="peer-focus:font-medium absolute font-normal text-[18px] leading-[25.2px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                écrivez votre message ici *
              </label>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full font-normal text-[18px] leading-[25.2px] text-gray-900 bg-transparent border-0 border-b-2 border-[#3C3A34] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute font-normal text-[18px] leading-[25.2px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Enter le captcha code
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Image src={captcha} alt="" />
              </div>
            </div>

            <button
              
              type="submit"
              className="text-gray-900 uppercase bg-white border font-quicksand border-[#3C3A34] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-normal text-[18px] leading-[19.8px] px-6 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
