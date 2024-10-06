"use client";
import { react, useState, useEffect } from "react";
import { UploadDropzone } from "@/utils/uploadthing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { Trash2, NotebookPen, Space, FileText, Type } from "lucide-react";
import Link from "next/link";

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
    });
  };

  const [Documents, setDocuments] = useState([]);

  //get
  //get documents form the db

  return (
    <>
      {/*check if the user have the role of a teacher so he can upload files or not */}
      <UploadDropzone
        className=" h-[250px] w-[250px]  cursor-pointer dark:border-white ut-allowed-content:hidden ut-button:bg-blue-400"
        endpoint="pdfUploader"
        onClientUploadComplete={(res) => {
          console.log(res);
          setDocuments([
            ...Documents,
            { name: res[0].name, url: res[0].url, type: res[0].type },
          ]);
          success();
        }}
        onUploadError={(error) => {
          // Do something with the error.
          Error(error.message);
        }}
      />
      <ToastContainer />
      {Documents &&
        Documents.map((file, index) => (
          <div
            className="dark:border-white flex h-fit rounded-lg p-5 border w-full shadow-sm"
            key={index}
          >
            <div className="flex items-center justify-between w-full ">
              <span className=" flex items-center gap-1 underline">
                <FileText />
                <a href={file.url} target="_blank">
                  {file.name}
                </a>
              </span>
              <span></span>
              {/*Hide the delete button when the role of user is a student */}
              <Button className="bg-red-500">
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
    </>
  );
}
