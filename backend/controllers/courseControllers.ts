import prisma from "../db";
import httpStatus from "http-status";

// Get a list of all courses
export const getCourses = async (req: any, res: any, next: any) => {
  try {
    const courses = await prisma.courses.findMany();
    res.json({ courses, status: httpStatus.OK });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({
      message: error.message,
      status: httpStatus.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get list of timetable
export const getTimetable =async (req, res, next) => {
    try {
        const timetable = await prisma.timetable.findMany();
        res.json({timetable, status: httpStatus.OK})
    } catch(error) {
        res.status(500);
        res.json({
            message: error.message,
            status: httpStatus.INTERNAL_SERVER_ERROR
        });
    }
}

// Get a transcript of a student using their matric number
export const getTranscript = async (req, res, next) => {
    try {
        const { q } = req.query;
        const results = await prisma.unofficialTranscript.findMany({
            where: {
                MatricNumber: q as string,
            },
        });
        res.json({ results, status: httpStatus.OK });
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({
            message: error.message,
            status: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}



