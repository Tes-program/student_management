/*
  Warnings:

  - You are about to drop the column `ResultID` on the `UnofficialTranscript` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `UnofficialTranscript` DROP FOREIGN KEY `UnofficialTranscript_ResultID_fkey`;

-- AlterTable
ALTER TABLE `UnofficialTranscript` DROP COLUMN `ResultID`;
