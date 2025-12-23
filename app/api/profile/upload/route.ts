import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const email = formData.get("email") as string;

  if (!file || !email) {
    return NextResponse.json({ message: "Missing data" }, { status: 400 });
  }

  // Validate file type
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ message: "Only images allowed" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public/uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filename = `${Date.now()}-${file.name}`;
  const filepath = path.join(uploadDir, filename);

  fs.writeFileSync(filepath, buffer);

  await prisma.user.update({
    where: { email },
    data: { image: `/uploads/${filename}` },
  });

  return NextResponse.json({ image: `/uploads/${filename}` });
}
