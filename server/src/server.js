import 'dotenv/config';
import mongoose from 'mongoose';
import express, { json, static as serveStatic } from 'express';
import cors from 'cors';
import { join } from 'path';
// import ssrRoute from './routes/ssr.js';
import routeMaster from './routes/routeMaster.js';

try {
  mongoose.connect(process.env.MONGO_CSTRING);
}
catch (e) {
  console.error('MongoDB connection error:', e);
};

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', join(process.cwd(), 'server/src/views'));

app
  .use(cors())
  .use(json());

// .use('/images', serveStatic(join(process.cwd(), 'client/public/images')));

routeMaster(app);
// ssrRoute(app);

// only used in production
const clientPath = join(process.cwd(), '../client/dist');
app
  .use(serveStatic(clientPath))
  .get(/^(?!\/api).*/, (_, res) => {
    res.sendFile(join(clientPath, 'index.html'));
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000} (${process.env.NODE_ENV || 'development'})`);
});
