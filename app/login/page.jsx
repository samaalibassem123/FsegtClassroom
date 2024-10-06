"use server";
import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import GoogleButton from "@/components/GoogleButton";
import FacebookButton from "@/components/FacebookButton";

export default async function page() {
  const session = await auth();
  if (!session?.user) {
    return (
      <>
        <div className=" -z-20 min-h-svh w-full relative">
          <div className=" absolute sm:top-[50%] top-[10%] sm:left-[10%] left-[1%] sm:size-[200px] size-[100px] bg-blue-300 dark:bg-blue-200 rounded-full  " />
          <div className=" absolute sm:top-[20%]  top-[70%] sm:left-[70%] left-[70%] sm:size-[200px] size-[100px] bg-orange-300 dark:bg-orange-200 rounded-full  " />
        </div>

        <div className=" backdrop-blur-3xl absolute top-0 left-0 flex items-center justify-center min-h-svh w-full">
          <div className=" absolute top-0 w-full  flex items-center justify-end p-2 z-30">
            <ModeToggle />
          </div>
          {/*Oauth authentication */}
          <div className="flex flex-col gap-2">
            {/*Google Authentication*/}
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
              className="flex flex-col gap-5 items-center"
            >
              <GoogleButton />
            </form>
            {/*Facebook authentication*/}
            <form
              action={async () => {
                "use server";
                await signIn("facebook");
              }}
              className=" flex flex-col gap-5 items-center"
            >
              <FacebookButton />
            </form>
          </div>
        </div>
      </>
    );
  } else {
    redirect("/account");
  }
}
