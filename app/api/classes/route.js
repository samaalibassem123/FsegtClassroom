import pool from "@/lib/mysql";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const { classcode } = await req.json();
  //db connection
  try {
    const db = await pool.getConnection();
    //delete class from the classes table
    const query = `DELETE FROM classes WHERE ( classcode = '${classcode}' ) ;`;
    //delete students related to the class in the studentclass table
    const query2 = `DELETE FROM studentclass WHERE ( classcode = '${classcode}' )`;
    await db.execute(query);
    await db.execute(query2);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false });
  }
}
