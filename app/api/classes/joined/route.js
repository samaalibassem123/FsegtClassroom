import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const studentMail = searchParams.get("studentmail");
    //db connection
    const db = await pool.getConnection();
    //sql code
    const query = `SELECT c.* , t.teachername , t.teacherimg FROM classes AS c , teacher AS t WHERE ( t.teachermail = c.teachermail ) AND  ( c.classcode IN ( SELECT classcode FROM studentclass WHERE studentmail = '${studentMail}'  ) );`;
    //excute query
    const [rows] = await db.execute(query);
    db.release();
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
