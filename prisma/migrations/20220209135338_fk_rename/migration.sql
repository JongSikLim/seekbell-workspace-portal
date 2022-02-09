/*
  Warnings:

  - You are about to drop the column `Cafeteria_id` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `Order_detail_id_fk` on the `User` table. All the data in the column will be lost.
  - Added the required column `cafeteria_id_fk` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_Cafeteria_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_Order_detail_id_fk_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "Cafeteria_id",
ADD COLUMN     "cafeteria_id_fk" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "Order_detail_id_fk",
ADD COLUMN     "order_detail_id" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_order_detail_id_fkey" FOREIGN KEY ("order_detail_id") REFERENCES "Order_detail"("order_detail_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_cafeteria_id_fk_fkey" FOREIGN KEY ("cafeteria_id_fk") REFERENCES "Cafeteria"("cafeteria_id") ON DELETE RESTRICT ON UPDATE CASCADE;
