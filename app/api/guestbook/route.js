import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "lib/auth";
import prisma from "lib/prisma";

export async function GET() {
  const entries = await prisma.guests.findMany({
    orderBy: { updatedAt: "desc" },
  });
  return NextResponse.json(
    entries.map((entry) => ({
      id: entry.id.toString(),
      body: entry.body,
      name: entry.name,
      image: entry.image,
      updatedAt: entry.updatedAt,
    }))
  );
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

  const { email, name, image } = session.user;
  const body = await req.json();

  const newEntry = await prisma.guests.create({
    data: {
      email,
      body: (body.body || "").slice(0, 500),
      name,
      image,
    },
  });

  return NextResponse.json({
    id: newEntry.id.toString(),
    body: newEntry.body,
    name: newEntry.name,
    image: newEntry.image,
    updatedAt: newEntry.updatedAt,
  });
}
