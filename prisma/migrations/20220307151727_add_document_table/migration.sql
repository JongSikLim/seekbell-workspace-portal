/*
  Warnings:

  - You are about to drop the column `cafeteria_id_fk` on the `Cafeteria_menu` table. All the data in the column will be lost.
  - You are about to drop the column `cafeteria_id_fk` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `user_id_fk` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `User_id` on the `Order_detail` table. All the data in the column will be lost.
  - You are about to drop the column `menu_id_fk` on the `Order_detail` table. All the data in the column will be lost.
  - Added the required column `cafeteria_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `menu_id` to the `Order_detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Order_detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Order_detail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cafeteria_menu" DROP CONSTRAINT "Cafeteria_menu_cafeteria_id_fk_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_cafeteria_id_fk_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_user_id_fk_fkey";

-- DropForeignKey
ALTER TABLE "Order_detail" DROP CONSTRAINT "Order_detail_User_id_fkey";

-- DropForeignKey
ALTER TABLE "Order_detail" DROP CONSTRAINT "Order_detail_menu_id_fk_fkey";

-- DropForeignKey
ALTER TABLE "Order_detail" DROP CONSTRAINT "Order_detail_order_id_fk_fkey";

-- AlterTable
ALTER TABLE "Cafeteria_menu" DROP COLUMN "cafeteria_id_fk",
ADD COLUMN     "cafeteria_id" TEXT;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "cafeteria_id_fk",
DROP COLUMN "user_id_fk",
ADD COLUMN     "cafeteria_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order_detail" DROP COLUMN "User_id",
DROP COLUMN "menu_id_fk",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "menu_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "keywords" TEXT[],
    "specific_index" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cafeteria_menu" ADD CONSTRAINT "Cafeteria_menu_cafeteria_id_fkey" FOREIGN KEY ("cafeteria_id") REFERENCES "Cafeteria"("cafeteria_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_cafeteria_id_fkey" FOREIGN KEY ("cafeteria_id") REFERENCES "Cafeteria"("cafeteria_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_detail" ADD CONSTRAINT "Order_detail_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_detail" ADD CONSTRAINT "Order_detail_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "Cafeteria_menu"("menu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_detail" ADD CONSTRAINT "Order_detail_order_id_fk_fkey" FOREIGN KEY ("order_id_fk") REFERENCES "Order"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;
