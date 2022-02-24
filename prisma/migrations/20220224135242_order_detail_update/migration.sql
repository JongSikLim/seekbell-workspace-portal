/*
  Warnings:

  - You are about to drop the column `order_detail_id` on the `User` table. All the data in the column will be lost.
  - Added the required column `User_id` to the `Order_detail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_order_detail_id_fkey";

-- AlterTable
ALTER TABLE "Order_detail" ADD COLUMN     "User_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "order_detail_id";

-- AddForeignKey
ALTER TABLE "Order_detail" ADD CONSTRAINT "Order_detail_User_id_fkey" FOREIGN KEY ("User_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
