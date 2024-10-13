"use client";
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );
  return (
    <GridLayout
      tracks={tracks}
      style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
    >
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}

export default function MeetForm() {
  const { data: session } = useSession();
  const [room, setRoom] = useState("");
  const name = session?.user?.name;
  const [token, setToken] = useState("");

  const Handlesubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setRoom(form.code.value);
    try {
      const resp = await fetch(
        `/api/get-participant-token?room=${form.code.value}&username=${name}`
      );
      const data = await resp.json();
      setToken(data.token);
    } catch (e) {
      console.error(e);
    }
  };

  if (room === "") {
    return (
      <div className="w-full min-h-svh flex justify-center items-center  sm:p-0 ">
        <form onSubmit={Handlesubmit} className="flex flex-col gap-4">
          <Label>Meet code:</Label>
          <Label className="text-gray-400">
            Enter the Code of the meet to join
          </Label>
          <Input
            type="text"
            name="code"
            className=" dark:border-white"
            required="true"
          />
          <Button type="submit">Join</Button>
          <Button
            type="button"
            asChild
            className=" border hover:opacity-50 transition-all border-black dark:border-white bg-black text-transparent bg-gradient-to-tr from-orange-400 bg-clip-text to-blue-400"
          >
            <Link href="/" className="">
              Go Back to Dashboard
            </Link>
          </Button>
        </form>
      </div>
    );
  }

  if (token === "") {
    return <div>Getting token...</div>;
  } else {
    return (
      <div className="w-full h-screen">
        <LiveKitRoom
          onDisconnected={() => setRoom("")}
          video={true}
          audio={true}
          token={token}
          serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
          // Use the default LiveKit theme for nice styles.
          data-lk-theme="default"
        >
          {/* Your custom component with basic video conferencing functionality. */}
          <MyVideoConference />
          {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
          <RoomAudioRenderer />
          {/* Controls for the user to start/stop audio, video, and screen
      share tracks and to leave the room. */}
          <ControlBar />
        </LiveKitRoom>
      </div>
    );
  }
}
