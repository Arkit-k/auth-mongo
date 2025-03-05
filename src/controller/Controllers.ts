import { NextFunction, Request , Response } from 'express';
import { User } from "../models/User";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;


export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
          const { name, email, password } = req.body;
  
          if (!name || !email || !password) {
              res.status(400).json({ error: "All fields are required" });
              return;
          }
  
          const existingUser = await User.findOne({ email });
          if (existingUser) {
              res.status(409).json({ error: "User already exists" });
              return;
          }
  
          // Save user (password will be hashed in the model)
          const user = new User({ name: name.trim(), email: email.trim(), password });
          await user.save();
  
          res.status(201).json({ message: "User registered successfully" });
  
      } catch (error) {
          console.error("Error in createUser:", error);
          next(error);
      }
  };
  


export const getUser = async (req:Request,res:Response) => {
      try {
            const user = await User.find();
            res.status(200).send(user);
      } catch (error) {
            res.send(500).send('an error occurred');
      }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ error: "User does not exist" });
            return;
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }

        // Generate JWT token
        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "24h" });

        // Set token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
            sameSite: "strict"
        });

        res.status(200).json({ message: "User logged in successfully" });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "An error occurred" });
    }
};
