
import { Router } from 'express';
import Controller from '../../controllers/contactsController.js';

export default Router()
  .get('/', Controller.getAllContacts)
  .get('/:id', Controller.getContactById)
  .post('/', Controller.addContact)
  .put('/:id', Controller.updateContact)
  .delete('/:id', Controller.removeContact)
  .delete('/', Controller.removeAllContacts);
