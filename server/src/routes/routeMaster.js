
import express from 'express';

import linksRouter from './links/linksRouter.js';
import authRouter from './auth/authRouter.js';
import usersRouter from './users/usersRouter.js';
import servicesRouter from './services/servicesPageRouter.js';
import projectsRouter from './projects/projectsRouter.js';
import aboutRouter from './about/aboutPageRouter.js';

export default (/**@type {express.Express} */app) => {
  app
    .use('/api/navlinks', linksRouter)
    .use('/api/auth', authRouter)
    .use('/api/users', usersRouter)
    .use('/api/services', servicesRouter)
    .use('/api/projects', projectsRouter)
    .use('/api/about', aboutRouter)
};
