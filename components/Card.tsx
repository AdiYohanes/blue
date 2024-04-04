/* eslint-disable @next/next/no-img-element */
import { CardProps } from "@/types";
import React from "react";

const Card = ({ content, title, img, button }: CardProps) => {
  return (
    <a
      href="/about"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100"
    >
      <img
        className="m-4 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={img}
        alt="Phortograph image"
      />
      <div className="flex flex-col justify-between p-4 leading-normal tracking-wider gap-4">
        <h5 className="mb-2 text-3xl font-extrabold tracking-tight text-[#2c698d]">
          {title}
        </h5>
        <p className="mb-3 font-semibold text-xl text-gray-700 dark:text-gray-400">
          {content}
        </p>
        {button && typeof button === "string" && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600">
            {button}
          </button>
        )}
      </div>
    </a>
  );
};

export default Card;
