/*
  Warnings:

  - Added the required column `order` to the `Toast` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Toast" ADD COLUMN     "order" INTEGER NOT NULL;
