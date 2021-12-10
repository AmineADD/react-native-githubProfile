-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "result" JSONB,

    CONSTRAINT "User_pkey" PRIMARY KEY ("username")
);
