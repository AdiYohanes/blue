"use client";
import Card from "./Card";
import { motion } from "framer-motion";

const Hero = () => {
  const backgroundImage = "/images/bghero.jpg";
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
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="text-center p-4 relative z-10 tracking-widest space-y-4 ">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="text-white "
          >
            ONE STOP SOLUTION FOR ANY OIL SPILL PROBLEMS.
          </motion.span>
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
            A Trusted Business Partner
          </motion.h2>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
            className="text-4xl text-white font-semibold"
          >
            Committed to Protect Environment
          </motion.h2>
        </div>
      </div>
      {/* BANNER */}
      <div
        className="w-full mx-auto px-6 relative z-20 "
        style={{ top: "-130px" }}
      >
        <motion.div
          className="flex justify-center "
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
            content="
            PT. Blue Ocean Sejahtera is an independent Indonesia company, engaging in design, manufacture, installation, and commissioning of Oil Spill Response Equipment for Platform, Ships, Jetty, Drilling and other facilities relate to marine environmental issue.
            "
            title="PT. Blue Ocean Sejahtera"
          />
        </motion.div>
      </div>
    </>
  );
};
export default Hero;
