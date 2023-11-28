import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import userRouter from './routes/userRoutes';
import studentRouter from './routes/studentRoutes';
import registrationRouter from './routes/registrationRoutes';
import resultRouter from './routes/resultRoutes';
import courseRouter from './routes/courseRoutes';
import { protect } from './module/auth';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRouter);
app.use('/students', protect, studentRouter);
app.use('/registration', protect, registrationRouter);
app.use('/results', protect, resultRouter);
app.use('/courses', protect, courseRouter);


app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
    });