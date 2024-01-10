"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { itemVariants, staggerVariants } from "@/constants";
const adhesiveEpoxyImages = [
  {
    name: "Adhesive Epoxy",
    url: "/assets/adhesive.jpg",
    size: "Tile Adhesive",
  },
];
const AdhesiveEpoxy = () => {
  return (
    <div className="h-screen px-4">
      <p className="md:text-center text-[#034d94] text-2xl pb-8 mt-8">
        Adhesive Epoxy
      </p>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl mx-auto gap-4 md:gap-10 "
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        {adhesiveEpoxyImages.map((product, index) => {
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-[260px] lg:max-h-[360px]"
              whileHover={{ scale: 1.05 }}
            >
              <>
                <img
                  src={product.url}
                  className="rounded-t-md object-cover h-full w-[100%]"
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
export default AdhesiveEpoxy;
