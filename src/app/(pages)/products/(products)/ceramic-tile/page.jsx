"use client";
import React from "react";
import { motion } from "framer-motion";
import { itemVariants, staggerVariants } from "@/constants";

const CeramicTiles = () => {
  const ceramicTiles = [
    {
      name: "Ceramic tiles",
      url: "/assets/products/ceramicImg.jpeg",
      size: "300 x 600,  600 x 600,  300 x 450",
    },
  ];
  return (
    <div className="h-screen px-4">
      <p className="md:text-center text-[#034d94] text-2xl pb-8 mt-8">
        Ceramic Tiles
      </p>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl mx-auto gap-4 lg:px-0 md:gap-10 "
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        {ceramicTiles.map((product, index) => {
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group h-[260px] md:h-[300px]"
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

export default CeramicTiles;
