import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import ChatUI from "@/components/ChatUI";
import { SessionProvider } from "next-auth/react";

export default async function page({ classes }) {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <SessionProvider>
      <div className="w-full">
        <ChatUI />
      </div>
    </SessionProvider>
  );
}
