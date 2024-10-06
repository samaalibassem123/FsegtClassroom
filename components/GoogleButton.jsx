"use client";
import React, { useState } from "react";
import Spinner from "@/components/Spinner";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton() {
  const [clicked, isClicked] = useState(false);
  return (
    <button
      onClick={() => isClicked(true)}
      className="flex w-[240px] justify-between items-center gap-2 border p-2 px-3 rounded-lg bg-black border-white hover:opacity-50 text-white dark:bg-white dark:text-black"
    >
      Continue With Google
      {!clicked ? (
        <div>
          <FcGoogle className="size-6" />
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </button>
  );
}
