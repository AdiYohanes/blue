/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { DownloadButton } from "@/components";
import { GALERY_DISPERSANT } from "@/constants";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispersant Pump",
  robots: {
    index: true,
    follow: true,
  },
};

const DispersantPumpPage = () => {
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
          <h2 className="text-5xl text-white font-semibold">Dispersant Pump</h2>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center shadow w-full p-8 m-4 gap-8">
        <div className="space-y-4 text-xl">
          <p className="indent-8 text-justify">
            Oil spill dispersant spray systems are portable lightweight sets
            that can be quickly and easily mounted on tugs, offshore supply
            vessels and other pollution control craft responding to marine
            emergency oil spill situations.
          </p>
          <p className="indent-8 text-justify">
            “ We couldn’t believe how much time we have saved by using this
            system, we have never seen pump performance like this on a
            dispersant set. Self-priming, super suction and it can run dry for
            hours without damage, let alone how easy it is to maintain, superb.”
            The above oil spill dispersant spray system consists of a self
            priming positive displacement pump, prime mover, dispersant
            flowmeter and interconnecting pipework, all mounted on an aluminum
            frame.
          </p>

          <ul className="space-y-4 text-gray-700 list-disc list-inside dark:text-gray-400">
            <li>
              <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                <li>Open sea or inshore duty</li>
                <li>Suitable for below- or above-deck mounting mounting</li>
                <li>Diesel or electric drive</li>
                <li>Three standard units</li>
                <li>Self priming with powerful suction performance</li>
                <li>Will not be damaged if left running with a dry suction</li>
              </ol>
            </li>
          </ul>
          <p className="indent-8 text-justify">
            Oil dispersant consumption is appreciably reduced by using Megator
            oil dispersant spray systems. With its outstanding self-priming and
            dry-running capability, the Megator oil spill dispersant spray
            system can be stopped after the first run through an oil slick and
            then simply restarted for the second pass without the worry of loss
            of prime.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl">DATASHEET</h2>
        <DownloadButton pdfPath="/pdf/dispersant/ospico-Dispersent.pdf" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {GALERY_DISPERSANT.map((item) => (
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

export default DispersantPumpPage;
