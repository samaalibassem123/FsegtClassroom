import { auth } from "@/auth";
import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div className="relative">
      <div className=" -z-20 min-h-svh w-full relative blur-lg">
        <div className=" absolute sm:top-[50%] top-[10%] sm:left-[10%] left-[1%] sm:size-[200px] size-[100px] bg-blue-300 dark:bg-blue-200 rounded-full  " />
        <div className=" absolute sm:top-[20%]  top-[70%] sm:left-[70%] left-[70%] sm:size-[200px] size-[100px] bg-orange-300 dark:bg-orange-200 rounded-full  " />
      </div>
      <div className=" p-2 absolute top-0 z-20 min-h-svh w-full backdrop-blur-3xl">
        <Dashboard />
      </div>
    </div>
  );
}
