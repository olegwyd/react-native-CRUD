import Joi from "joi";
import type { RequestHandler } from "express";

export const UserSheme = Joi.object({
  email: Joi.string().min(3).required(),
  password: Joi.string().min(7).max(30).required(),
  varifyPassword: Joi.string().min(7).max(30).required(),
  userName: Joi.string().min(2).required(),
});

export const validateBody: RequestHandler = async (req, _, next) => {
  try {
    await UserSheme.validateAsync(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

export default validateBody;
