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
    <div className="flex flex-col gap-3 md:justify-start p-2 w-full">
      <Uploaddoc ClassId={classes} />
    </div>
  );
}
