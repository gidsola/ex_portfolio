import 'dotenv/config';
import express, { json, static as serveStatic } from 'express';
import cors from 'cors';
import { join } from 'path';
// import ssrRoute from './routes/ssr.js';
import routeMaster from './routes/routeMaster.js';

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', join(process.cwd(), 'server/src/views'));

app
  .use(cors())
  .use(json());

// .use('/images', serveStatic(join(process.cwd(), 'client/public/images')));

routeMaster(app);
// ssrRoute(app);

const clientPath = join(process.cwd(), 'client/dist');
app
  .use(serveStatic(clientPath))
  .get(/^(?!\/api).*/, (_, res) => {
    res.sendFile(join(clientPath, 'index.html'));
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000} (${process.env.NODE_ENV || 'development'})`);
});
