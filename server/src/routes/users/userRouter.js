/**
 * week 6 content code
 */


import { Router } from 'express';
import authMiddleware from '../../middlewares/auth.js';
import Controller from '../../controllers/userController.js';

export default Router()
  .get('/', authMiddleware, Controller.getAllUsers)
  .get('/:id', authMiddleware, Controller.getUserById)
  .post('/', Controller.createUser)
  .put('/:id', authMiddleware, Controller.updateUser)
  .delete('/:id', authMiddleware, Controller.deleteUser)
  .post('/login', Controller.loginUser);
