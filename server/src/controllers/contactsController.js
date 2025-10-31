
import contactsModel from '../models/contactsModel.js';

export default {

  /**
   * Get all contacts
   * @param {Request} _
   * @param {Response} res
   */
  getAllContacts: async (_, res) => {
    try {
      const contacts = await contactsModel.find().exec();
      res.json(contacts);
    } 
    catch (e) {
      console.error("Error fetching contacts:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Get contact by ID
   * @param {Request} req
   * @param {Response} res
   */
  getContactById: async (req, res) => {
    try {
      const contact = await contactsModel.findById(req.params.id).exec();
      if (!contact) {
        return res.status(404).json({ error: "Contact not found" });
      }
      res.json(contact);
    } 
    catch (e) {
      console.error("Error fetching contact:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Add a new contact
   * @param {Request} req
   * @param {Response} res
   */
  addContact: async (req, res) => {
    try {
    //   const dd = req.body;
    //   console.log("DDDDD",dd);
      const { firstname, lastname, email, message } = req.body;
      if (!firstname || !lastname || !email || !message) {
        return res.status(400).json({ error: "Bad Request: All fields are required." });
      }
      const newContact = new contactsModel({ firstname, lastname, email, message });
      await newContact.save();
      res.status(201).json({ success: true, message: "Message sent successfully!" });
    }
    catch (e) {
      console.error("Error adding contact:", e);
      res.status(500).json({ error: "Server Error: Failed to send message." });
    };
  },

  /**
   * Update contact by ID
   */
  updateContact: async (req, res) => {
    try {
      const { firstname, lastname, email } = req.body;
      if (!firstname || !lastname || !email) {
        return res.status(400).json({ error: "Bad Request" });
      }

      const updatedContact = await contactsModel.findByIdAndUpdate(
        req.params.id,
        { firstname, lastname, email },
        { new: true }
      ).exec();

      if (!updatedContact) {
        return res.status(404).json({ error: "Contact not found" });
      }
      res.status(201).json(updatedContact);
    } 
    catch (e) {
      console.error("Error updating contact:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Remove contact by ID
   */
  removeContact: async (req, res) => {
    try {
      const contact = await contactsModel.findByIdAndDelete(req.params.id).exec();
      if (!contact) {
        return res.status(404).json({ error: "Contact not found" });
      }
      res.json({ message: "Contact removed successfully" });
    } 
    catch (e) {
      console.error("Error removing contact:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Remove all contacts
   */
  removeAllContacts: async (_, res) => {
    try {
      await contactsModel.deleteMany({}).exec();
      res.json({ message: "All contacts removed successfully" });
    } 
    catch (e) {
      console.error("Error removing all contacts:", e);
      res.status(500).json({ error: "Server Error" });
    };
  }
};
