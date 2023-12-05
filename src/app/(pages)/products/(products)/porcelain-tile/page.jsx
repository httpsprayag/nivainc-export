"use client";
const porcelineImages = [
  {
    name: "Azuvi Silver",
    url: "/assets/products/Azuvi-silver.jpg",
    size: "600 x 600",
  },
  {
    name: "Onyx Carlo Beige",
    url: "/assets/products/onyx-carlo.jpg",
    size: "800 x 1600",
  },
  {
    name: "Calacatta-Marble",
    url: "/assets/products/CALACATTA MARBLE-3D.jpg",
    size: "600 x 1200",
  },
  {
    name: "porceline product-4",
    url: "/assets/products/proceline-4.jpeg",
    size: "1200 x 1200",
  },
  {
    name: "BAITA-WOOD",
    url: "/assets/products/BAITA-WOOD.jpg",
    size: "200 x 1200",
  },
  {
    name: "Bali Grey",
    url: "/assets/products/BALI-GREY.jpg",
    size: "3000 x 3000",
  },
];
import React from "react";
import { motion } from "framer-motion";
import { itemVariants, staggerVariants } from "@/constants";

const PorcelainTile = () => {
  return (
    <div className="w-full pb-8 mt-6 md:mt-20">
      <p className="md:text-center text-xl text-[#034d94] mb-6 md:mb-14 px-4">Porcelain Tiles</p>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl mx-auto gap-4 px-4 lg:px-0 md:gap-10 "
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        {porcelineImages.map((product, index) => {
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

export default PorcelainTile;