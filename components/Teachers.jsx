"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function Teachers({ classcode }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const GetStudents = async () => {
      try {
        const req = await fetch("/api/classes/teacher?classcode=" + classcode, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const res = await req.json();

        setStudents(res);
      } catch (err) {
        console.log("error");
      }
    };
    GetStudents();
  }, []);

  return (
    <div className="sm:w-full w-[300px]">
      <h1 className="text-4xl w-[90%] underline p-5 ">Teacher:</h1>
      <div className="sm:w-fit w-[250px] ">
        <Table>
          <TableCaption>A list of teachers.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right"></TableHead>
              <TableHead>Teacher Name</TableHead>
              <TableHead>Teacher Mail</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <Avatar>
                    <AvatarImage src={student.teacherimg} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{student.teachername}</TableCell>
                <TableCell>{student.teachermail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
