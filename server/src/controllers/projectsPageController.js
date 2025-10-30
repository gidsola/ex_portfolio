
import projectsModel from '../models/projectsPageModel.js';

export default {

  /**
   * Get all repos from the collection and fetch details from GitHub
   */
  getRepos: async (_, res) => {
    try {
      const projects = await projectsModel.findOne().exec();
      if (!projects) {
        return res.status(404).json({ error: "No repositories found" });
      }

      const reposWithDetails = await Promise.all(

        projects.repos.map(async (/**@type {{ url: string }}*/repo) => {
          const response = await fetch(repo.url);

          if (!response.ok) throw new Error(`Failed to fetch repository: ${repo.url}`);
          
          return response.json();
        })
      );

      res.json({ projects: reposWithDetails });
    } 
    catch (e) {
      console.error("Error fetching repositories:", e);
      res.status(500).json({ error: "Server Error" });
    }
  },

  /**
   * Add a new repo to the collection
   */
  addRepo: async (req, res) => {
    try {
      const { url } = req.body;
      if (!url) {
        return res.status(400).json({ error: "Bad Request" });
      };

      const projects = await projectsModel.findOne();
      projects.repos.push({ url });
      await projects.save();
      
      res.status(200).json({ message: "Repository added successfully" });
    } 
    catch (e) {
      console.error("Error adding repository:", e);
      res.status(500).json({ error: "Server Error" });
    };
  }

};
