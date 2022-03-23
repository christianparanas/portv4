/*
  Warnings:

  - Made the column `image` on table `guests` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "guests" ALTER COLUMN "image" SET NOT NULL;
