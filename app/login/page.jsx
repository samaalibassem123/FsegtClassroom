import { FcGoogle } from "react-icons/fc";
import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { FaFacebook } from "react-icons/fa";
export default function page() {
  return (
    <div className=" flex items-center justify-center min-h-svh w-full">
      <div className=" absolute top-0 w-full  flex items-center justify-end p-2 z-30">
        <ModeToggle />
      </div>
      <form action="" className="flex flex-col gap-5 items-center">
        <button className="flex w-[240px] justify-between items-center gap-2 border p-2 px-3 rounded-lg bg-black text-white dark:bg-white dark:text-black">
          Continue With Google <FcGoogle className="size-6" />
        </button>
        <button className="flex items-center  gap-2 border p-2 px-3 rounded-lg bg-black text-white dark:bg-white dark:text-black">
          Continue With Facebook <FaFacebook className="size-6" />
        </button>
      </form>
    </div>
  );
}
