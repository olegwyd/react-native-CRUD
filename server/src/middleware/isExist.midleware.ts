import { Response, Request, NextFunction } from 'express';

import Todo from '../models/Todo';
import { ApiError } from '../error/ApiError';

export const isExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo)
      return next(
        ApiError.badRequest(`Todo with id: ${req.params.id} doesn't exist`)
      );
    next();
  } catch (error) {
    next(error);
  }
};
