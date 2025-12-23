import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    console.log("REGISTER API HIT");

    const body = await req.json();
    console.log("BODY:", body);

    const { email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("HASHED PASSWORD OK");

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    console.log("USER CREATED:", user.id);

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("REGISTER ERROR FULL:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
