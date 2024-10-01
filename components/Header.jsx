import React from "react";
import { ModeToggle } from "./ModeToggle";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { signOut } from "@/auth";

export default async function Header() {
  const session = await auth();
  const Imageurl = session?.user?.image;
  return (
    <div className=" shadow-md p-2 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between select-none">
      <div>
        <h1 className="sm:text-3xl text-xl font-bold drop-shadow-md rounded-md bg-black dark:bg-white p-2">
          <span className="text-blue-400">Fsegt</span>
          <span className="text-white dark:text-black">classroom</span>
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit">Logout</Button>
        </form>
        <Avatar>
          <AvatarImage src={Imageurl} alt="avatar img" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ModeToggle />
      </div>
    </div>
  );
}
