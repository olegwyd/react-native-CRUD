import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

const authUser = async (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req?.headers?.authorization;
    if (!token) {
      return res.status(401).json({ message: "Not autorized user" });
    }
    await jwt.verify(token, "SECRET_KEY");
    next();
  } catch (e) {
    res.status(401).json({ message: "Error: Not autorized user" });
  }
};

export default authUser;
