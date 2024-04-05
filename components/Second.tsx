"use client";

import React, { useState } from "react";
import Partners from "./Partners";
import Image from "next/image";
import { buttonCategories, PROJECTS } from "@/constants";
import { motion } from "framer-motion";

const Second = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Oil Spill"
  );

  const handleClick = (title: string) => {
    setSelectedCategory(title);
  };

  return (
    <section className="pt-4">
      <div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 50 },
          }}
          className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl"
        >
          Our Projects
        </motion.h2>
        <motion.div
          className="flex justify-center sm:"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
        >
          {buttonCategories.map((category) => (
            <button
              key={category.title}
              type="button"
              className={`text-gray-900  bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold text-xl sm:text-md rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 ${
                selectedCategory === category.title ? "focus:ring-2" : ""
              }`}
              onClick={() => handleClick(category.title)}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center p-8 bg-white rounded-lg shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className={`flex flex-col items-center gap-4 ${
                selectedCategory !== project.title ? "hidden" : ""
              }`}
            >
              <span className="text-3xl font-bold pb-4">{project.title}</span>
              <Image
                src={project.img}
                alt="Oil Spill Response"
                width={500}
                height={500}
                className="rounded-xl"
              />
              <a 
              href={project.url}
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600">
                Details
              </a>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="relative">
        <Partners />
      </div>
    </section>
  );
};

export default Second;
