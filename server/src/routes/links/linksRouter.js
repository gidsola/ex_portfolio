
import { Router } from 'express';
import Controller from '../../controllers/linksController.js'

export default Router()

  /**
   * GET link
   */
  .get('/', Controller.getLinks)

  /**
   * ADD a link
   */
  .put('/', Controller.addLink)