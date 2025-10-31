
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
        projects.repos.map(async (repo) => {
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
    };
  },

  /**
   * Get a specific repository by ID
   */
  getRepoById: async (req, res) => {
    try {
      const projects = await projectsModel.findOne().exec();
      if (!projects) {
        return res.status(404).json({ error: "No repositories found" });
      }
      const repo = projects.repos.id(req.params.id);
      if (!repo) {
        return res.status(404).json({ error: "Repository not found" });
      }
      const response = await fetch(repo.url);
      if (!response.ok) throw new Error(`Failed to fetch repository: ${repo.url}`);
      const repoDetails = await response.json();
      res.json(repoDetails);
    } 
    catch (e) {
      console.error("Error fetching repository:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Add a new repo to the collection
   */
  addRepo: async (req, res) => {
    try {
      const { url } = req.body;
      if (!url) {
        return res.status(400).json({ error: "Bad Request: URL is required" });
      }
      const projects = await projectsModel.findOne().exec();
      if (!projects) {
        const newProjects = new projectsModel({ repos: [{ url }] });
        await newProjects.save();
      } else {
        projects.repos.push({ url });
        await projects.save();
      }
      res.status(201).json({ message: "Repository added successfully" });
    } 
    catch (e) {
      console.error("Error adding repository:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Update a repository by ID
   */
  updateRepo: async (req, res) => {
    try {
      const { url } = req.body;
      if (!url) {
        return res.status(400).json({ error: "Bad Request: URL is required" });
      }
      const projects = await projectsModel.findOne().exec();
      if (!projects) {
        return res.status(404).json({ error: "No repositories found" });
      }
      const repo = projects.repos.id(req.params.id);
      if (!repo) {
        return res.status(404).json({ error: "Repository not found" });
      }
      repo.url = url;
      await projects.save();
      res.json({ message: "Repository updated successfully" });
    } 
    catch (e) {
      console.error("Error updating repository:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Remove a repository by ID
   */
  removeRepo: async (req, res) => {
    try {
      const projects = await projectsModel.findOne().exec();
      if (!projects) {
        return res.status(404).json({ error: "No repositories found" });
      }
      const repo = projects.repos.id(req.params.id);
      if (!repo) {
        return res.status(404).json({ error: "Repository not found" });
      }
      repo.remove();
      await projects.save();
      res.json({ message: "Repository removed successfully" });
    } 
    catch (e) {
      console.error("Error removing repository:", e);
      res.status(500).json({ error: "Server Error" });
    };
  },

  /**
   * Remove all repositories
   */
  removeAllRepos: async (_, res) => {
    try {
      const projects = await projectsModel.findOne().exec();
      if (!projects) {
        return res.status(404).json({ error: "No repositories found" });
      }
      projects.repos = [];
      await projects.save();
      res.json({ message: "All repositories removed successfully" });
    } 
    catch (e) {
      console.error("Error removing all repositories:", e);
      res.status(500).json({ error: "Server Error" });
    };
  }

};
