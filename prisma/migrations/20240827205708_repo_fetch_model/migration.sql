-- CreateTable
CREATE TABLE "Repo" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "tags" TEXT[],
    "author" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "lastPushed" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Repo_pkey" PRIMARY KEY ("id")
);
