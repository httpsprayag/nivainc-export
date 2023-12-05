"use client"
import React from "react";
import { motion } from "framer-motion";
import { ProgressBar } from "primereact/progressbar";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-[#034d94]">Loading...</h1>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mb-4"
        >
          <ProgressBar mode="indeterminate" style={{ height: "6px" }} />
        </motion.div>
        <p className="text-gray-600">Please wait while we prepare awesome content for you!</p>
      </motion.div>
    </div>
  );
};

export default Loading;

