import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "lib/auth";
import prisma from "lib/prisma";

export async function GET() {
  // If Prisma isn't configured (e.g. no DATABASE_URL), don't throw during build
  if (!prisma) {
    return NextResponse.json([]);
  }

  try {
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
  } catch (error) {
    console.error("[guestbook][GET] Prisma error", error);
    // Return empty list so failures don't break static data collection/build
    return NextResponse.json([]);
  }
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

  if (!prisma) {
    return NextResponse.json(
      { error: "Database not configured" },
      { status: 500 }
    );
  }

  try {
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
  } catch (error) {
    console.error("[guestbook][POST] Prisma error", error);
    return NextResponse.json(
      { error: "Failed to save entry" },
      { status: 500 }
    );
  }
}
