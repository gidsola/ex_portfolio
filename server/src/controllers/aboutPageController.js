
import aboutModel from '../models/aboutPageModel.js';

export default {

  /**
   * Get all skills for the about page
   */
  getSkills: async (_, res) => {
    try {
      const {skills} = await aboutModel.findOne().exec();
    //   console.log("about: ", about);
      res.json({ skills });
    } 
    catch (e) {
      console.error("Error fetching skills:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Add a new skill
   */
  addSkill: async (req, res) => {
    try {
      const { skill } = req.body;
      if (!skill) {
        return res.status(400).json({ error: "Bad Request" });
      }

      const about = await aboutModel.findOne();
      about.skills.push(skill);
      await about.save();

      res.status(200).json({ message: "Skill added successfully" });
    } 
    catch (e) {
      console.error("Error adding skill:", e);
      res.status(500).json({ error: "Server Error" });
    };
  }

};
