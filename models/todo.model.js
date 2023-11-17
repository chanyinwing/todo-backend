import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    task: String,
    isDone: Boolean,
})

const Todo = mongoose.model('Todo', TodoSchema)

export default Todo

