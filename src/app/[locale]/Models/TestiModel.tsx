import React from "react";

const TestiModel = () => {
  return (
    <>
      <div
        id="testi"
        tabIndex={-1}
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-7xl">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white shadow overflow-y-auto hide-scroll-bar-eq md:h-[51rem]">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5">
              <button
                type="button"
                className="mr-[16px] pb-[4px] w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="testi"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.13574 0.0148926C0.870526 0.0148926 0.616172 0.120249 0.428636 0.307786C0.2411 0.495322 0.135742 0.749676 0.135742 1.01489C0.135742 1.28011 0.2411 1.53446 0.428636 1.722L6.20689 7.50025L0.429031 13.2781C0.241494 13.4656 0.136137 13.72 0.136137 13.9852C0.136137 14.2504 0.241494 14.5048 0.429031 14.6923C0.616567 14.8799 0.870921 14.9852 1.13614 14.9852C1.40135 14.9852 1.65571 14.8799 1.84324 14.6923L7.6211 8.91446L13.1566 14.4499C13.3441 14.6375 13.5984 14.7428 13.8637 14.7428C14.1289 14.7428 14.3832 14.6375 14.5708 14.4499C14.7583 14.2624 14.8637 14.008 14.8637 13.7428C14.8637 13.4776 14.7583 13.2232 14.5708 13.0357L9.03531 7.50025L14.5712 1.9644C14.7587 1.77686 14.8641 1.52251 14.8641 1.25729C14.8641 0.992075 14.7587 0.737722 14.5712 0.550186C14.3836 0.362649 14.1293 0.257292 13.8641 0.257292C13.5988 0.257292 13.3445 0.362649 13.157 0.550186L7.6211 6.08604L1.84285 0.307786C1.65531 0.120249 1.40096 0.0148926 1.13574 0.0148926Z"
                    fill="#272727"
                  />
                </svg>

                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="px-[100px] mx-[35px] pb-[100px] pt-[58px] space-y-4">
              <div className="flex items-center justify-between ">
                <h3 className="tracking-[0px] md:mb-[50px] md:mt-[17px] font-normal text-[36px] leading-[30.8px] text-[#3C3A34]">
                  Tessatess - Tripadvisor
                </h3>
                <p className="mr-[30px] mb-[17px] mt-[12px] font-normal tracking-normal text-[30px] leading-[3rem] text-[#3C3A34]">
                  5/5
                </p>
              </div>
              <p className="text-center tracking-widest font-normal text-[22px] leading-[39.6px] font-quicksand text-[#3C3A34]">
                L’emplacement de cet hôtel est très appréciable ! On n’est pas
                très loin de la place et il y a de nombreux restaurants à côté !
                En ce qui concerne la piscine, elle est très propre peut-être un
                peu petite, nous avons eu de la chance qu’il n’y ai pas grand
                monde lors de notre séjour du coup nous n’avons pas eu de
                problème ! En ce qui concerne l’alimentation dans l’hôtel elle
                est sans grand intérêt! Vous pouvez avoir un déjeuner le matin
                pour 50 dirhams qui est vraiment pas top ! Les viennoiseries
                sont très rassis! Nous avons pu trouver un déjeuner digne de ce
                nom au restaurant à proximité pour 55 dirhams ! Je vous
                conseille donc d’éviter de prendre la formule avec le petit
                déjeuner! En ce qui concerne le personnel, ils sont très
                accueillant ! Nous avons pu faire du change à l’hôtel ce qui
                nous a bien rendu service ! De plus lors de notre retour nous
                avons pu faire appel à eux pour qu’il nous appelle un taxi afin
                de pouvoir aller à l’aéroport! Un grand merci aux personnels!
                Pour finir, un hôtel propre en généralité!

                L’emplacement de cet hôtel est très appréciable ! On n’est pas
                très loin de la place et il y a de nombreux restaurants à côté !
                En ce qui concerne la piscine, elle est très propre peut-être un
                peu petite, nous avons eu de la chance qu’il n’y ai pas grand
                monde lors de notre séjour du coup nous n’avons pas eu de
                problème ! En ce qui concerne l’alimentation dans l’hôtel elle
                est sans grand intérêt! Vous pouvez avoir un déjeuner le matin
                pour 50 dirhams qui est vraiment pas top ! Les viennoiseries
                sont très rassis! Nous avons pu trouver un déjeuner digne de ce
                nom au restaurant à proximité pour 55 dirhams ! Je vous
                conseille donc d’éviter de prendre la formule avec le petit
                déjeuner! En ce qui concerne le personnel, ils sont très
                accueillant ! Nous avons pu faire du change à l’hôtel ce qui
                nous a bien rendu service ! De plus lors de notre retour nous
                avons pu faire appel à eux pour qu’il nous appelle un taxi afin
                de pouvoir aller à l’aéroport! Un grand merci aux personnels!
                Pour finir, un hôtel propre en généralité!

                L’emplacement de cet hôtel est très appréciable ! On n’est pas
                très loin de la place et il y a de nombreux restaurants à côté !
                En ce qui concerne la piscine, elle est très propre peut-être un
                peu petite, nous avons eu de la chance qu’il n’y ai pas grand
                monde lors de notre séjour du coup nous n’avons pas eu de
                problème ! En ce qui concerne l’alimentation dans l’hôtel elle
                est sans grand intérêt! Vous pouvez avoir un déjeuner le matin
                pour 50 dirhams qui est vraiment pas top ! Les viennoiseries
                sont très rassis! Nous avons pu trouver un déjeuner digne de ce
                nom au restaurant à proximité pour 55 dirhams ! Je vous
                conseille donc d’éviter de prendre la formule avec le petit
                déjeuner! En ce qui concerne le personnel, ils sont très
                accueillant ! Nous avons pu faire du change à l’hôtel ce qui
                nous a bien rendu service ! De plus lors de notre retour nous
                avons pu faire appel à eux pour qu’il nous appelle un taxi afin
                de pouvoir aller à l’aéroport! Un grand merci aux personnels!
                Pour finir, un hôtel propre en généralité!

                L’emplacement de cet hôtel est très appréciable ! On n’est pas
                très loin de la place et il y a de nombreux restaurants à côté !
                En ce qui concerne la piscine, elle est très propre peut-être un
                peu petite, nous avons eu de la chance qu’il n’y ai pas grand
                monde lors de notre séjour du coup nous n’avons pas eu de
                problème ! En ce qui concerne l’alimentation dans l’hôtel elle
                est sans grand intérêt! Vous pouvez avoir un déjeuner le matin
                pour 50 dirhams qui est vraiment pas top ! Les viennoiseries
                sont très rassis! Nous avons pu trouver un déjeuner digne de ce
                nom au restaurant à proximité pour 55 dirhams ! Je vous
                conseille donc d’éviter de prendre la formule avec le petit
                déjeuner! En ce qui concerne le personnel, ils sont très
                accueillant ! Nous avons pu faire du change à l’hôtel ce qui
                nous a bien rendu service ! De plus lors de notre retour nous
                avons pu faire appel à eux pour qu’il nous appelle un taxi afin
                de pouvoir aller à l’aéroport! Un grand merci aux personnels!
                Pour finir, un hôtel propre en généralité!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestiModel;
