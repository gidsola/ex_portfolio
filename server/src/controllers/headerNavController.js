
import navlinkModel from '../models/navlinksModel.js';

export default {

  /**
   * Get all navlinks
   * @param {*} _
   * @param {Response} res
   */
  getLinks: async (_, res) => {
    try {
      const links = await navlinkModel.findOne().exec();
      // console.log("Links: ", links);
      res.json({ navlinks: links.navlinks });
      
    } 
    catch (e) {
      console.error("Error fetching links:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Add a new navlink
   * @param {Request} req
   * @param {Response} res
   */
  addLink: async (req, res) => {
    try {
      const link = req.body;
      if (!link.url) {
        return res.status(400).json({ error: "Bad Request" });
      };
      const newLink = new navlinkModel(link);
      await newLink.save();
      res.status(200).json({ message: "Success" });
    } 
    catch (e) {
      console.error("Error adding link:", e);
      res.status(500).json({ error: "Server Error" });
    };
  }
};
