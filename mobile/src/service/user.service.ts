import HttpSerivce from './http';
import axios, { Axios } from 'axios';

class UserServices extends HttpSerivce {
  userUrl: string;
  fetchingService: Axios;
  constructor() {
    super();
    this.userUrl = 'user';
    this.fetchingService = axios;
  }

  async register(data: object) {
    const jwt = await this.add(`${this.userUrl}/registration`, data);
    return jwt;
  }

  async login(data: object) {
    const jwt = await this.add(`${this.userUrl}`, data);
    return jwt;
  }
}

const userService = new UserServices();
export default userService;
