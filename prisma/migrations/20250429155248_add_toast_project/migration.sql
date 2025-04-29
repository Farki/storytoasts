/*
  Warnings:

  - You are about to drop the column `image` on the `Toast` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Toast` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Toast` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Toast" DROP COLUMN "image",
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL;
