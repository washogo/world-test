import { authOptions } from "../../lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "未ログイン" }, { status: 401 });
  }
  return NextResponse.json({ user: session.user }, { status: 200 });
}
