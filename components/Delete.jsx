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

import { toast } from "react-toastify";

export function Delete({ CLASSCODE }) {
  const Error = () => {
    toast.warn("Error in the server try another time!", {
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
  //Delete a class
  const HandleSubmit = async (e) => {
    e.preventDefault();

    const req = await fetch("/api/classes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        classcode: CLASSCODE,
      }),
    });
    const res = await req.json();
    if (!res.ok) {
      Error();
    } else {
      window.location.reload();
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-500">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Are you sure You want to Delete this class ?
          </DialogTitle>
          <DialogDescription>
            if you delete it you are going to lose everything related to it such
            documents and more
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={HandleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              id="but"
              onClick={() =>
                (document.getElementById("but").innerHTML = "Loading...")
              }
              className="bg-red-500"
            >
              Confirm
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
