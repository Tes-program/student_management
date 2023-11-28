import prisma from "../db";
import httpStatus from "http-status";

// Student registrating their courses
export const commenceRegistration = async (req, res) => {
    try {
        const student =  await prisma.registrations.create({
            data: {
                MatricNumber: req.body.MatricNo,
                CourseCode: req.body.CourseCode,
                SubmissionDate: new Date(),
            }
        });
        res.json({ student, status: httpStatus.CREATED });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.json({ message: e.message, status: httpStatus.INTERNAL_SERVER_ERROR });
    } 
}

// Get all courses registered by a student
export const getStudentCourses = async (req, res) => {
    try {
        const student = await prisma.registrations.findMany({
            where: {
                MatricNumber: (req.query.q as string),
            }
        });
        if (!student) {
            res.status(404);
            res.json({ message: "Student not found", status: httpStatus.NOT_FOUND });
            return;
        }
        const courseCode = student.map((student) => student.CourseCode);
        // Use courseCode to query the courses table
        const courses = await prisma.courses.findMany({
            where: {
                CourseCode: {
                    in: courseCode,
                }
            }
        });

        res.json({ courses, status: httpStatus.OK });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.json({ message: e.message, status: httpStatus.INTERNAL_SERVER_ERROR });
    } 
}

// Get all students registered for a course
export const getCourseStudents = async (req, res) => {
    try {
        const student = await prisma.registrations.findMany({
            where: {
                CourseCode: req.query.code,
            }
        });
        if (!student) {
            res.status(404);
            res.json({ message: "Course not found", status: httpStatus.NOT_FOUND });
            return;
        }
        const students = student.map((student) => student.MatricNumber);
        // Use students to query the personal details table
        const studentsDetails = await prisma.personalDetails.findMany({
            where: {
                MatricNumber: {
                    in: students,
                }
            }
        });
        // Concantenate two values from the json object
        const firstName = studentsDetails.map((student) => student.FirstName);
        const lastName = studentsDetails.map((student) => student.LastName);

        // Concatenate the two values
        const fullName = firstName.map((name, index) => `${name} ${lastName[index]}`);
        
        res.json({ students: fullName, status: httpStatus.OK });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.json({ message: e.message, status: httpStatus.INTERNAL_SERVER_ERROR });
    } 
}

// Edit a student's registration
export const updateRegistration = async (req, res) => {
    try {
        const student = await prisma.registrations.update({
            where: {
                RegistrationID: parseInt(req.params.id),
            },
            data: {
                CourseCode: req.body.CourseCode,
                SubmissionDate: req.body.SubmissionDate,
            }
        });
        if (!student) {
            res.status(404);
            res.json({ message: "Student not found", status: httpStatus.NOT_FOUND });
            return;
        }
        res.json({ student, status: httpStatus.OK });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.json({ message: e.message, status: httpStatus.INTERNAL_SERVER_ERROR });
    } 
}