import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';


export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

export const comparePassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => bcrypt.compare(password, hashedPassword);

export const generateToken = async (user: any): Promise<string> => {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return token;
};

export const protect = (req,res,next) => {
    const bearer = req.headers.authorization;
  
    if (!bearer) {
      res.status(401);
      res.json({ message: "Unauthorized" });
      return;
    }
  
    const [, token] = bearer.split(" ");
  
    if (!token) {
      res.status({status: httpStatus.UNAUTHORIZED});
      res.json({ message: "Invalid token" });
      return;
    }
  
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET as string);
      req.user = user;
      next();
    } catch (e) {
      console.error(e);
      res.status(401);
      res.json({ message: "Invalid token" });
    }
  };

