const express = require('express');
import {Request,Response} from 'express';
import connectDB from './database';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use('/api',userRoutes);

connectDB();


app.listen(port ,() =>{
      console.log(`server is running on port ${port}`)
})