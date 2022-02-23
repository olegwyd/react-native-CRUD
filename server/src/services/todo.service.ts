import Todo from "../models/Todo";

interface Todo {
  title: string;
  description: string;
}

export default class TodoService {
  async getAll() {
    const todos = await Todo.find();
    return todos;
  }

  async getBySearch(name: string, text: string, page: string) {
    const title = new RegExp(name, "i");
    const description = new RegExp(text, "i");
    const limit = 4;
    const startIndex = (Number(page) - 1) * limit;
    const total = await Todo.countDocuments({});

    const todo = await Todo.find({
      $or: [{ title, description }],
    }).limit(limit)
    .skip(startIndex);
    return {data: todo,
      currentPage: Number(page),
      numberOfPage: Math.ceil(total / limit)};
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
