"use client";
import React from "react";
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
import { LogIn } from "lucide-react";
import { toast } from "react-toastify";

export function JoinPrompt({ studentMail, studentName, studentImg }) {
  const Warning = (msg) => {
    toast.warn(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  //Join a class
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const Classcode = form.classcode.value;
    const req = await fetch("/api/classes/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentmail: studentMail,
        studentname: studentName,
        studentimg: studentImg,
        classcode: Classcode,
      }),
    });
    const res = await req.json();
    if (res.msg != "Joined Succesfully") {
      Warning(res.msg);
    } else {
      window.location.reload();
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" cursor-pointer shadow-sm bg-black/50 dark:bg-white/20 hover:opacity-70  transition-all border h-[300px] w-[300px] rounded-lg  flex items-center justify-center">
          <LogIn className="size-10" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join a class</DialogTitle>
          <DialogDescription>
            fill the filed with the right code that has been given from your
            teacher to join your class
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={HandleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Code:
              </Label>
              <Input
                id="classcode"
                placeholder="*******"
                className="col-span-3"
                required="true"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
