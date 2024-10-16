"use client";
import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import SplitTextAnimation from "./SplitTextAnimation";
import { RingLoader } from "react-spinners";

export default function ChatUI() {
  const { data: session } = useSession();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const name = session?.user?.name;
  const HandleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const text = form.text.value;
    try {
      const req = await fetch("/api/aichat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text }),
      });
      const { res } = await req.json();
      setLoading(false);
      setResult(res);
    } catch (err) {
      setLoading(false);
      setResult(err);
    }
  };
  return (
    <div className=" flex flex-col gap-2 p-5">
      <form
        action=""
        onSubmit={HandleSubmit}
        className="flex drop-shadow-md flex-col gap-2"
      >
        <Textarea
          placeholder="type what you want to ask"
          name="text"
          className=" border-2"
        />
        <Button className=" border-black w-[200px] bg-gradient-to-tr from-white/30 to-blue-500 hover:opacity-50 transition-all">
          Sent
        </Button>
      </form>

      {!result ? (
        <div className="h-[500px] flex items-center w-full text-center justify-center">
          <h1 className="text-3xl  drop-shadow-md font-semibold">
            <span className="text-transparent bg-gradient-to-tr from-orange-300 to-blue-400  bg-clip-text">
              Hello {name},
            </span>
            <br /> How Can I help you Today?
          </h1>
        </div>
      ) : loading ? (
        <RingLoader color="#0052ff" size={30} />
      ) : (
        <div className="p-2 rounded-lg  dark:bg-white/10 bg-black/5">
          <SplitTextAnimation text={result} />
        </div>
      )}
    </div>
  );
}
