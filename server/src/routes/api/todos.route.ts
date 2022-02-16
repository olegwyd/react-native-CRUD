import { Router, Response, Request, NextFunction } from 'express';

import todoController from '../../controllers/todo.controller';
import { isExist } from '../../middleware/isExist.midleware';
import { validateBody } from '../../middleware/validator.middleware';

const todosRouter: Router = Router();

todosRouter.get('', todoController.getAllTodos.bind(todoController));
todosRouter.get(
  '/:id',
  isExist,
  todoController.getSingleTodo.bind(todoController)
);
todosRouter.post('', validateBody, todoController.addTodo.bind(todoController));
todosRouter.delete(
  '/:id',
  isExist,
  todoController.deleteTodo.bind(todoController)
);
todosRouter.put(
  '/:id',
  isExist,
  validateBody,
  todoController.updateTodo.bind(todoController)
);
todosRouter.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(400).json(err);
});

export default todosRouter;
