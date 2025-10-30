import { Router } from 'express';
import Controller from '../../controllers/servicesPageController.js';

export default Router()
  .get('/', Controller.getServices)
  .put('/add-service', Controller.addService)
  .put('/update-intro', Controller.updateIntro);

  