-- CreateTable
CREATE TABLE "ReferalDetails" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "referFrom" TEXT NOT NULL,
    "referTo" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "ReferalDetails_pkey" PRIMARY KEY ("id")
);
