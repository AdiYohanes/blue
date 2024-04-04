/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { DownloadButton } from "@/components";
import { GALERY_ABSORBENT } from "@/constants";
import React from "react";

const AbsorbentPage = () => {
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
          <h2 className="text-5xl text-white font-semibold">Absorbent</h2>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center shadow w-full p-8 m-4 gap-8">
        <div className="space-y-4 text-xl">
          <p className="indent-8 text-justify">
            Absorbents are inoluble materials or mixtures of materials used to
            recover liquids through the mechanism of absorption, or adsorption,
            or both. Absorbents are materials that pick up and retain liquid
            distributed throught ist molecular structure causing the solid to
            swell (50 percent or more).
          </p>
          <p className="indent-8 text-justify">
            The absorbent mus be at least 70 percent insoluble in excess fluid.
            Absorbents are insoluble materials that are coated by a liquid on
            its surface, including pores and capillaries, without the solid
            swelling more than 50 percent in excess liquid. To be useful in
            combating oil spills, sorbents need to be both oleophilic
            (oil-attracting)and hydropobic (water-repellent).
          </p>

          <ul className="space-y-4 text-gray-700 list-disc list-inside dark:text-gray-400">
            <li>
              <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                <li>Leak – Resistant Solution</li>
                <li>Soft Absorbent Recycleds</li>
                <li>Higher performance</li>
                <li>Lower costs</li>
                <li>Greater price stability</li>
                <li>Less dependence on oil-based products</li>
              </ol>
            </li>
            <li>
              Availability:
              <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                <li>MAT: size 43cm x 48cm, 100 pieces, weight 4.1kg</li>
                <li>PAD: size 43cm x 48cm, 100 pieces, weight 4.7kg</li>
                <li>PILLOW : size 35cm x 50cm, 10 pieces, weight 6.8kg</li>
                <li>Lower costs</li>
                <li>BOOM: size 9.5cm x 240cm, 6 pieces, weight 9kg</li>
                <li>Less dependence on oil-based products</li>
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
        <DownloadButton pdfPath="/pdf/absorbent/ospico_Sorbent.pdf" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {GALERY_ABSORBENT.map((item) => (
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

export default AbsorbentPage;
