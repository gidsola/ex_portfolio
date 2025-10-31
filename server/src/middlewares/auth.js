/**
 * week 6 content code
 */


import jwt from 'jsonwebtoken';

/**
 * Authentication middleware
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next proceeds to the next middleware/route/etc
 */
export default (req, res, next) => {

  /**@type {string} */const authheader = req.headers.authorization;
  if (!authheader || !authheader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "Unauthorized: --bearer" });
  };

  const token = authheader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized: --token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }
  catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  };

};

