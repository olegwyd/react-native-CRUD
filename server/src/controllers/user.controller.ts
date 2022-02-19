import { Request, Response } from "express";
import UsersServices from "../services/user.service";

class UsersController {
  constructor(private usersServices: UsersServices) {}
  async createUser(req: Request, res: Response) {
    const data = req.body;
    const newUser = await this.usersServices.createUser(data);
    res.status(200).json(newUser);
  }
  async getUser(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = await this.usersServices.authUser(email, password);
    res.status(200).json(result);
  }
}

const userController = new UsersController(new UsersServices());
export default userController;
