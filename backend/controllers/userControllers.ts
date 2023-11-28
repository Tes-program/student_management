import prisma from "../db";
import httpStatus from "http-status";
import { hashPassword, comparePassword, generateToken } from "../module/auth";


export const register = async (req, res) => {
    try {
        const user = await prisma.users.create({
            data: {
                Username: req.body.username,
                Password: await hashPassword(req.body.password),
            }
        });
        const token = await generateToken(user);
        res.json({ token, status: httpStatus.OK });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.json({ message: e.message, status: httpStatus.INTERNAL_SERVER_ERROR });
    }
}

export const login = async (req, res) => {
    try {
        const user = await prisma.users.findUnique({
            where: {
                Username: req.body.username,
            }
        });
        if (!user) {
            res.status(404);
            res.json({ message: "User not found", status: httpStatus.NOT_FOUND });
            return;
        }
        const isMatch = await comparePassword(req.body.password, user.Password);
        if (!isMatch) {
            res.status(401);
            res.json({ message: "Incorrect password", status: httpStatus.UNAUTHORIZED });
            return;
        }
        const token = await generateToken(user);
        res.json({ token, status: httpStatus.OK });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.json({ message: e.message, status: httpStatus.INTERNAL_SERVER_ERROR });
    }
}
