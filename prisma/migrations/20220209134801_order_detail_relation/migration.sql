/*
  Warnings:

  - Added the required column `order_id_fk` to the `Order_detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order_detail" ADD COLUMN     "order_id_fk" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order_detail" ADD CONSTRAINT "Order_detail_order_id_fk_fkey" FOREIGN KEY ("order_id_fk") REFERENCES "Order"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;
