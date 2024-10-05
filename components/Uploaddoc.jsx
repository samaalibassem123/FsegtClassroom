"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Uploaddoc() {
  const success = () =>
    toast.success("Uploaded succesfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const Error = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <>
      <UploadDropzone
        className=" cursor-pointer dark:border-white"
        endpoint="pdfUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          success();
        }}
        onUploadError={(error) => {
          // Do something with the error.
          Error(error.message);
        }}
      />
      <ToastContainer />
    </>
  );
}
