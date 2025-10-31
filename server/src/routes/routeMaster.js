
import express from 'express';

import linksRouter from './links/linksRouter.js';
import usersRouter from './users/userRouter.js';
import servicesRouter from './services/servicesPageRouter.js';
import projectsRouter from './projects/projectsRouter.js';
import aboutRouter from './about/aboutPageRouter.js';
import contactsRouter from './contacts/contactsRouter.js';

/**
 * Master API Route List
 */
export default (/**@type {express.Express} */app) => {
  app
    .use('/api/navlinks', linksRouter)
    .use('/api/users', usersRouter)
    .use('/api/services', servicesRouter)
    .use('/api/projects', projectsRouter)
    .use('/api/about', aboutRouter)
    .use('/api/contacts', contactsRouter)
};
