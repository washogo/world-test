import prisma from "@/app/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: string;
}

// いいねを追加するPOST API
export async function POST(request: NextRequest) {
  const { userId, postId } = await request.json();

  if (!userId || !postId) {
    return NextResponse.json(
      { error: "userIdかpostIdが見つかりません" },
      { status: 400 }
    );
  }

  try {
    const like = await prisma.likes.create({
      data: {
        userId: Number(userId),
        postId: Number(postId),
      },
    });

    return NextResponse.json(like, { status: 201 });
  } catch (error) {
    console.error("「いいね」の作成に失敗:", error);
    return NextResponse.json(
      { error: "いいねができませんでした" },
      { status: 500 }
    );
  }
}

// いいねを削除するDELETE API
export async function DELETE(request: NextRequest) {
  const { userId, postId } = await request.json();

  if (!userId || !postId) {
    return NextResponse.json(
      {
        success: false,
        message: "userIdまたはpostIdが不足しています",
      },
      { status: 400 }
    );
  }

  try {
    const deletedLike = await prisma.likes.deleteMany({
      where: {
        userId: Number(userId),
        postId: Number(postId),
      },
    });

    if (deletedLike.count === 0) {
      return NextResponse.json(
        { success: false, message: "いいねが見つかりません" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("いいねの削除エラー:", error);
    return NextResponse.json(
      { success: false, message: "いいねの削除に失敗" },
      { status: 500 }
    );
  }
}
