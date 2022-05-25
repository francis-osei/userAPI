import mongoose from 'mongoose';
import dotenv from 'dotenv';

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message, err);
  process.exit(1);
});

dotenv.config('./.env');

import app from './app.js';

// Connecting to mongoDB

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connection successfull');
  });

// console.log(process.env.NODE_ENV);

// Start Server
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`App running on ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  console.log('Authentication failed.💥 Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
