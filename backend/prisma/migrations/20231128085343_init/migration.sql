/*
  Warnings:

  - You are about to drop the column `StudentID` on the `UnofficialTranscript` table. All the data in the column will be lost.
  - Added the required column `MatricNumber` to the `UnofficialTranscript` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `UnofficialTranscript` DROP FOREIGN KEY `UnofficialTranscript_StudentID_fkey`;

-- AlterTable
ALTER TABLE `UnofficialTranscript` DROP COLUMN `StudentID`,
    ADD COLUMN `MatricNumber` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `UnofficialTranscript` ADD CONSTRAINT `UnofficialTranscript_MatricNumber_fkey` FOREIGN KEY (`MatricNumber`) REFERENCES `PersonalDetails`(`MatricNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;
