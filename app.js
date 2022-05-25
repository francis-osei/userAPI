// System Modules
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import path from 'path';
import express from 'express';
import userRouter from './routers/userRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'img')));

app.use((req, res, next) => {
  console.log('middleware function 😁');
  next();
});

app.use('/api/v1', userRouter);

export default app;
