"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function Students({ classcode }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const GetStudents = async () => {
      try {
        const req = await fetch("/api/classes/student?classcode=" + classcode, {
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
      <h1 className="text-4xl w-[90%] underline p-5 ">Students:</h1>
      <div className="sm:w-fit w-[250px] ">
        <Table>
          <TableCaption>A list of students.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right"></TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Student Mail</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <Avatar>
                    <AvatarImage src={student.studentimg} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{student.studentname}</TableCell>
                <TableCell>{student.studentmail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
