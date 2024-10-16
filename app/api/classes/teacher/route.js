import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function POST(req) {
  try {
    const {
      classcode,
      classname,
      classniv,
      teacherMail,
      teachername,
      teacherimg,
    } = await req.json();
    //db connection
    const db = await pool.getConnection();

    //First we need to check if the class already exist
    const query1 = `SELECT classcode FROM classes WHERE (classcode = '${classcode}') `;
    const [rows] = await db.execute(query1);

    //If the class doesn’t exist we create a class and a teacher
    if (rows.length === 0) {
      //first check if he is already have a teacher identity in the teacher table
      const query2 = `SELECT teachermail FROM teacher WHERE teachermail='${teacherMail}'`;
      const [rows2] = await db.execute(query2);
      if (rows2.length === 0) {
        await db.execute(
          `INSERT INTO teacher VALUES( '${teacherMail}' , '${teachername}', '${teacherimg}' )`
        );
      }
      await db.execute(
        `INSERT INTO classes VALUES ('${classcode}' , '${classname}', '${classniv}', '${teacherMail}')`
      );
      db.release();
      return NextResponse.json({ ok: true });
    } else {
      db.release();
      return NextResponse.json({ ok: false });
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
