"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SplitTextAnimation({ text, className = "" }) {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Animation variants for each letter
  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h2
      className={`text-md    ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {text.split("\n").map((line, index) => (
        <motion.p
          key={`${line}-${index}`}
          variants={childVariants}
          className=" whitespace-pre-line"
        >
          {line}
        </motion.p>
      ))}
    </motion.h2>
  );
}
