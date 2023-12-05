"use client";

import React from "react";
import { motion } from "framer-motion";
import { itemVariants, staggerVariants } from "@/constants";

const outdoorImages = [
  {
    url: "/assets/images/outdoorImg1.png",
    size: "600 x 600 (15mm)",
  },
  {
    url: "/assets/images/outdoorImg2.png",
    size: "600 x 600 (20mm)",
  },
  {
    url: "/assets/images/outdoorImg3.png",
    size: "600 x 900 (20mm)",
  },
  {
    url: "/assets/images/outdoorImg4.png",
    size: "600 x 1200 (20mm)",
  },
];

const Outdoorpavers = () => {
  return (
    <div className="w-full pb-8 mt-6 md:mt-20">
      <p className="md:text-center text-xl text-[#034d94] mb-6 md:mb-14 px-4">Outdoor Pavers</p>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl mx-auto gap-4 px-4 lg:px-0 md:gap-10 "
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        {outdoorImages?.map((product, index) => {
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group "
              whileHover={{ scale: 1.05 }}
            >
              <>
                <img
                  src={product.url}
                  className="rounded-t-md object-cover h-[225px] md:h-[300px] w-[100%]"
                  alt={product.name}
                />
                <div className="rounded-b-lg w-full bg-[#034d94] text-white p-2 text-center">
                  <p>{product.size}</p>
                </div>
              </>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Outdoorpavers;
