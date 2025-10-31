import { Router } from 'express';
import Controller from '../../controllers/projectsPageController.js';

export default Router()
  .get('/', Controller.getRepos)
  .get('/:id', Controller.getRepoById)
  .post('/', Controller.addRepo)
  .put('/:id', Controller.updateRepo)
  .delete('/:id', Controller.removeRepo)
  .delete('/', Controller.removeAllRepos);
