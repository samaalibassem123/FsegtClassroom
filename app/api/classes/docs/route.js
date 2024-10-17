import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const classcode = searchParams.get("classcode");
    //db connection
    const db = await pool.getConnection();

    const query = `SELECT d.* FROM  documents AS d , classdocs AS cd WHERE ( d.docurl = cd.docurl ) AND ( cd.classcode = '${classcode}' ) ;`;
    const [rows] = await db.execute(query);

    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function POST(req) {
  try {
    const { classcode, docurl, docname, dockey } = await req.json();
    //db connection
    const db = await pool.getConnection();

    const query = `SELECT * FROM classdocs WHERE ( docurl = '${docurl}' ) AND ( classcode = '${classcode}' ) ;`;
    const [rows] = await db.execute(query);
    if (rows.length === 0) {
      const [rows1] = await db.execute(
        `SELECT docurl FROM documents WHERE ( docurl = '${docurl}' )`
      );
      if (rows1.length === 0) {
        const query1 = `INSERT INTO documents VALUES ( '${docurl}', '${docname}', '${dockey}' ) ;`;
        await db.execute(query1);
      }
      const query2 = `INSERT INTO classdocs VALUES ( '${classcode}', '${docurl}' ) ;`;
      await db.execute(query2);
      return NextResponse.json({ ok: true });
    }
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function DELETE(req) {
  try {
    const { docurl, classcode } = await req.json();
    //db connection
    const db = await pool.getConnection();
    //delete documents
    const query2 = `DELETE FROM classdocs WHERE ( classcode = '${classcode}' )  AND ( docurl = '${docurl}' ) ;`;

    await db.execute(query2);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false });
  }
}
