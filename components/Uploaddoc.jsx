"use client";

import { UploadButton } from "@/utils/uploadthing";
import { UploadDropzone } from "@/utils/uploadthing";

export default function Uploaddoc() {
  return (
    <UploadDropzone
      endpoint="pdfUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
