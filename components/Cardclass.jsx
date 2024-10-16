"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { BookText, Video, MessageCircle } from "lucide-react";
import Link from "next/link";
import Spinner from "./Spinner";
import { Files } from "lucide-react";
import copy from "clipboard-copy";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Delete } from "./Delete";

export default function Cardclass({
  classcode,
  classname,
  teacherimg,
  teachername,
  classniv,
  role,
}) {
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
            {classniv}
          </h1>
          <span className="text-black">{teachername}</span>
          <div>
            <Avatar>
              <AvatarImage src={teacherimg} alt="avatar img" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div>
          <div className=" text-gray-500 flex gap-2 text-xl">
            <span>Classname:</span>
            <span>{classname}</span>
          </div>
          <div className=" text-gray-500 flex items-center gap-1">
            <span>Code:</span>
            <span className=" underline select-all">{classcode}</span>
            <div onClick={() => handleCopyClick(classcode)}>
              <Files className=" bg-black/20 active:scale-75 rounded-sm p-1 hover:cursor-pointer size-6" />
            </div>
          </div>
        </div>
        <div className="w-full gap-2 flex justify-center  items-center">
          <Button onClick={() => EnterIsClicked(true)}>
            {EnterClicked ? (
              <Spinner />
            ) : (
              <Link href={`/${classcode}/docs`}>Enter</Link>
            )}
          </Button>
          {role === "teacher" && <Delete CLASSCODE={classcode} />}
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
            <Link href={`/${classcode}/docs`} title="documents">
              {docClicked ? <Spinner /> : <BookText />}
            </Link>
          </Button>
          <Button
            onClick={() => chatIsClicked(true)}
            asChild
            className="bg-blue-400"
          >
            <Link href={`/${classcode}/chat`} title="Chat">
              {chatClicked ? <Spinner /> : <MessageCircle />}
            </Link>
          </Button>
        </div>
        <div></div>
      </div>
    </>
  );
}
