"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
const ProductList = [
  {
    name: "Porcelain Tile",
    url: "porcelain-tile",
    img: "/assets/products/porcelain-tile.png",
  },
  {
    name: "Adhesive Epoxy",
    url: "adhesive-epoxy",
    img: "/assets/products/theAdhesiveaEpoxy.jpg",
  },
  {
    name: "Ceramic Tile",
    url: "ceramic-tile",
    img: "/assets/products/ceramic-tile.jpg",
  },
  {
    name: "Outdoor pavers",
    url: "outdoor-pavers",
    img: "/assets/products/counterTopsSlabs.png",
  },
  {
    name: "Counter Tops Slabs",
    url: "counter-tops-Slabs",
    img: "/assets/products/outdoorPavers.png",
  },
  {
    name: "Subway Tile",
    url: "subway-tile",
    img: "/assets/products/SubayTile.jpg",
  },
];

const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const ProductsPage = () => {
  return (
    <div className="pb-8">
      <div className="mt-4 px-4 mx-auto sm:w-4/5 xl:max-w-6xl">
        <div className="flex items-center justify-start md:justify-center gap-3">
          <MdOutlineProductionQuantityLimits className="text-3xl text-[#034d94]" />
          <h1 className="md:text-center text-lg md:text-2xl my-8 text-[#034d94]">
            Our Products
          </h1>
        </div>
        <motion.div
          className="mt-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          {ProductList.map((product, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group h-[260px] md:h-[300px]"
                whileHover={{ scale: 1.05 }}
              >
                <Link href={`/products/${product.url}`} className="">
                  <img
                    src={product.img}
                    className="rounded-md object-cover h-full w-[100%]"
                    alt={product.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <p className="text-white text-lg font-bold">
                      {product.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
