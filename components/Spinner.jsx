"use client";
import React from "react";
import { Oval } from "react-loader-spinner";
export default function Spinner() {
  return (
    <Oval
      visible={true}
      height="20"
      width="20"
      color="white"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
