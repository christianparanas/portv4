import { PrismaClient } from "@prisma/client";

let prisma = null;

// Avoid initializing Prisma when DATABASE_URL is not set (e.g. on Vercel builds
// without DB configuration). This prevents Prisma from throwing during import
// and allows the app to fall back to mock data.
if (process.env.DATABASE_URL) {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
}

export default prisma;
