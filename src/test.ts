const express = require('express');
import { Request, Response } from 'express';
const app = express();
const port = 3000;


app.post('/sign-up', (req: Request, res: Response) => {
      try {
            const { email, password } = req.body;
            // Add your sign-up logic here
            res.status(200).send('Sign-up successful');
      } 
      catch (error) {
            res.status(500).send('An error occurred');
      }
  // Add your sign-up logic here
  res.status(200).send('Sign-up successful');
});

app.get('/', (req: Request, res: Response) => {
  res.status(200);
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`server is running on port port`);
});