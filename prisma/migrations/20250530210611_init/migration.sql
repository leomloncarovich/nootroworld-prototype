/*
  Warnings:

  - You are about to drop the column `price` on the `supplements` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `supplements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topPrice` to the `supplements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "supplements" DROP COLUMN "price",
ADD COLUMN     "badge" TEXT,
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "link" TEXT,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "reviews" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "topPrice" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "benefits" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "benefits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplement_benefits" (
    "supplementId" INTEGER NOT NULL,
    "benefitId" INTEGER NOT NULL,

    CONSTRAINT "supplement_benefits_pkey" PRIMARY KEY ("supplementId","benefitId")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "rank" INTEGER,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reviews" INTEGER NOT NULL DEFAULT 0,
    "dosage" TEXT NOT NULL,
    "capsules" TEXT NOT NULL,
    "badge" TEXT,
    "supplementId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usage_guides" (
    "id" SERIAL NOT NULL,
    "supplementId" INTEGER NOT NULL,
    "timing" TEXT,
    "timingDesc" TEXT,
    "withFood" TEXT,
    "withFoodDesc" TEXT,
    "timeToEffect" TEXT,
    "effectDesc" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usage_guides_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "benefits_name_key" ON "benefits"("name");

-- CreateIndex
CREATE UNIQUE INDEX "usage_guides_supplementId_key" ON "usage_guides"("supplementId");

-- AddForeignKey
ALTER TABLE "supplements" ADD CONSTRAINT "supplements_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplement_benefits" ADD CONSTRAINT "supplement_benefits_supplementId_fkey" FOREIGN KEY ("supplementId") REFERENCES "supplements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplement_benefits" ADD CONSTRAINT "supplement_benefits_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "benefits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_supplementId_fkey" FOREIGN KEY ("supplementId") REFERENCES "supplements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usage_guides" ADD CONSTRAINT "usage_guides_supplementId_fkey" FOREIGN KEY ("supplementId") REFERENCES "supplements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
