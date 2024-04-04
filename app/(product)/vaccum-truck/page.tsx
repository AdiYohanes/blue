/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { DownloadButton } from "@/components";
import { GALERY_VACCUM } from "@/constants";
import React from "react";

const VaccumTruckPage = () => {
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
          <h2 className="text-5xl text-white font-semibold">Vaccum Truck</h2>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center shadow w-full p-8 m-4 gap-8">
        <div className="space-y-4 text-xl">
          <p className="indent-8 text-justify">
            OSPICO Skimmer Vacuum Truck SVT-3000 is designed for refinery and
            gas stations. The Skimmer Vacuum Truck should be manufactured
            according to ISO 9001:2000 procedures. It is equipped with 3000
            liters storage tank and emergency boom for oil recovery there area
            three types of skimmers for vairous types of oil and situations,
            those are, Disc skimmer Head, Mini Weir Skimmer head, and Delta
            Mantaray skimmer head.
          </p>
          <h1 className="text-justify font-semibold">Skimmer Vacuum Truck</h1>
          <p className="indent-8 text-justify">
            SVT-3000 is constructed on a Mitsubishi chassis and engine with a
            gross weight of 8.5 tons. The tank is made of mild steel or
            stainless steel with a capacity of 3000 liters. The truck tank is
            equipped with a side glass to help monitor liquid level. Trash and
            debris screen installation inside the tank is optional.
          </p>
          <h1 className="text-justify font-semibold">Skimmer System</h1>
          <p>
            The three types of light weight skimmer heads are not more than 42
            kgs each, making them all portable, easy to deploy operate and
            maintain. Each skimmer is unique to suit different aras and oil
            spill. All three will be installed on board of the truck for rapid
            deployment.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl">DATASHEET</h2>
        <DownloadButton pdfPath="/pdf/vaccum/Skimmer-truck-1.pdf" />
      </div>

      <div className="grid grid-cols-2 gap-2">
        {GALERY_VACCUM.map((item) => (
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
  );
};

export default VaccumTruckPage;
