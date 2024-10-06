import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function page({ classes }) {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return <div className="w-full">teachers</div>;
}