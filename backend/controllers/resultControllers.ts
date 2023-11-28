import prisma from "../db";
import httpStatus from "http-status";

// Get a list of semester results using params of matric number and level and semester
export const getSemesterResults = async (req: any, res: any, next: any) => {
  try {
    const { q, p, s} = req.query;
    const results = await prisma.semesterResults.findMany({
      where: {
        MatricNumber: q as string,
        CurrentLevel: parseInt(p),
        Semester: parseInt(s)
      },
      include: {
        Courses: true,
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
};

// Add the MatricNumber, CurrentLevel, CourseCode, Grade, Credits, Semester to the semesterResults table
export const addSemesterResults = async (req: any, res: any, next: any) => {
    try {
        const { MatricNumber, CurrentLevel, CourseCode, Grade, Credits, Semester } =
        req.body;
        const results = await prisma.semesterResults.create({
        data: {
            MatricNumber,
            CurrentLevel,
            CourseCode,
            Grade,
            Credits,
            Semester,
        },
        });
        res.json({ results, status: httpStatus.CREATED });
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({
        message: error.message,
        status: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
};

// Get a list of semester result for a particular course using params of course code
export const getCourseSemesterResults = async (req: any, res: any, next: any) => {
    try {
        const { q } = req.query;
        const results = await prisma.semesterResults.findMany({
        where: {
            CourseCode: q as string,
        },
        include: {
            Courses: true,
        },
        });
        const students = results.map((student) => student.MatricNumber);
        // Use students to query the students table
        const student = await prisma.personalDetails.findMany({
        where: {
            MatricNumber: {
            in: students,
            },
        },
        });
        
         // Concantenate two values from the json object
         const firstName = student.map((student) => student.FirstName);
         const lastName = student.map((student) => student.LastName);
 
         // Concatenate the two values
         const fullName = firstName.map((name, index) => `${name} ${lastName[index]}`);

         const simplifiedResult = results.map(result => ({
            StudentName: fullName[0],
            CourseCode: result.CourseCode,
            CourseTitle: result.Courses.CourseTitle,
            Grade: result.Grade,
            Credits: result.Credits,
            SGPA: result.SGPA,
            CGPA: result.CGPA,
          }));
         
        res.json({ simplifiedResult, status: httpStatus.OK });
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({
        message: error.message,
        status: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
};


// Delete a semester result using result id
export const deleteSemesterResult = async (req: any, res: any, next: any) => {
    try {
        const { id } = req.params;
        const result = await prisma.semesterResults.delete({
        where: {
            ResultID: parseInt(id),
        },
        });
        res.json({ result, status: httpStatus.OK });
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({
        message: error.message,
        status: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
};