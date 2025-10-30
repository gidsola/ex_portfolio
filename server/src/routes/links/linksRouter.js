
import { Router } from 'express';
import Controller from '../../controllers/headerNavController.js'

export default Router()

// .get('/', async (req, res) => {
//   const links = await Link.find();
//   res.json(links);
// })

  /**
   * GET link
   */
  .get('/', Controller.getLinks)

  /**
   * ADD a link
   */
  .put('/', Controller.addLink)
