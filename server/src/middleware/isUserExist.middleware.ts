import { Response, Request, NextFunction } from "express";

import User from "../models/User";
import { ApiError } from "../error/ApiError";

const isExist = async (req: Request, _: Response, next: NextFunction) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (user) return next(ApiError.badRequest(`User allready exist`));
    next();
  } catch (error) {
    next(error);
  }
};

export default isExist;
