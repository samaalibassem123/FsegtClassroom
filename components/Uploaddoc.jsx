"use client";
import { react, useState, useEffect } from "react";
import { UploadDropzone } from "@/utils/uploadthing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Uploaddoc({ ClassId }) {
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

  const [Documents, setDocuments] = useState([]);

  //get documents form the db

  return (
    <>
      {/*check if the user have the role of a teacher so he can upload files or not */}
      <UploadDropzone
        className=" h-[250px] w-[250px]  cursor-pointer dark:border-white ut-allowed-content:hidden ut-button:bg-blue-400"
        endpoint="pdfUploader"
        onClientUploadComplete={(res) => {
          setDocuments([...Documents, res[0].url]);
          success();
        }}
        onUploadError={(error) => {
          // Do something with the error.
          Error(error.message);
        }}
      />
      <ToastContainer />
      {Documents && Documents.map((docUrl, index) => <div key={index}></div>)}
    </>
  );
}
