"use client";
import React from "react";
import { MutatingDots } from "react-loader-spinner";

export default function DotSpinner() {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="blue"
      secondaryColor="orange"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
