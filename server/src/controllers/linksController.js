
let links = [{
  "navlinks": [
    [
      "Home",
      "/"
    ],
    [
      "About",
      "/about"
    ],
    [
      "Contact",
      "/contact"
    ],
    [
      "Projects",
      "/projects"
    ],
    [
      "Services",
      "/services"
    ],
    [
      "Education",
      "/education"
    ]
  ]
}];

export default {

  /**
   * 
   * @param {*} _ 
   * @param {Request} res 
   */
  getLinks: (_, res) => {
    res.json(
      ...links
    );
  },

  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  addLink: async (req, res) => {
    try {
      const link = req.body;
      if (!link.url) res.status(400).json({
        error: "Bad Request"
      });

      links.push({
        id: links.length + 1,
        ...link
      });

      res.status(200).json(
        { "message": "Success" }
      );
    }
    catch (e) {
      // console.log("error", e)
      res.status(500).json({
        error: "Server Error"
      })
    };
  }

};
