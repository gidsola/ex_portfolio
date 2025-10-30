
import { Router } from 'express';
import Controller from '../../controllers/aboutPageController.js';

export default Router()
  .get('/', Controller.getSkills)
  .put('/', Controller.addSkill);
