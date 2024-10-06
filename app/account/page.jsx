import { auth } from "@/auth";
import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";
import React from "react";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";

export default async function page() {
  //get calsses from db and add them to an array
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <div className="relative">
        <div className=" -z-20 min-h-screen w-full relative blur-lg bg-gradient-to-br from-blue-100 to-orange-100 dark:from-black" />
        <div className="p-2 absolute top-0 z-20 min-h-svh w-full backdrop-blur-3xl">
          <Dashboard />
        </div>
      </div>
    </>
  );
}
