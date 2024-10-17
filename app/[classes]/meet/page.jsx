import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import MeetForm from "@/components/MeetForm";
import { SessionProvider } from "next-auth/react";
export default async function page({ params }) {
  const url = params.classes.split("%20");
  const Classcode = url[0];

  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div className=" relative">
      <div className=" flex items-center justify-center absolute top-0 left-0 min-h-svh w-full bg-transparent backdrop-blur-3xl">
        <SessionProvider>
          <MeetForm classcode={Classcode} username={session?.user?.name} />
        </SessionProvider>
      </div>
    </div>
  );
}
