"use client";
import { react, useState, useEffect } from "react";
import { UploadDropzone } from "@/utils/uploadthing";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { Trash2, FileText } from "lucide-react";
import { Textarea } from "./ui/textarea";
import Spinner from "./Spinner";

export default function Uploaddoc({ ClassId }) {
  const success = (msg) =>
    toast.success(msg, {
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

  const [addnote, setAddNote] = useState(false);
  const [note, setNote] = useState("");
  const [Documents, setDocuments] = useState([]);

  const DeleteFileFromCloud = async (id, file) => {
    document.getElementById(id).innerHTML = "Loading...";

    try {
      const res = await fetch("/api/uploadthing", {
        method: "DELETE",
        body: JSON.stringify({ fileKey: file.key }),
      });
      const resp = await res.json();
      console.log(resp);
      if (resp.msg.success) {
        success("Deleted Succesfully !");
        setDocuments(
          Documents.filter((document) => document.name !== file.name)
        );
      } else {
        Error("ERROR in deleting try Again !");
      }
    } catch (err) {
      Error(err);
      throw err;
    }
  };
  //get documents form the db

  return (
    <div className=" md:p-3 flex flex-col w-full gap-2 drop-shadow-md">
      {/*check if the user have the role of a teacher so he can upload files or not */}
      <UploadDropzone
        className=" h-[250px] w-[280px] cursor-pointer dark:border-white ut-allowed-content:hidden ut-button:bg-blue-400"
        endpoint="pdfUploader"
        onClientUploadComplete={(res) => {
          console.log(res);
          setDocuments([
            ...Documents,
            {
              name: res[0].name,
              url: res[0].url,
              type: res[0].type,
              key: res[0].key,
            },
          ]);
          success("Uploaded Succesfully !");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          Error(error.message);
        }}
      />

      {/*documents container */}
      {Documents &&
        Documents.map((file, index) => (
          <div
            className="dark:border-white flex justify-between   md:flex-row items-start gap-6 flex-col h-fit rounded-lg p-5 border sm:w-full mr-2  shadow-sm"
            key={index}
          >
            <div className="flex flex-col gap-2">
              <span className=" capitalize" id={file.name}>
                {note}
              </span>
              <div className="flex items-center justify-between w-full ">
                <span className=" flex items-center gap-1 underline">
                  <FileText />
                  <a
                    href={file.url}
                    target="_blank"
                    className="text-sm text-gray-600"
                  >
                    {file.name}
                  </a>
                </span>
              </div>
            </div>

            {/*Hide the  buttons when the role of user is a student */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Button
                  className="bg-blue-400 p-1"
                  onClick={() => setAddNote(true)}
                >
                  Add a Note
                </Button>
                <Button
                  id={index}
                  className="bg-red-500 p-2"
                  onClick={() => {
                    DeleteFileFromCloud(index, file);
                  }}
                >
                  <Trash2 />
                </Button>
              </div>

              {addnote && (
                <form className="flex xl:w-[500px] gap-2 items-center">
                  <Textarea
                    onChange={(e) =>
                      (document.getElementById(file.name).innerHTML =
                        e.target.value)
                    }
                  />
                  <Button onClick={() => setAddNote(false)}>Add</Button>
                </form>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
