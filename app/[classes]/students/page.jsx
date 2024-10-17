import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Students from "@/components/Students";

export default async function page({ params }) {
  const url = params.classes.split("%20");
  const Classcode = url[0];
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div className="w-[90%]">
      <Students classcode={Classcode} />
    </div>
  );
}
