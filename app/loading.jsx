import DotSpinner from "@/components/DotSpinner";
import React from "react";

export default function loading() {
  return (
    <div className="w-full h-svh flex items-center justify-center text-2xl font-semibold animate-pulse">
      Loading
      <DotSpinner />
    </div>
  );
}
