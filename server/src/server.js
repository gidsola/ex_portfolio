import 'dotenv/config';
import mongoose from 'mongoose';
import express, { json, static as serveStatic } from 'express';
import cors from 'cors';
import { join } from 'path';
import routeMaster from './routes/routeMaster.js';

try {
  mongoose.connect(process.env.MONGO_CSTRING);
}
catch (e) {
  console.error('MongoDB connection error:', e);
};

const app = express();
routeMaster(app);

app
  .use(cors())
  .use(json())
  .use(serveStatic(join(process.cwd(), 'client/dist')))

  .get(/^(?!\/api).*/, (_, res) => {
    res.sendFile(join(process.cwd(), 'client/dist', 'index.html'));
  })

  .listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000} (${process.env.NODE_ENV || 'development'})`);
  });
