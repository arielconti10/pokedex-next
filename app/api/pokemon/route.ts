import { NextResponse } from "next/server";
import { db } from "../../../server/db";

export async function GET() {
  try{
    const data = await db.selectFrom("pokemon").selectAll().limit(10).execute()
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
