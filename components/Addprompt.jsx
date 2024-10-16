"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CirclePlus } from "lucide-react";
import { useSession } from "next-auth/react";
import Spinner from "./Spinner";

export function Addprompt({ teachermail, role }) {
  const { data: session } = useSession();
  const [err, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const addClass = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = e.target;
    const ClassCode = formData.classcode.value;
    const ClassName = formData.classname.value;
    const Niveau = formData.niv.value;

    //Add the class in the database
    try {
      const req = await fetch("/api/classes/teacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          classcode: ClassCode,
          classname: ClassName,
          classniv: Niveau,
          teacherMail: teachermail,
          teachername: session?.user?.name,
          teacherimg: session?.user?.image,
        }),
      });
      const res = await req.json();
      console.log(res);
      if (!res.ok) {
        setError(true);
      } else {
        setError(false);
        window.location.reload();
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" cursor-pointer shadow-sm bg-black/50 dark:bg-white/20 hover:opacity-70  transition-all border h-[300px] w-[300px] rounded-lg  flex items-center justify-center">
          <CirclePlus className="size-10" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a class</DialogTitle>
          <DialogDescription>Create your own class</DialogDescription>
        </DialogHeader>
        <form onSubmit={addClass} method="POST">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Classname:
              </Label>
              <Input
                name="classname"
                placeholder="type your class name"
                className="col-span-3"
                required="true"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Code:
              </Label>
              <div className="col-span-3 falex flex-col items-center w-full">
                <Input
                  name="classcode"
                  placeholder="*******"
                  className=""
                  required="true"
                />
                {err && (
                  <span className="text-sm text-red-400">
                    Code is taken try Another one
                  </span>
                )}
              </div>
            </div>{" "}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Niveau:
              </Label>
              <Input
                name="niv"
                placeholder="exemple: 2BI"
                className="col-span-3"
                required="true"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">{loading ? <Spinner /> : "Submit"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
