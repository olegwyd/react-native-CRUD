import { Document, Model, model, Schema } from "mongoose";
/**
 * Interface to model the Todo Schema for TypeScript.
 * @param title:string
 * @param description:string
 */
export interface ITodo extends Document {
  title: string;
  description: string;
  year: String;
  public: Boolean;
  completed: Boolean;
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
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const Todo: Model<ITodo> = model("Todo", todosSchema);

export default Todo;
