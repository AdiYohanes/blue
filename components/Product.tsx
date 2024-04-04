/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "./Card";
import ProductCard from "./ProductCard";
import { PRODUCT_CARD, PRODUCT_CARD2 } from "@/constants";

const Product = () => {
  const backgroundImage = "/images/about.png";
  return (
    <>
      <div
        className="relative flex justify-center items-center overflow-hidden bg-cover bg-no-repeat bg-center sm:bg-[50%] md:bg-[25%] lg:bg-[20%] h-[500px] rounded-md"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="text-center p-4 relative z-10 tracking-widest space-y-4">
          <h2 className="text-4xl text-white font-semibold">PRODUCT</h2>
        </div>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full p-4 gap-8">
        {PRODUCT_CARD.map((item) => (
          <ProductCard
            link={item.link}
            key={item.title}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full p-4 gap-8">
        {PRODUCT_CARD2.map((item) => (
          <ProductCard
            link={item.link}
            key={item.title}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
