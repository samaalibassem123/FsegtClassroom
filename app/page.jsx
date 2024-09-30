import { ModeToggle } from "@/components/ModeToggle";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className=" relative">
      <div className=" -z-20 min-h-svh w-full relative">
        <div className=" absolute sm:top-[50%] top-[10%] sm:left-[10%] left-[1%] sm:size-[200px] size-[100px] bg-blue-300 dark:bg-blue-200 rounded-full  " />
        <div className=" absolute sm:top-[20%]  top-[70%] sm:left-[70%] left-[70%] sm:size-[200px] size-[100px] bg-orange-300 dark:bg-orange-200 rounded-full  " />
      </div>
      <div className=" absolute top-0 w-full  flex items-center justify-end p-2 z-30">
        <ModeToggle />
      </div>

      <div className=" flex items-center justify-center absolute top-0 left-0 min-h-svh w-full bg-transparent backdrop-blur-3xl">
        <Welcome />
      </div>
    </div>
  );
}
