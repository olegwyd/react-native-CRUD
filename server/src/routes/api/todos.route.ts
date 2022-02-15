import { Router, Response, Request, NextFunction } from "express";

import todoController from "../../controllers/todo.controller";

const todosRouter: Router = Router();

todosRouter.get("", todoController.getAllTodos.bind(todoController));
todosRouter.get("/:id", todoController.getSingleTodo.bind(todoController));
todosRouter.post("", todoController.addTodo.bind(todoController));
todosRouter.delete("/:id", todoController.deleteTodo.bind(todoController));
todosRouter.put("/:id", todoController.updateTodo.bind(todoController));
todosRouter.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(400).json(err);
});

export default todosRouter;
