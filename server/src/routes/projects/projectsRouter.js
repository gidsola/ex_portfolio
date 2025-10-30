import { Router } from 'express';
import Controller from '../../controllers/projectsPageController.js';

export default Router()
  .get('/', Controller.getRepos)
  .put('/', Controller.addRepo);
