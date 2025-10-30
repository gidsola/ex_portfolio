
import express from 'express';

import linksRouter from './links/linksRouter.js';
import authRouter from './auth/authRouter.js';
import usersRouter from './users/usersRouter.js';

export default (/**@type {express.Express} */app) => {
  app
    .use('/api/test', linksRouter)
    .use('/api/auth', authRouter)
    .use('/api/users', usersRouter)
};
