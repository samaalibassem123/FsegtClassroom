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

export function JoinPrompt() {
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
        <form action="">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Code:
              </Label>
              <Input
                id="username"
                placeholder="*******"
                className="col-span-3"
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
