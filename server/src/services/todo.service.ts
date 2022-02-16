import Todo from '../models/Todo';

interface Todo {
  id: string;
}

export default class TodoService {
  async getAll() {
    const todos = await Todo.find();
    return todos;
  }
  async getOne(id: string) {
    const todo = await Todo.findById(id);
    return todo;
  }
  async addTodo(data: Todo) {
    const newTodo = new Todo(data);
    return newTodo;
  }
  async deleteTodo(id: string) {
    await Todo.findByIdAndRemove(id);
  }
  async aupdateTodo(id: string, data: Todo) {
    const updatedTodo = await Todo.findByIdAndUpdate(id, data);
    return updatedTodo;
  }
}
