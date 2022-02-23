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

  async getAllFiltered(params: object) {
    const data = await this.getFiltered(this.todoUrl, params);
    return data;
  }

  async getSingleTodo(id: string) {
    const { data } = await this.get(`${this.todoUrl}/${id}`);
    return data;
  }

  async addTodo(data: object) {
    const res = await this.add(this.todoUrl, data);
    return res;
  }

  async deleteTodo(id: string) {
    await this.delete(`${this.todoUrl}/${id}`);
  }

  async editTodo(data: object) {
    const edited = await this.edit(`${this.todoUrl}/${data.id}`, data);
    return edited.data;
  }
}

const todoService = new TodoServices();
export default todoService;
