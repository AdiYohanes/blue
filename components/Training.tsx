/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import { GALERY_TRAINING } from "@/constants";
import Card from "./Card";
import { motion } from "framer-motion";
import Video from "./Video";
const Training = () => {
  const backgroundImage = "/images/about.png";

  return (
    <>
      <div
        className="relative flex justify-center items-center overflow-hidden bg-cover bg-no-repeat bg-center sm:bg-[50%] md:bg-[25%] lg:bg-[20%] h-[350px] rounded-md"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      {/* BANNER */}
      <div
        className="w-full mx-auto px-6 relative z-20"
        style={{ top: "-70px" }}
      >
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
        >
          <Card img="/images/training-logo.png" content="" title="Training" />
        </motion.div>
      </div>

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-8/12 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-semibold text-xl text-justify leading-8 tracking-wider text-gray-600 indent-8"
            >
              When a ship spills oil, it is very important for the crew to
              understand how to deal with the oil spill quickly and properly.
              This program has been designed to complete and how to assess risk,
              how to safely clean up chemicals and in the work environment, and
              how to decontaminate.
            </motion.p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <p className="font-semibold text-xl text-justify text-gray-600 tracking-wide pb-4 indent-8">
              The program will address the important safety precautions when
              dealing with oil spills and delegates should fully understand oil
              and chemical spill safety precautions in marine and coastal
              environments and how to protect themselves before attending to
              such spills.
            </p>
          </div>
        </div>
      </div>

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 p-10 gap-8">
          {GALERY_TRAINING.map((item) => (
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

      <div className="flex justify-center">
        <a
          href="/"
          className="flex items-center gap-1 px-4 py-2 text-xl font-bold text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 transform rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
          Back to Home
        </a>
      </div>
    </>
  );
};

export default Training;
