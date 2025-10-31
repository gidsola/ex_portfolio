
import 'dotenv/config';
import { join } from 'path';
import mongoose from 'mongoose';
import express from 'express';

import cors from 'cors';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import helmet from 'helmet';

import rateLimit from './middlewares/rateLimiter.js'
import routeMaster from './routes/routeMaster.js';

try {
  mongoose.connect(process.env.MONGO_CSTRING);
}
catch (e) {
  console.error('MongoDB connection error:', e);
};

const app = express();
app
  .use(cors())
  .use(compress())
  .use(cookieParser())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(helmet())

  .use(express.static(join(process.cwd(), 'client/dist')))

  .get(/^(?!\/api).*/, rateLimit, (_, res) => {
    res.sendFile(join(process.cwd(), 'client/dist', 'index.html'));
  })

  routeMaster(app);

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000} (${process.env.NODE_ENV || 'development'})`);
  });
