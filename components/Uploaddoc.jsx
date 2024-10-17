"use client";
import { react, useState, useEffect } from "react";
import { UploadDropzone } from "@/utils/uploadthing";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { Trash2, FileText } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Skeleton } from "./ui/skeleton";

export default function Uploaddoc({ ClassId }) {
  const dataTable = ClassId.split("%20");
  const classcode = dataTable[0];
  const role = dataTable[1];

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

  const [loading, setLoading] = useState(true);
  const [Documents, setDocuments] = useState([]);

  //add file to db
  const AddFileToDb = async (Classcode, Docurl, Docname, key) => {
    try {
      const req = await fetch("/api/classes/docs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          classcode: Classcode,
          docurl: Docurl,
          docname: Docname,
          dockey: key,
        }),
      });
      const res = await req.json();
      if (res.ok) {
        success("Uploaded Succesfully !");
      } else {
        Error("Error in Uploading Try Again ! ");
      }
    } catch (err) {
      console.log(err);
    }
  };
  //delete Documents
  const DeleteFileFromCloud = async (id, file) => {
    document.getElementById(id).innerHTML = "Loading...";

    try {
      //delete file from the cloud
      const res = await fetch("/api/uploadthing", {
        method: "DELETE",
        body: JSON.stringify({ fileKey: file.key }),
      });
      const resp = await res.json();

      //delete from db
      const fileurl = file.url ? file.url : file.doc_url;
      const req = await fetch("/api/classes/docs", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ docurl: fileurl, classcode: classcode }),
      });
      const ok = await req.json();

      if (resp.msg.success && ok) {
        success("Deleted Succesfully !");
        setDocuments(
          Documents.filter((document) => document.name !== file.name)
        );
      } else {
        Error("ERROR in deleting try Again !");
        document.getElementById(id).innerHTML = "Try again";
      }
    } catch (err) {
      document.getElementById(id).innerHTML = "Try again";
      Error(err);
      throw err;
    }
  };
  //get documents form the db
  useEffect(() => {
    const FetchDocs = async () => {
      try {
        const req = await fetch("/api/classes/docs?classcode=" + classcode, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const Docs = await req.json();
        setDocuments(Docs);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    FetchDocs();
  }, []);

  return (
    <div className=" md:p-3 flex flex-col w-full gap-2 drop-shadow-md">
      {/*check if the user have the role of a teacher so he can upload files or not */}
      {role === "teacher" && (
        <UploadDropzone
          className=" h-[250px] w-[280px] cursor-pointer dark:border-white ut-allowed-content:hidden ut-button:bg-blue-400"
          endpoint="pdfUploader"
          onClientUploadComplete={(res) => {
            console.log(res);
            AddFileToDb(classcode, res[0].url, res[0].name, res[0].key);
            setDocuments([
              ...Documents,
              {
                name: res[0].name,
                url: res[0].url,
                type: res[0].type,
                key: res[0].key,
              },
            ]);
          }}
          onUploadError={(error) => {
            // Do something with the error.
            Error(error.message);
          }}
        />
      )}

      {/*documents container */}
      {Documents &&
        Documents.map((file, index) => (
          <div
            className="dark:border-white flex justify-between   md:flex-row items-start gap-6 flex-col h-fit rounded-lg p-5 border sm:w-full mr-2  shadow-sm"
            key={index}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between w-full ">
                <span className=" flex items-center gap-1 underline">
                  <FileText />
                  <a
                    href={file.url ? file.url : file.docurl}
                    target="_blank"
                    className="text-sm text-gray-600"
                  >
                    {file.name ? file.name : file.doc_name}
                  </a>
                </span>
              </div>
            </div>

            {/*Hide the  buttons when the role of user is a student */}
            {role === "teacher" && (
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
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
              </div>
            )}
          </div>
        ))}
      {loading && (
        <>
          <div className="w-full flex items-center justify-between p-5 rounded-lg border">
            <div className="flex flex-col gap-2">
              <Skeleton className="w-96 h-2" />
              <Skeleton className="w-96 h-10" />
            </div>
            {
              <div className="flex gap-2">
                <Skeleton className="w-10 h-10" />
              </div>
            }
          </div>
          <div className="w-full flex items-center justify-between p-5 rounded-lg border">
            <div className="flex flex-col gap-2">
              <Skeleton className="w-96 h-2" />
              <Skeleton className="w-96 h-10" />
            </div>
            {
              <div className="flex gap-2">
                <Skeleton className="w-10 h-10" />
              </div>
            }
          </div>
          <div className="w-full flex items-center justify-between p-5 rounded-lg border">
            <div className="flex flex-col gap-2">
              <Skeleton className="w-96 h-2" />
              <Skeleton className="w-96 h-10" />
            </div>
            {
              <div className="flex gap-2">
                <Skeleton className="w-10 h-10" />
              </div>
            }
          </div>
        </>
      )}
    </div>
  );
}
