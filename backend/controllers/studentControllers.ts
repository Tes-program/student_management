import prisma from "../db";
import httpStatus from "http-status";


// Get all students and paginate
export const getAllStudents = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const students = await prisma.personalDetails.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize,
        });
        const totalStudents = await prisma.personalDetails.count();
        res.json({ students, totalStudents, page, pageSize, status: httpStatus.OK });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.json({ message: e.message, status: httpStatus.INTERNAL_SERVER_ERROR });
    }
}

// Get a single student
export const getStudent = async (req, res) => {
    try {
        const student = await prisma.personalDetails.findUnique({
            where: {
                StudentID: parseInt(req.params.id),
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

// Create a new student
export const createStudent = async (req, res) => {
    try {
        const student = await prisma.personalDetails.create({
            data: {
                FirstName: req.body.firstName,
                LastName: req.body.lastName,
                MatricNumber: req.body.matricNumber,
                DateOfBirth: req.body.dateOfBirth,
                Gender: req.body.gender,
                Email: req.body.email,
                Phone: req.body.phone,
                Address: req.body.address,
                CourseofStudy: req.body.courseofStudy,
                AccountNumber: req.body.accountNumber, 
                Residence: req.body.residence,
            }
        });
        res.json({ student, status: httpStatus.CREATED });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.json({ message: e.message, status: httpStatus.INTERNAL_SERVER_ERROR });
    }
}

// Update a student
export const updateStudent = async (req, res) => {
    try {
        const student = await prisma.personalDetails.update({
            where: {
                StudentID: parseInt(req.params.id),
            },
            data: {
                FirstName: req.body.firstName as string,
                LastName: req.body.lastName as string,
                MatricNumber: req.body.matricNumber as string,
                DateOfBirth: req.body.dateOfBirth as string,
                Gender: req.body.gender as string,
                Email: req.body.email as string,
                Phone: req.body.phone as string,
                Address: req.body.address as string,
                CourseofStudy: req.body.courseofStudy as string,
                AccountNumber: req.body.accountNumber as number,
                Residence: req.body.residence as string,
            }
        }); 
        res.json({ student, status: httpStatus.OK });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.json({ message: e.message, status: httpStatus.INTERNAL_SERVER_ERROR });
    }
}

// Delete a student
export const deleteStudent = async (req, res) => {
    try {
        const student = await prisma.personalDetails.delete({
            where: {
                StudentID: parseInt(req.params.id),
            }
        });
        res.json({ student, status: httpStatus.OK });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.json({ message: e.message, status: httpStatus.INTERNAL_SERVER_ERROR });
    }
}

// Search for a student
export const searchStudent = async (req, res) => {
    try {
        const students = await prisma.personalDetails.findMany({
            where: {
                OR: [
                    {
                        FirstName: {
                            contains: req.query.q as string,
                        }
                    },
                    {
                        LastName: {
                            contains: req.query.q as string,
                        }
                    },
                    {
                        MatricNumber: {
                            contains: req.query.q as string,
                        }
                    },
                    {
                        Email: {
                            contains: req.query.q as string,
                        }
                    },
                    {
                        Phone: {
                            contains: req.query.q as string,
                        }
                    },
                    {
                        Address: {
                            contains: req.query.q as string,
                        }
                    },
                    {
                        CourseofStudy: {
                            contains: req.query.q as string,
                        }
                    },
                ]
            }
        });
        res.json({ students, status: httpStatus.OK });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.json({ message: e.message, status: httpStatus.INTERNAL_SERVER_ERROR });
    }
}