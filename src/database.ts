import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const connectDB = async () => {
       try {
            await mongoose.connect(MONGO_URI);
            console.log('Connected to the database');
       } catch (error) {
            console.log('An error occurred', error);
            process.exit(1);
       }
};

export default connectDB;
