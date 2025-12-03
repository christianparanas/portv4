import { PrismaClient } from "@prisma/client";

let prismaSingleton = null;

// Lazily create a PrismaClient instance the first time it's needed.
// This avoids connecting to the database during module evaluation, which
// can break Vercel builds if the DB is unreachable or misconfigured.
export function getPrisma() {
  if (!process.env.DATABASE_URL) return null;

  if (prismaSingleton) return prismaSingleton;

  try {
    prismaSingleton = new PrismaClient();
    return prismaSingleton;
  } catch (error) {
    console.error("[prisma] Failed to initialize PrismaClient", error);
    return null;
  }
}
