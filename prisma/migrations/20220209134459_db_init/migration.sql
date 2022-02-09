-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "Order_detail_id_fk" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Cafeteria" (
    "cafeteria_id" TEXT NOT NULL,
    "cafeteria_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cafeteria_pkey" PRIMARY KEY ("cafeteria_id")
);

-- CreateTable
CREATE TABLE "Cafeteria_menu" (
    "menu_id" TEXT NOT NULL,
    "menu_title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "cafeteria_id_fk" TEXT,

    CONSTRAINT "Cafeteria_menu_pkey" PRIMARY KEY ("menu_id")
);

-- CreateTable
CREATE TABLE "Order" (
    "order_id" TEXT NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Cafeteria_id" TEXT NOT NULL,
    "user_id_fk" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "Order_detail" (
    "order_detail_id" TEXT NOT NULL,
    "menu_id_fk" TEXT NOT NULL,
    "menu_count" INTEGER NOT NULL,

    CONSTRAINT "Order_detail_pkey" PRIMARY KEY ("order_detail_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_Order_detail_id_fk_fkey" FOREIGN KEY ("Order_detail_id_fk") REFERENCES "Order_detail"("order_detail_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cafeteria_menu" ADD CONSTRAINT "Cafeteria_menu_cafeteria_id_fk_fkey" FOREIGN KEY ("cafeteria_id_fk") REFERENCES "Cafeteria"("cafeteria_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fk_fkey" FOREIGN KEY ("user_id_fk") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_Cafeteria_id_fkey" FOREIGN KEY ("Cafeteria_id") REFERENCES "Cafeteria"("cafeteria_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_detail" ADD CONSTRAINT "Order_detail_menu_id_fk_fkey" FOREIGN KEY ("menu_id_fk") REFERENCES "Cafeteria_menu"("menu_id") ON DELETE RESTRICT ON UPDATE CASCADE;
