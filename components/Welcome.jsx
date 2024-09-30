"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShowAnimation } from "@/utils/animation";

export default function Welcome() {
  return (
    <motion.div
      variants={ShowAnimation}
      initial="hidden"
      animate="visible"
      className="sm:text-6xl text-center text-4xl font-medium drop-shadow-md"
    >
      <motion.span variants={ShowAnimation} className="text-blue-400">
        Fsegt
      </motion.span>
      <motion.span
        variants={ShowAnimation}
        className="dark:text-white text-gray-700"
      >
        classroom
      </motion.span>

      <motion.p
        variants={ShowAnimation}
        className="text-sm p-2 mt-2 text-gray-500"
      >
        Fsegt-classroom simplifie ainsi le processus éducatif, favorisant un
        environnement d apprentissage numérique efficace et interactif.
      </motion.p>
      <motion.div variants={ShowAnimation}>
        <Button asChild>
          <Link href={"/login"}>Login</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
