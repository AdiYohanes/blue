/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { DownloadButton } from "@/components";
import { GALERY_WWTP } from "@/constants";
import React from "react";

const WasteWaterPage = () => {
  const backgroundImage = "/images/about.png";

  return (
    <div>
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
          <h2 className="text-5xl text-white font-semibold">
            Waste Water Treatment Plant (WWTP)
          </h2>
        </div>
      </div>

      <div className="mx-auto flex flex-col justify-center items-center shadow max-w-4xl p-8 m-4 gap-8">
        <div className="space-y-4 text-xl">
          <p className="indent-8 text-justify">
            Oil and Gas Drilling activities create quantities of contaminated
            water known as drilling waste water from the well. Waste water from
            well drilling sites may cause water polution and violate of the
            government standards (PERMENLH No. 19/2010). Drilling wastewaters
            contain many unwanted chemicals, sediment, mud, foam, oil & grase
            and other additives that can pollute a stream or river, wetlands,
            channel or fresh water wells.
          </p>
          <p className="indent-8 text-justify">
            Therefore, with WWTP of PT. Blue Ocean Sejahtera the wastewaters
            must be treated and control the discharge of the water produce based
            on the government standards. Prevention of treatment of wastewater
            and sludge from drilling activities using the combination of primary
            and secondary treatment which consist of chemical process and
            sedimentation & screening process.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-bold">DATASHEET</h2>
        <svg
          className="w-4 h-4 text-gray-700 dark:text-gray-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <DownloadButton pdfPath="/pdf/wwtp/PDF.pdf" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 p-10 gap-8">
        {GALERY_WWTP.map((item) => (
          <div className="flex items-center justify-center">
            <img
              className="h-[250] w-[500px] rounded-lg"
              src={item.image}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteWaterPage;
