"use client";
import React, { useState } from "react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { BookText, Video, MessageCircle } from "lucide-react";
import Link from "next/link";
import Spinner from "./Spinner";
import { Files } from "lucide-react";
import copy from "clipboard-copy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cardclass({ classId = "test" }) {
  const [EnterClicked, EnterIsClicked] = useState(false);
  const [docClicked, docIsClicked] = useState(false);
  const [meetClicked, meetIsClicked] = useState(false);
  const [chatClicked, chatIsClicked] = useState(false);
  const notify = () =>
    toast.success("copied !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleCopyClick = async (text) => {
    try {
      await copy(text);
      notify();
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-7 w-[300px] h-[300px] border p-2 rounded-lg bg-white drop-shadow-sm">
        <div className="flex justify-between items-center  py-2 border-b-2">
          <h1 className=" font-semibold text-md text-white bg-gradient-to-br from-blue-200 to-orange-200 w-fit rounded-lg p-1 px-2">
            2BI
          </h1>
          <span className="text-black">Sii mo7ssen</span>
          {/*<Avatar>
          <AvatarImage src="/public/user-round.svg" alt="avatar img" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>*/}
          <div className="size-10 bg-gray-200 rounded-full" />
        </div>
        <div>
          <div className=" text-gray-500 flex gap-2 text-xl">
            <span>Classname:</span>
            <span>Math</span>
          </div>
          <div className=" text-gray-500 flex items-center gap-1">
            <span>Code:</span>
            <span className=" underline select-all">Q67msf</span>
            <div onClick={() => handleCopyClick("Q67msf")}>
              <Files className=" bg-black/20 active:scale-75 rounded-sm p-1 hover:cursor-pointer size-6" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center  items-center">
          <Button onClick={() => EnterIsClicked(true)}>
            {EnterClicked ? (
              <Spinner />
            ) : (
              <Link href={`/${classId}`}>Enter</Link>
            )}
          </Button>
        </div>
        <div className="flex items-center justify-evenly">
          <Button
            onClick={() => meetIsClicked(true)}
            asChild
            className="bg-gray-400"
          >
            <Link href={`/meet`} title="video call">
              {meetClicked ? <Spinner /> : <Video />}
            </Link>
          </Button>
          <Button
            onClick={() => docIsClicked(true)}
            asChild
            className="bg-orange-300"
          >
            <Link href={`/${classId}/docs`} title="documents">
              {docClicked ? <Spinner /> : <BookText />}
            </Link>
          </Button>
          <Button
            onClick={() => chatIsClicked(true)}
            asChild
            className="bg-blue-400"
          >
            <Link href={`/${classId}/chat`} title="Chat">
              {chatClicked ? <Spinner /> : <MessageCircle />}
            </Link>
          </Button>
        </div>
        <div></div>
      </div>
    </>
  );
}
