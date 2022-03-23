/*
  Warnings:

  - Added the required column `image` to the `guests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "guests" ADD COLUMN     "image" VARCHAR(256);
