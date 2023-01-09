-- CreateTable
CREATE TABLE "Category" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "price" INTEGER NOT NULL,
    "categoryCode" TEXT NOT NULL,
    "memo" TEXT,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_categoryCode_fkey" FOREIGN KEY ("categoryCode") REFERENCES "Category"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
