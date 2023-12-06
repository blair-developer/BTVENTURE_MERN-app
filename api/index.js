import express from "express"; //backend app
import mongoose from "mongoose";
import dotenv from 'dotenv'; //environment variable
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from "cookie-parser";
dotenv.config();

//mongodb connection to api server
mongoose
.connect(process.env.MONGO)
    .then(()=>{
        console.log('Connected to MongoDB');
})
     .catch((err) => {
    console.log(err);
});

const app = express(); //innitialisation

app.use(express.json());  //allows json as input fromm API

app.use(cookieParser());

app.listen(3000, () =>{
    console.log('server is running on port 3000');
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter); 

//middleware and function to handle errors in the app

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})