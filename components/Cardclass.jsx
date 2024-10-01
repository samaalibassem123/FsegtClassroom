import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { BookText, Video, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Cardclass({ classId = "test" }) {
  return (
    <div className="flex flex-col gap-7 w-[300px] h-[300px] border p-2 rounded-lg bg-white">
      <div className="flex justify-between items-center  py-2 border-b-2">
        <h1 className=" font-semibold text-xl text-white bg-black w-fit rounded-lg p-2">
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
        <div className=" text-gray-500 flex gap-2">
          <span className="underline">Classname:</span>
          <span className=" no-underline">Math</span>
        </div>
        <div className=" text-gray-500 flex gap-2">
          <span className="underline">Code:</span>
          <span className=" no-underline select-all">Q67msf</span>
        </div>
      </div>
      <div className="w-full flex justify-center  items-center">
        <Button>Enter</Button>
      </div>
      <div className="flex items-center justify-evenly">
        <Button asChild className="bg-gray-400">
          <Link href={`/${classId}/meet`} title="video call">
            <Video />
          </Link>
        </Button>
        <Button asChild className="bg-orange-300">
          <Link href={`/${classId}/docs`} title="documents">
            <BookText />
          </Link>
        </Button>
        <Button asChild className="bg-blue-400">
          <Link href={`/${classId}/chat`} title="Chat">
            <MessageCircle />
          </Link>
        </Button>
      </div>
      <div></div>
    </div>
  );
}
