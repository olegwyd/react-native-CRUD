import { Response, Request } from 'express';

import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}
  async getAllTodos(_: Request, res: Response) {
    const todos = await this.todoService.getAll();
    res.status(200).json(todos);
  }

  async getSingleTodo(req: Request, res: Response) {
    const todo = await this.todoService.getOne(req.params.id);
    res.status(200).json(todo);
  }

  async addTodo(req: Request, res: Response) {
    const newPost = await this.todoService.addTodo(req.body);
    await newPost.save();
    res.status(200).json(newPost);
  }

  async deleteTodo(req: Request, res: Response) {
    await this.todoService.deleteTodo(req.params.id);
    res.status(200).json(`Todo with id: ${req.params.id} deleted`);
  }

  async updateTodo(req: Request, res: Response) {
    const updatedPost = await this.todoService.aupdateTodo(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedPost);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
