import HttpSerivce from './http';
import axios, { Axios } from 'axios';

class TodoServices extends HttpSerivce {
  todoUrl: string;
  fetchingService: Axios;
  constructor() {
    super();
    this.todoUrl = 'todos';
    this.fetchingService = axios;
  }

  async getAllTodos() {
    const { data } = await this.get(this.todoUrl);
    return data;
  }

  async getSingleTodo(id: string) {
    const { data } = await this.get(`${this.todoUrl}/${id}`);
    return data;
  }

  async addTodo(data: any) {
    const res = await this.add(this.todoUrl, data);
    return res;
  }

  async deleteTodo(id: string) {
    await this.delete(`${this.todoUrl}/${id}`);
  }

  async editTodo(data: any) {
    const edited = await this.edit(`${this.todoUrl}/${data.id}`, data);
    return edited.data;
  }
}

const todoService = new TodoServices();
export default todoService;
