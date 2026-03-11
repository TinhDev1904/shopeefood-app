import { prisma } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, name, externalId, avatarUrl } = await request.json();

    if (!email || !externalId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await prisma.user.upsert({
      where: { email },
      update: {
        name,
        externalId,
  
      },
      create: {
        email,
        name,
        externalId,
     
        passwordHash: "STACK_AUTH_USER",
      },
    });

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (err) {
    console.error("API sync-user error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
