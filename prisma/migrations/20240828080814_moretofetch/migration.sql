/*
  Warnings:

  - Added the required column `contributors` to the `Repo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `forks` to the `Repo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openIssues` to the `Repo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Repo" ADD COLUMN     "contributors" INTEGER NOT NULL,
ADD COLUMN     "forks" INTEGER NOT NULL,
ADD COLUMN     "openIssues" INTEGER NOT NULL;
