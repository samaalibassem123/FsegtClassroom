"use client";
import React from "react";
import { JoinPrompt } from "./JoinPrompt";
import { motion } from "framer-motion";
import { ShowAnimation } from "@/utils/animation";
import { Addprompt } from "./Addprompt";
export default function Dashboard() {
  return (
    <motion.div
      variants={ShowAnimation}
      initial="hidden"
      animate="visible"
      className="p-5 flex flex-col gap-7"
    >
      <motion.div variants={ShowAnimation} className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold underline">Join a Class:</h1>
        <JoinPrompt />
      </motion.div>
      <motion.div variants={ShowAnimation} className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold underline">Create your Class:</h1>
        <Addprompt />
      </motion.div>
    </motion.div>
  );
}
