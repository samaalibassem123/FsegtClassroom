"use client";
import React from "react";
import { JoinPrompt } from "./JoinPrompt";
import { motion } from "framer-motion";
import { ShowAnimation } from "@/utils/animation";
import { Addprompt } from "./Addprompt";
import Cardclass from "./Cardclass";
export default function Dashboard() {
  return (
    <motion.div
      variants={ShowAnimation}
      initial="hidden"
      animate="visible"
      className="p-5 flex flex-col gap-7 "
    >
      {/*joining a class */}
      <motion.div variants={ShowAnimation} className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold underline">Join a Class:</h1>
        <motion.div
          className="flex gap-6 md:flex-row flex-col items-center "
          variants={ShowAnimation}
        >
          <motion.div variants={ShowAnimation}>
            <JoinPrompt />
          </motion.div>
          <motion.div variants={ShowAnimation}>
            <Cardclass />
          </motion.div>
        </motion.div>
      </motion.div>

      {/*creating a class */}
      <motion.div variants={ShowAnimation} className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold underline">Add a Class:</h1>
        <motion.div
          className="flex gap-6 md:flex-row flex-col items-center "
          variants={ShowAnimation}
        >
          <motion.div variants={ShowAnimation}>
            <Addprompt />
          </motion.div>
          <motion.div variants={ShowAnimation}>
            <Cardclass />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
