/* eslint-disable @next/next/no-img-element */
"use client";
import Card from "./Card";
import { motion } from "framer-motion";

const About = () => {
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
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            className="text-4xl text-white font-semibold"
          >
            ABOUT US
          </motion.h2>
        </div>
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
          <Card
            img="/images/logo.png"
            content="A.NUGROHO DS | Founder & CEO"
            title="PT. BLUE OCEAN SEJAHTERA"
          />
        </motion.div>
      </div>

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-normal text-base leading-6 text-gray-600 "
            >
              PT. Blue Ocean Sejahtera is an independent Indonesia company,
              engaging in design, manufacture, installation, and commissioning
              of Oil Spill Response Equipment for Platform, Ships, Jetty,
              Drilling and other facilities relate to marine environmental
              issue. Established in 2006 with our office, located in Jakarta and
              workshop in Bekasi and Sentul, we are staffed with competent and
              experienced personnel. As to keep developing, we have committed to
              take first priority on overall professional performance to achieve
              the highest possible engineering standart
            </motion.p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="/images/assesment.jpg"
              alt="A group of People"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="container mx-auto p-6 space-y-6"
      >
        <h3 className="text-slate-600 font-bold text-4xl">
          17 Year Of Undefeated Success
        </h3>
        <p className="text-justify text-gray-600 font-semibold text-2xl">
          Blue Ocean Sejahtera is able to integrate the Oil Spill Response
          services, by providing an extensive range of oil spill control
          equipment and preparedness service, produced in our own modern
          facilities. Through our range of services, depth of expertise, we are
          trusted by our clients.
        </p>
        <p className="text-justify text-gray-600 font-semibold text-2xl">
          These success stories is only be achieved as laid on the strength of
          knowledge on Environmental Engineering and Oil Characteristic. That
          helps us to:
        </p>
        <ul className="text-justify text-gray-500 font-semibold text-2xl">
          <li className="list-disc">Design the right equipment.</li>
          <li className="list-disc">
            Set robust and systemic oil spill response.
          </li>
          <li className="list-disc">Manage the logistic.</li>
        </ul>
      </motion.div>
    </>
  );
};
export default About;
