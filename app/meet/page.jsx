import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import MeetForm from "@/components/MeetForm";
import { SessionProvider } from "next-auth/react";
export default async function page({ classes }) {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div className=" relative">
      {/*the blurs bubbels */}
      <div className=" -z-20 min-h-svh w-full relative">
        <div className=" absolute sm:top-[50%] top-[10%] sm:left-[10%] left-[1%] sm:size-[200px] size-[100px] bg-blue-300 dark:bg-blue-200 rounded-full  " />
        <div className=" absolute sm:top-[20%]  top-[70%] sm:left-[70%] left-[70%] sm:size-[200px] size-[100px] bg-orange-300 dark:bg-orange-200 rounded-full  " />
      </div>
      {/*end */}

      <div className=" flex items-center justify-center absolute top-0 left-0 min-h-svh w-full bg-transparent backdrop-blur-3xl">
        <SessionProvider>
          <MeetForm />
        </SessionProvider>
      </div>
    </div>
  );
}
