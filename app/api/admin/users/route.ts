import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(users);
}

export async function PATCH(req: Request) {
  const { userId, role } = await req.json();

  if (!userId || !role) {
    return NextResponse.json(
      { message: "Invalid request" },
      { status: 400 }
    );
  }

  await prisma.user.update({
    where: { id: userId },
    data: { role },
  });

  return NextResponse.json({ message: "Role updated" });
}

/* ✅ ADD THIS */
export async function DELETE(req: Request) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }

  await prisma.user.delete({
    where: { id: userId },
  });

  return NextResponse.json({ message: "User deleted successfully" });
}
