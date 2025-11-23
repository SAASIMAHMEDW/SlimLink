import { database } from "@/service/database";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await database.pingDb();
  return NextResponse.json({
    ok: res,
    version: "1.0",
    datetime: new Date().toISOString(),
  });
}
