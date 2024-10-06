"use client";
import React, { useState } from "react";
import Spinner from "@/components/Spinner";
import { FaFacebook } from "react-icons/fa";

export default function FacebookButton() {
  const [clicked, isClicked] = useState(false);
  return (
    <button
      disabled
      title="soon we will add it"
      onClick={() => isClicked(true)}
      className=" cursor-not-allowed flex w-[240px] justify-between items-center gap-2 border p-2 px-3 rounded-lg bg-black border-white hover:opacity-50 text-white dark:bg-white dark:text-black"
    >
      Continue With Google
      {!clicked ? (
        <div>
          <FaFacebook className="size-6" />
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </button>
  );
}
