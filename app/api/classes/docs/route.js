import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const classcode = searchParams.get("classcode");
    //db connection
    const db = await pool.getConnection();

    const query = `SELECT d.* FROM  documents AS d , classdocs AS cd WHERE ( d.docurl = cd.docurl ) AND ( cd.classcode = ${classcode} ) ;`;
    const [rows] = await db.execute(query);

    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json(err);
  }
}
