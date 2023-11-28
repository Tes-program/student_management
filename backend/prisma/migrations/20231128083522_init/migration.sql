/*
  Warnings:

  - Added the required column `ResultID` to the `UnofficialTranscript` table without a default value. This is not possible if the table is not empty.
  - Added the required column `University` to the `UnofficialTranscript` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UnofficialTranscript` ADD COLUMN `ResultID` INTEGER NOT NULL,
    ADD COLUMN `TotalCredits` INTEGER NULL,
    ADD COLUMN `TotalGPA` DOUBLE NULL,
    ADD COLUMN `University` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `UnofficialTranscript` ADD CONSTRAINT `UnofficialTranscript_ResultID_fkey` FOREIGN KEY (`ResultID`) REFERENCES `SemesterResults`(`ResultID`) ON DELETE RESTRICT ON UPDATE CASCADE;
