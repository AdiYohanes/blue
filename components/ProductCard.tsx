/* eslint-disable @next/next/no-img-element */
import { ProductCardProps } from "@/types";
import React from "react";

const ProductCard = ({ title, description, imgUrl,link }: ProductCardProps) => {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src={imgUrl}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold dark:text-white text-gray-900">
          {title}
        </h2>
        <p className="mb-2 text-md dark:text-gray-300 text-gray-700 align-middle">
          {description}
        </p>
        <a
          href={link}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Details
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
