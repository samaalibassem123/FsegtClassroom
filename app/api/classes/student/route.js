import pool from "@/lib/mysql";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { studentmail, studentname, studentimg, classcode } = await req.json();
  //db connection
  const db = await pool.getConnection();

  //First we need to check if the code that was submited by the user exist in classes table
  const query1 = `SELECT classcode FROM classes WHERE (classcode = '${classcode}') ;`;
  const [rows1] = await db.execute(query1);

  //If he is already exist we need to check if the user joined the class before
  if (rows1.length != 0) {
    const query2 = `SELECT studentmail FROM studentclass WHERE ( studentmail = '${studentmail}' ) AND ( classcode = '${classcode}' ) ;`;
    const [rows2] = await db.execute(query2);

    if (rows2.length != 0) {
      return NextResponse.json({ msg: "You are already joined the class" });
    } else {
      try {
        //if he doesn't exist in the students table we add him first
        const [FindStudent] = await db.execute(
          `SELECT studentmail FROM students WHERE studentmail= '${studentmail}';`
        );
        console.log(FindStudent.length);
        if (FindStudent.length == 0) {
          await db.execute(
            `INSERT INTO students VALUES( '${studentmail}' , '${studentname}', '${studentimg}' );`
          );
        }
        //then we add him to the studentclass table
        await db.execute(
          `INSERT INTO studentclass VALUES ( '${classcode}', '${studentmail}');`
        );
        return NextResponse.json({ msg: "Joined Succesfully" });
      } catch (err) {
        return NextResponse.json({
          msg: err,
        });
      }
    }
  } else {
    return NextResponse.json({ msg: "The code doesn't exist" });
  }
}
