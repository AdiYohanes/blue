/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { GALERY_STORAGE } from "@/constants";
import React from "react";

const StorageTankPage = () => {
  const backgroundImage = "/images/about.png";

  return (
    <div className="space-y-16">
      <div
        className="relative flex justify-center items-center overflow-hidden bg-cover bg-no-repeat bg-center sm:bg-[50%] md:bg-[25%] lg:bg-[20%] h-[300px] rounded-md"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="text-center p-4 relative z-10 tracking-widest space-y-4">
          <h2 className="text-5xl text-white font-semibold">Storage Tank</h2>
        </div>
      </div>

      <div className="mx-auto flex flex-col justify-center items-center shadow max-w-4xl p-8 m-4 gap-8">
        <h2 className="text-3xl font-semibold">
          OSPICO FLOATING TEMPORARY STORAGE TANK
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          OSPICO Floating Storage Tang are collapsible storage containers that
          provide temporary as well as long term liquid storage. Our pillow
          tanks can used for portable (drinking) water, fruit jices,
          wasterwater, chemicals, Spill Response and more.
        </p>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <svg
              className="w-4 h-4 text-gray-700 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-semibold">OSPICO PORTABLE TANK OT-8T</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Portable Water, Chemical or Fuel Portable Storage Tank:
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Self-supporting and collapsible industrial fabric tanks designed for
          temporary containment of drinking water, fire fighting water, chemical
          or fuel containment. The urethane fabric that is used meets all
          requirements for use in containing products for human consumption if
          purchased with cover.
        </p>
      </div>

      <div className="mx-auto flex flex-col justify-center items-center shadow max-w-4xl p-8 m-4 gap-8">
        <h2 className="text-4xl font-bold">GALERY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GALERY_STORAGE.map((item) => (
            <div className="flex items-center justify-center">
              <img
                className="h-[350] w-[500px] rounded-lg"
                src={item.image}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorageTankPage;
