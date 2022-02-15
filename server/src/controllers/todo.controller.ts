import { Response, Request, NextFunction } from "express";
import Joi from "joi";
import TodoService from "../services/todo.service";

const TodoSheme = Joi.object({
  title: Joi.string().min(1).max(30).required(),
  description: Joi.string().min(1).max(200).required(),
});

export class TodoController {
  constructor(private todoService: TodoService) {}
  async getAllTodos(_: Request, res: Response, next: NextFunction) {
    try {
      const todos = await this.todoService.getAll();
      res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  }

  async getSingleTodo(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const todo = await this.todoService.getOne(id);
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }

  async addTodo(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    try {
      await TodoSheme.validateAsync(body);
      const newPost = await this.todoService.addTodo(body);
      await newPost.save();
      res.status(200).json(newPost);
    } catch (error) {
      next(error);
    }
  }

  async deleteTodo(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await this.todoService.deleteTodo(id);
      res.status(200).json(`Todo with id: ${id} deleted`);
    } catch (error) {
      next(error);
    }
  }
  async updateTodo(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const body = req.body;
    try {
      await TodoSheme.validateAsync(body);
      const updatedPost = await this.todoService.aupdateTodo(id, body);
      res.status(200).json(updatedPost);
    } catch (error) {
      next(error);
    }
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
