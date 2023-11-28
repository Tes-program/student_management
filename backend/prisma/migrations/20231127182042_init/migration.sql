/*
  Warnings:

  - You are about to drop the column `Courses` on the `Timetable` table. All the data in the column will be lost.
  - Added the required column `CourseCode` to the `Timetable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SemesterResults` MODIFY `SGPA` DOUBLE NULL,
    MODIFY `CGPA` DOUBLE NULL,
    MODIFY `GradePoint` DOUBLE NULL;

-- AlterTable
ALTER TABLE `Timetable` DROP COLUMN `Courses`,
    ADD COLUMN `CourseCode` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Timetable` ADD CONSTRAINT `Timetable_CourseCode_fkey` FOREIGN KEY (`CourseCode`) REFERENCES `Courses`(`CourseCode`) ON DELETE RESTRICT ON UPDATE CASCADE;
