/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `tokens` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "manufacture" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "rentPerDay" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tokens_token_key" ON "tokens"("token");
