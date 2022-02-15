import { Document, Model, model, Schema } from "mongoose";
/**
 * Interface to model the Todo Schema for TypeScript.
 * @param title:string
 * @param description:string
 */
export interface Todo extends Document {
  title: string;
  description: string;
}

const todosSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    default: "2022",
  },
  public: {
    type: Boolean,
    default: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo: Model<Todo> = model("Todo", todosSchema);

export default Todo;
