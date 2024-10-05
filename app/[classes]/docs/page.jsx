import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Uploaddoc from "@/components/Uploaddoc";

export default async function page({ classes }) {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div className="flex flex-wrap md:justify-start justify-center w-full">
      <Uploaddoc ClassId={classes} />
    </div>
  );
}
