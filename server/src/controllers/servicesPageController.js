import servicesModel from '../models/servicesPageModel.js';

export default {
  /**
   * Get the services data (intro and offered)
   */
  getServices: async (_, res) => {
    try {
      const services = await servicesModel.find().exec();
      // console.log("seervices: ", services);

      if (!services) return res.status(404).json({ error: "No services found" });
      
      const send= { intro: services[1].intro, offered: services[0].offered };

      res.json(send);
    } 
    catch (e) {
      console.error("Error fetching services:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Add a new offered service
   */
  addService: async (req, res) => {
    try {
      const { title, description, technologies, icon } = req.body;
      if (!title || !description || !technologies || !icon) 
        return res.status(400).json({ error: "Bad Request" });
      
      const services = await servicesModel.findOne();
      services.offered.push({ title, description, technologies, icon });
      await services.save();

      res.status(200).json({ message: "Service added successfully" });
    } 
    catch (e) {
      console.error("Error adding service:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Update the intro text
   */
  updateIntro: async (req, res) => {
    try {
      const { intro } = req.body;
      if (!intro) return res.status(400).json({ error: "Bad Request" });
      
      const services = await servicesModel.findOne();
      services.intro = intro;
      await services.save();

      res.status(200).json({ message: "Intro updated successfully" });
    } 
    catch (e) {
      console.error("Error updating intro:", e);
      res.status(500).json({ error: "Server Error" });
    };
  }
  
};
