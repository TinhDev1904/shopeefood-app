/*
  Warnings:

  - A unique constraint covering the columns `[externalId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "externalId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users_externalId_key" ON "users"("externalId");
