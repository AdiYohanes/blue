"use client";
import { PartnersLogo } from "@/constants";
import { ImagePartnersProps } from "@/types";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Partners = () => {
  const PARTNERSS = PartnersLogo;
  return (
    <section className="bg-white py-10 lg:py-[100px]">
      <div className="container mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl"
        >
          Our Parnerts
        </motion.h2>
        <div className="flex flex-wrap mx-4 justify-center">
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-center">
              {PARTNERSS.map((partner) => (
                <ImageParners
                  key={partner.alt}
                  img={partner.img}
                  url={partner.url}
                  alt={partner.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

const ImageParners = ({ img, url, alt }: ImagePartnersProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.a
      href={url}
      className="mx-4 my-2 flex w-[100px] h-[100px] items-center justify-center 2xl:w-[200px] 2xl:h-[200px] hover:shadow-lg transition duration-300 p-2 rounded-xl"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
    >
      <div className="w-full h-full relative">
        <Image src={img} alt={alt} layout="fill" objectFit="contain" />
      </div>
    </motion.a>
  );
};
