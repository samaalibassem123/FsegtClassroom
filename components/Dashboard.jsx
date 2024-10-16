"use client";
import React, { useEffect, useState } from "react";
import { JoinPrompt } from "./JoinPrompt";
import { motion } from "framer-motion";
import { ShowAnimation } from "@/utils/animation";
import { Addprompt } from "./Addprompt";
import Cardclass from "./Cardclass";
import { useSession } from "next-auth/react";
export default function Dashboard({ UserMail }) {
  const { data: session } = useSession();

  const [ClassCreated, setClassCreated] = useState([]);
  const [ClassJoined, setClassJoined] = useState([]);

  useEffect(() => {
    //Get classes that was created by the user
    const getClassesC = async () => {
      try {
        const req = await fetch(
          "/api/classes/created?teachername=" + UserMail, // Here we use Usermail as a teacher mail
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const res = await req.json();
        setClassCreated(res);
      } catch (err) {
        console.log(err);
      }
    };
    getClassesC();

    //Get classes joined by the user
    const getClassJ = async () => {
      try {
        const req = await fetch(
          "/api/classes/joined?studentmail=" + UserMail, // Here we use UserMail as a student mail
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const res = await req.json();
        setClassJoined(res);
      } catch (err) {
        console.log(err);
      }
    };
    getClassJ();
  }, []);

  return (
    <motion.div
      variants={ShowAnimation}
      initial="hidden"
      animate="visible"
      className="p-5 flex flex-col gap-7 "
    >
      {/*joining a class */}
      <motion.div variants={ShowAnimation} className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold underline">Join a Class:</h1>
        <motion.div
          className="flex gap-6 md:flex-row flex-col items-center "
          variants={ShowAnimation}
        >
          <motion.div variants={ShowAnimation}>
            <JoinPrompt
              studentMail={UserMail}
              studentName={session?.user?.name}
              studentImg={session?.user?.image}
            />
          </motion.div>
          {/*classes */}
          {ClassJoined.map((item, index) => (
            <motion.div key={index} variants={ShowAnimation}>
              <Cardclass
                teachername={session?.user?.name}
                teacherimg={session?.user?.image}
                classname={item.classname}
                classcode={item.classcode}
                classniv={item.classniv}
                role="student"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/*creating a class */}
      <motion.div variants={ShowAnimation} className="flex  flex-col gap-6">
        <h1 className="text-3xl font-semibold underline">Add a Class:</h1>
        <motion.div
          className="flex flex-wrap gap-6 md:flex-row flex-col items-center "
          variants={ShowAnimation}
        >
          <motion.div variants={ShowAnimation}>
            <Addprompt teachermail={UserMail} />
          </motion.div>
          {/*classes */}
          {ClassCreated.map((item, index) => (
            <motion.div key={index} variants={ShowAnimation}>
              <Cardclass
                teachername={session?.user?.name}
                teacherimg={session?.user?.image}
                classname={item.classname}
                classcode={item.classcode}
                classniv={item.classniv}
                role="teacher"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
