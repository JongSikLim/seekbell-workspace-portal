/*
  Warnings:

  - Added the required column `salt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderState" AS ENUM ('PENDING', 'COMPLETED');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "order_state" "OrderState" NOT NULL DEFAULT E'PENDING';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "salt" TEXT NOT NULL;
