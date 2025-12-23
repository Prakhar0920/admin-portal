/*
  Warnings:

  - You are about to drop the column `image` on the `ActivityLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ActivityLog" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT;
