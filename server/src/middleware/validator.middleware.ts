import Joi from "joi";
import type { RequestHandler } from "express";

const TodoSheme = Joi.object({
  title: Joi.string().min(1).max(30).required(),
  description: Joi.string().min(1).max(200).required(),
  year: Joi.string().min(2).max(4),
  completed: Joi.boolean().required(),
  public: Joi.boolean().required(),
  id: Joi.string(),
});

export const validateBody: RequestHandler = async (req, _, next) => {
  try {
    await TodoSheme.validateAsync(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
