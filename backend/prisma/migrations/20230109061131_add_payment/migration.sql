-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "price" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "memo" TEXT,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
