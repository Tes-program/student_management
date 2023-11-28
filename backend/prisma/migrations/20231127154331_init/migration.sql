-- CreateTable
CREATE TABLE `PersonalDetails` (
    `StudentID` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `MatricNumber` VARCHAR(191) NOT NULL,
    `DateOfBirth` DATETIME(3) NOT NULL,
    `Gender` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Phone` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `CourseofStudy` VARCHAR(191) NOT NULL,
    `Residence` VARCHAR(191) NOT NULL,
    `AccountNumber` INTEGER NOT NULL,

    UNIQUE INDEX `PersonalDetails_MatricNumber_key`(`MatricNumber`),
    UNIQUE INDEX `PersonalDetails_Email_key`(`Email`),
    UNIQUE INDEX `PersonalDetails_Phone_key`(`Phone`),
    PRIMARY KEY (`StudentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `UserID` INTEGER NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_Username_key`(`Username`),
    PRIMARY KEY (`UserID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Overview` (
    `OverviewID` INTEGER NOT NULL AUTO_INCREMENT,
    `UserID` INTEGER NOT NULL,
    `GPA` DOUBLE NOT NULL,
    `Timetable` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`OverviewID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Courses` (
    `CourseCode` VARCHAR(191) NOT NULL,
    `CourseTitle` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Courses_CourseCode_key`(`CourseCode`),
    PRIMARY KEY (`CourseCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Registrations` (
    `RegistrationID` INTEGER NOT NULL AUTO_INCREMENT,
    `MatricNumber` VARCHAR(191) NOT NULL,
    `CourseCode` VARCHAR(191) NOT NULL,
    `SubmissionDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`RegistrationID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnofficialTranscript` (
    `TranscriptID` INTEGER NOT NULL AUTO_INCREMENT,
    `StudentID` INTEGER NOT NULL,
    `GraduationDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`TranscriptID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FinanceSummary` (
    `FinanceID` INTEGER NOT NULL AUTO_INCREMENT,
    `StudentID` INTEGER NOT NULL,
    `TotalBalance` DOUBLE NOT NULL,

    PRIMARY KEY (`FinanceID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invoices` (
    `InvoiceID` INTEGER NOT NULL AUTO_INCREMENT,
    `StudentID` INTEGER NOT NULL,
    `InvoiceDate` DATETIME(3) NOT NULL,
    `DueDate` DATETIME(3) NOT NULL,
    `Amount` DOUBLE NOT NULL,

    PRIMARY KEY (`InvoiceID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SemesterResults` (
    `ResultID` INTEGER NOT NULL AUTO_INCREMENT,
    `MatricNumber` VARCHAR(191) NOT NULL,
    `CurrentLevel` INTEGER NOT NULL,
    `CourseCode` VARCHAR(191) NOT NULL,
    `Grade` VARCHAR(191) NOT NULL,
    `Credits` INTEGER NOT NULL,
    `Semester` INTEGER NOT NULL,
    `SGPA` DOUBLE NOT NULL,
    `CGPA` DOUBLE NOT NULL,
    `GradePoint` DOUBLE NOT NULL,

    PRIMARY KEY (`ResultID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Timetable` (
    `TimetableID` INTEGER NOT NULL AUTO_INCREMENT,
    `Weekday` VARCHAR(191) NOT NULL,
    `Courses` VARCHAR(191) NOT NULL,
    `Lecturer` VARCHAR(191) NOT NULL,
    `Venue` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`TimetableID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PersonalDetailsToUsers` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PersonalDetailsToUsers_AB_unique`(`A`, `B`),
    INDEX `_PersonalDetailsToUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Overview` ADD CONSTRAINT `Overview_UserID_fkey` FOREIGN KEY (`UserID`) REFERENCES `Users`(`UserID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Registrations` ADD CONSTRAINT `Registrations_MatricNumber_fkey` FOREIGN KEY (`MatricNumber`) REFERENCES `PersonalDetails`(`MatricNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Registrations` ADD CONSTRAINT `Registrations_CourseCode_fkey` FOREIGN KEY (`CourseCode`) REFERENCES `Courses`(`CourseCode`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnofficialTranscript` ADD CONSTRAINT `UnofficialTranscript_StudentID_fkey` FOREIGN KEY (`StudentID`) REFERENCES `PersonalDetails`(`StudentID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FinanceSummary` ADD CONSTRAINT `FinanceSummary_StudentID_fkey` FOREIGN KEY (`StudentID`) REFERENCES `PersonalDetails`(`StudentID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoices` ADD CONSTRAINT `Invoices_StudentID_fkey` FOREIGN KEY (`StudentID`) REFERENCES `PersonalDetails`(`StudentID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SemesterResults` ADD CONSTRAINT `SemesterResults_MatricNumber_fkey` FOREIGN KEY (`MatricNumber`) REFERENCES `PersonalDetails`(`MatricNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SemesterResults` ADD CONSTRAINT `SemesterResults_CourseCode_fkey` FOREIGN KEY (`CourseCode`) REFERENCES `Courses`(`CourseCode`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PersonalDetailsToUsers` ADD CONSTRAINT `_PersonalDetailsToUsers_A_fkey` FOREIGN KEY (`A`) REFERENCES `PersonalDetails`(`StudentID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PersonalDetailsToUsers` ADD CONSTRAINT `_PersonalDetailsToUsers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Users`(`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;
