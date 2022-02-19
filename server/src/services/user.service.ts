import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface IUser {
  userName: string;
  email: string;
  password: string;
  varifyPassword: string;
  id: string;
}

const generateJwt = (id: string, email: string) => {
  return jwt.sign({ id, email }, "SECRET_KEY", {
    expiresIn: "1d",
  });
};

export default class UserService {
  async authUser(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      return { message: "Invalide Email" };
    }
    if (user) {
      const isPassword = await bcrypt.compare(password, user.password);
      if (!isPassword) return { message: "invalid Password" };
      const token = generateJwt(user?._id, user.email);
      return token;
    }
  }
  async createUser({ userName, email, password, varifyPassword }: IUser) {
    if (password !== varifyPassword) {
      return { message: "Passwords are not equal" };
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = await User.create({
      email: email,
      password: hashedPassword,
      userName: userName,
    });

    const token = generateJwt(newUser.email, newUser._id);
    return { user: newUser, token: token };
  }
}
