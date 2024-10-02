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
    <div className="w-full min-h-svh flex justify-center items-center">
      <SessionProvider>
        <MeetForm />
      </SessionProvider>
    </div>
  );
}
