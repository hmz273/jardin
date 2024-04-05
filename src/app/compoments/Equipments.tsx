import React from "react";
import Image from "next/image";
import img from "../../../public/equipment.png";

const Equipments = () => {
  return (
    <section className="h-auto">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 md:text-5xl text-3xl tracking-tight font-normal text-gray-700">
            Equipements
          </h2>
        </div>

        <div className="grid md:grid-cols-2">
          <div>
            <Image src={img} alt="mockup" className="hidden md:grid " />
          </div>
          <div className="bg-[#3D505A]">
            <div className="overflow-y-auto hide-scroll-bar-eq max-h-[47rem] py-6 text-center">
              <div className="py-4">
                <p className="text-gray-50 text-2xl py-3"> Restauration</p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Café sur place
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Fruits En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Bouteille d'eau En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Vin/champagne En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Snack-bar
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Bar
                </p>
              </div>
              <div className="py-4">
                <p className="text-gray-50 text-2xl py-3"> Restauration</p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Café sur place
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Fruits En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Bouteille d'eau En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Vin/champagne En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Snack-bar
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Bar
                </p>
              </div>
              <div className="py-4">
                <p className="text-gray-50 text-2xl py-3"> Restauration</p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Café sur place
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Fruits En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Bouteille d'eau En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Vin/champagne En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Snack-bar
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Bar
                </p>
              </div>
              <div className="py-4">
                <p className="text-gray-50 text-2xl py-3"> Restauration</p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Café sur place
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Fruits En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Bouteille d'eau En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Vin/champagne En supplément
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Snack-bar
                </p>
                <p
                  className="text-gray-200"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Bar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipments;
